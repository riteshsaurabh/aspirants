import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { topic } = req.body;
  if (!topic) return res.status(400).json({ error: 'No topic provided' });

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_API_KEY) return res.status(500).json({ error: 'OpenAI key not set' });

  const prompt = `
Generate 5 UPSC flashcards on the topic: "${topic}".
Each flashcard should be in JSON format: { "front": "...", "back": "..." }
Return an array of such objects.
`.trim();

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
  });

  if (!response.ok) {
    const error = await response.json();
    return res.status(500).json({ error: error.error?.message || 'OpenAI error' });
  }

  const data = await response.json();
  // Try to extract JSON array from the response
  const match = data.choices?.[0]?.message?.content?.match(/\[[\s\S]*\]/);
  let flashcards = [];
  if (match) {
    try {
      flashcards = JSON.parse(match[0]);
    } catch (e) {
      return res.status(500).json({ error: 'Failed to parse flashcards.' });
    }
  }
  res.status(200).json({ flashcards });
} 