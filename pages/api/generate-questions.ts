import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { article } = req.body
  if (!article) return res.status(400).json({ error: 'No article provided' })

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY
  if (!OPENAI_API_KEY) return res.status(500).json({ error: 'OpenAI key not set' })

  const prompt = `
You are an expert UPSC question setter.
Generate 2 UPSC Prelims MCQ questions and 3 UPSC Mains analytical questions based on the following article:
"""
${article}
"""
For each Prelims question, provide:
- The question
- Four options (A, B, C, D)
- The correct answer (e.g., "Answer: B")
For each Mains question, make them analytical and exam-appropriate.
Format your response as:
Prelims Questions:
1. <question>
A. <option1>
B. <option2>
C. <option3>
D. <option4>
Answer: <A/B/C/D>
...
Mains Questions:
1. <question>
2. <question>
3. <question>
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
      max_tokens: 700,
      temperature: 0.7,
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    return res.status(500).json({ error: error.error?.message || 'OpenAI error' })
  }

  const data = await response.json()
  const content = data.choices?.[0]?.message?.content || ''

  // Parse Prelims and Mains questions
  const prelimsMatch = content.match(/Prelims Questions:([\s\S]*?)(Mains Questions:|$)/)
  const mainsMatch = content.match(/Mains Questions:([\s\S]*)/)

  let prelims: Array<{ question: string, options: Record<string, string>, answer: string }> = []
  let mains: string[] = []

  if (prelimsMatch) {
    // Split by question number
    prelims = prelimsMatch[1]
      .split(/\n\d+\. /)
      .map((q: string) => q.trim())
      .filter((q: string) => Boolean(q))
      .map((q: string) => {
        // Extract question, options, and answer
        const [question, ...rest] = q.split('\n')
        const options: Record<string, string> = {}
        let answer = ''
        rest.forEach((line: string) => {
          if (/^[A-D]\. /.test(line)) {
            const key = line[0]
            options[key] = line.slice(3).trim()
          } else if (/^Answer: /.test(line)) {
            answer = line.replace('Answer: ', '').trim()
          }
        })
        return { question: question?.replace(/^\d+\.\s*/, ''), options, answer }
      })
  }

  if (mainsMatch) {
    mains = mainsMatch[1]
      .split(/\n\d+\. /)
      .map((q: string) => q.trim().replace(/^\d+\.\s*/, ''))
      .filter((q: string) => Boolean(q))
  }

  res.status(200).json({ prelims, mains })
} 