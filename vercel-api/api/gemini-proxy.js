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

  const { model = 'gemini-2.5-flash', input } = req.body || {}
    if (!input) return res.status(400).json({ error: 'Missing input in request body' })

    // Build the endpoint and request according to Google Generative API patterns.
    // Prefer Authorization: Bearer if GEMINI_KEY appears to be a bearer token, otherwise fall back to ?key= API key.
    // Candidate endpoint patterns to try (some projects/APIs use different host or version)
    const candidates = [
      `https://generativelanguage.googleapis.com/v1beta2/models/${model}:generate`,
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generate`,
      `https://generativeai.googleapis.com/v1beta2/models/${model}:generate`,
      `https://generativeai.googleapis.com/v1beta/models/${model}:generate`
    ]

    const isBearer = typeof GEMINI_KEY === 'string' && GEMINI_KEY.trim().startsWith('ya29.')
    const headersBase = { 'Content-Type': 'application/json' }

    // Prepare a generative prompt body compatible with common variants
    const body = {
      prompt: { text: input },
      generation: { temperature: 0.3, maxOutputTokens: 512 }
    }

    let lastError = null
    const tried = []
    for (const candidateUrl of candidates) {
      try {
        const headers = { ...headersBase }
        let url = candidateUrl
        if (isBearer) headers.Authorization = `Bearer ${GEMINI_KEY}`
        else url = `${candidateUrl}?key=${encodeURIComponent(GEMINI_KEY)}`
  // Mask any API key in the URL before recording it in diagnostics
  const maskedUrl = url.replace(/([?&]key=)[^&]+/i, '$1[REDACTED]')
  tried.push(maskedUrl)
        const response = await axios.post(url, body, { headers, timeout: 60000 })
        // If successful, return immediately
        return res.status(response.status).json(response.data)
      } catch (e) {
        // If 404, try the next candidate. Otherwise keep the error and break
        const status = e?.response?.status
        lastError = e
        if (status === 404) {
          // try next candidate
          continue
        } else {
          // Non-404 error; return immediately with details
          console.error('Gemini proxy error (non-404):', e?.response?.data || e.message || e)
          const statusCode = status || 500
          const data = e?.response?.data || { error: e.message }
          return res.status(statusCode).json({ error: data, tried })
        }
      }
    }

    // If we exhausted candidates, return the last error with diagnostic info
    console.error('Gemini proxy error: all endpoint candidates failed', lastError?.message || lastError)
    const status = lastError?.response?.status || 502
    const data = lastError?.response?.data || { error: lastError?.message || 'Failed to reach Gemini API' }
    return res.status(status).json({ error: data, tried })

    return res.status(response.status).json(response.data)
  } catch (err) {
    console.error('Gemini proxy error:', err?.response?.data || err.message || err)
    const status = err?.response?.status || 500
    const data = err?.response?.data || { error: err.message }
    return res.status(status).json(data)
  }
}
