import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { feedback } = req.body
  if (!feedback) return res.status(400).json({ error: 'No feedback provided' })

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY
  if (!OPENAI_API_KEY) return res.status(500).json({ error: 'OpenAI key not set' })

  const prompt = `
Categorize and summarize this user feedback for a UPSC study platform admin:
"${feedback}"
Return a category and a one-sentence summary.
  `.trim()

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 128,
      temperature: 0.5,
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    return res.status(500).json({ error: error.error?.message || 'OpenAI error' })
  }

  const data = await response.json()
  const result = data.choices?.[0]?.message?.content || ""
  res.status(200).json({ result })
} 