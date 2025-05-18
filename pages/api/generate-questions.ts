import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { article } = req.body
  if (!article) return res.status(400).json({ error: 'No article provided' })

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY
  if (!OPENAI_API_KEY) return res.status(500).json({ error: 'OpenAI key not set' })

  const prompt = `
You are an expert UPSC question setter.
Generate 5 UPSC-style questions based on the following news article:
"${article}"
Questions should be analytical, relevant, and exam-appropriate.
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
      max_tokens: 512,
      temperature: 0.7,
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    return res.status(500).json({ error: error.error?.message || 'OpenAI error' })
  }

  const data = await response.json()
  const questions = data.choices?.[0]?.message?.content?.split('\n').filter(Boolean) || []

  res.status(200).json({ questions })
} 