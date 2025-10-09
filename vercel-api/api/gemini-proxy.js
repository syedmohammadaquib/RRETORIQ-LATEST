const axios = require('axios')

function setCors(req, res) {
  const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean)
  const origin = req.headers.origin
  if (!origin) {
    res.setHeader('Access-Control-Allow-Origin', '*')
  } else if (allowed.length === 0 || allowed.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
}

module.exports = async (req, res) => {
  setCors(req, res)
  if (req.method === 'OPTIONS') return res.status(204).end()
  try {
    const GEMINI_KEY = process.env.GEMINI_KEY
    if (!GEMINI_KEY) return res.status(500).json({ error: 'Gemini key not configured on server.' })

  const { model = 'gemini-2.0-flash', input } = req.body || {}
    if (!input) return res.status(400).json({ error: 'Missing input in request body' })

    // Build the endpoint and request according to Google Generative API patterns.
    // Prefer Authorization: Bearer if GEMINI_KEY appears to be a bearer token, otherwise fall back to ?key= API key.
    // Candidate endpoint patterns to try (some projects/APIs use different host or version)
    const candidates = []

    // If a project id and location are provided, prefer project-scoped endpoints
    const projectId = process.env.GEMINI_PROJECT_ID || process.env.GENERATIVE_PROJECT_ID || process.env.GCLOUD_PROJECT
    const projectLocation = process.env.GEMINI_PROJECT_LOCATION || process.env.GENERATIVE_PROJECT_LOCATION || 'global'
    if (projectId) {
      candidates.push(`https://generativelanguage.googleapis.com/v1beta/projects/${projectId}/locations/${projectLocation}/models/${model}`)
      candidates.push(`https://generativeai.googleapis.com/v1beta/projects/${projectId}/locations/${projectLocation}/models/${model}`)
      candidates.push(`https://generativelanguage.googleapis.com/v1beta2/projects/${projectId}/locations/${projectLocation}/models/${model}`)
      candidates.push(`https://generativeai.googleapis.com/v1beta2/projects/${projectId}/locations/${projectLocation}/models/${model}`)
    }

    // Fallback to global model endpoints (base path; we'll append method suffixes)
    candidates.push(`https://generativelanguage.googleapis.com/v1beta2/models/${model}`)
    candidates.push(`https://generativelanguage.googleapis.com/v1beta/models/${model}`)
    candidates.push(`https://generativeai.googleapis.com/v1beta2/models/${model}`)
    candidates.push(`https://generativeai.googleapis.com/v1beta/models/${model}`)

    const isBearer = typeof GEMINI_KEY === 'string' && GEMINI_KEY.trim().startsWith('ya29.')
    const headersBase = { 'Content-Type': 'application/json', Accept: 'application/json' }

    // Prepare multiple candidate body shapes to support different Google Generative API variants.
    // The frontend sends { input } so try that first, then fall back to common alternatives.
    const bodyVariants = [
      { input },
      { prompt: { text: input } },
      { prompt: input },
      { text: input },
      { instances: [{ input }] },
      { messages: [{ role: 'user', content: [{ type: 'text', text: input }] }] }
    ]

    let lastError = null
    const tried = []
  // Include multiple possible method suffixes used by different Generative API variants.
  // Some endpoints accept the model URL directly (no suffix), others use :generateContent, :generate,
  // :generateText, :predict or :responses depending on API surface/version.
  const suffixes = ['', ':generateContent', ':generate', ':generateText', ':predict', ':responses']
    for (const candidateUrl of candidates) {
      for (const suffix of suffixes) {
        const urlBase = `${candidateUrl}${suffix}`
        // Try all body variants for this url/suffix until one succeeds
        for (const body of bodyVariants) {
          try {
            const headers = { ...headersBase }
            let url = urlBase
            if (isBearer) headers.Authorization = `Bearer ${GEMINI_KEY}`
            else url = `${url}?key=${encodeURIComponent(GEMINI_KEY)}`

            // Mask any API key in the URL before recording it in diagnostics
            const maskedUrl = url.replace(/([?&]key=)[^&]+/i, '$1[REDACTED]')
            tried.push({ url: maskedUrl, bodyShape: Object.keys(body) })

            const response = await axios.post(url, body, { headers, timeout: 60000 })
            // If successful, return immediately
            return res.status(response.status).json(response.data)
          } catch (e) {
            const status = e?.response?.status
            lastError = e
            // If the path wasn't found, try next candidate
            if (status === 404) {
              break // break bodyVariants loop and try next suffix/candidate
            }
            // If payload schema mismatch (400), try next body variant rather than failing immediately
            if (status === 400) {
              // continue to next body variant
              continue
            }
            // For auth errors or other server errors, return immediately
            console.error('Gemini proxy error (non-404/400):', e?.response?.data || e.message || e)
            const statusCode = status || 500
            const data = e?.response?.data || { error: e.message }
            return res.status(statusCode).json({ error: data, tried })
          }
        }
      }
    }

    // If we exhausted candidates, return the last error with diagnostic info
    console.error('Gemini proxy error: all endpoint candidates failed', lastError?.message || lastError)
  const status = lastError?.response?.status || 502
  const data = lastError?.response?.data || { error: lastError?.message || 'Failed to reach Gemini API' }
  return res.status(status).json({ error: data, tried })
  } catch (err) {
    console.error('Gemini proxy error:', err?.response?.data || err.message || err)
    const status = err?.response?.status || 500
    const data = err?.response?.data || { error: err.message }
    return res.status(status).json(data)
  }
}
