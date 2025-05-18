import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { flashcards, topic, user_id } = req.body;
  if (!flashcards || !Array.isArray(flashcards) || !topic) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  // Create a flashcard set
  const { data: set, error: setError } = await supabase
    .from('flashcard_sets')
    .insert([{ title: topic, user_id }])
    .select()
    .single();

  if (setError) return res.status(500).json({ error: setError.message });

  // Insert flashcards
  const cardsToInsert = flashcards.map((fc: any) => ({
    set_id: set.id,
    front: fc.front,
    back: fc.back,
    user_id,
  }));

  const { error: cardError } = await supabase
    .from('flashcards')
    .insert(cardsToInsert);

  if (cardError) return res.status(500).json({ error: cardError.message });

  res.status(200).json({ success: true, set_id: set.id });
} 