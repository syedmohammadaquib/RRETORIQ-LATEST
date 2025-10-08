const axios = require('axios')
const Busboy = require('busboy')
const FormData = require('form-data')

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

// This handler uses Busboy to parse multipart file uploads and streams them to OpenAI.
module.exports = (req, res) => {
  setCors(req, res)
  if (req.method === 'OPTIONS') return res.status(204).end()

  const OPENAI_KEY = process.env.OPENAI_KEY
  if (!OPENAI_KEY) return res.status(500).json({ error: 'OpenAI key not configured on server.' })

  if (!req.headers['content-type'] || !req.headers['content-type'].includes('multipart/form-data')) {
    return res.status(400).json({ error: 'This endpoint expects multipart/form-data with field `file`' })
  }

  try {
    const busboy = new Busboy({ headers: req.headers })
    let fileStream = null
    let filename = 'recording.webm'
    const fields = {}

    busboy.on('file', (fieldname, file, info) => {
      const { filename: name } = info || {}
      if (name) filename = name
      fileStream = file
      // Do not consume the stream here; we will attach it to form-data when 'finish' fires
    })

    busboy.on('field', (name, val) => {
      fields[name] = val
    })

    busboy.on('finish', async () => {
      if (!fileStream) return res.status(400).json({ error: 'Missing file field' })

      try {
        const form = new FormData()
        form.append('file', fileStream, { filename })
        form.append('model', 'whisper-1')
        if (fields.language) form.append('language', fields.language)
        if (fields.temperature) form.append('temperature', fields.temperature)
        if (fields.response_format) form.append('response_format', fields.response_format)

        const response = await axios.post('https://api.openai.com/v1/audio/transcriptions', form, {
          headers: {
            Authorization: `Bearer ${OPENAI_KEY}`,
            ...form.getHeaders()
          },
          timeout: 120000,
          maxContentLength: Infinity,
          maxBodyLength: Infinity
        })

        return res.status(response.status).json(response.data)
      } catch (err) {
        console.error('Whisper proxy error:', err?.response?.data || err.message || err)
        const status = err?.response?.status || 500
        const data = err?.response?.data || { error: err.message }
        return res.status(status).json(data)
      }
    })

    req.pipe(busboy)
  } catch (err) {
    console.error('Whisper proxy setup error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
