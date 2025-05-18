import { createClient } from '@supabase/supabase-js';
import { defaultFlashcardSets } from '../data/defaultFlashcards';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Use service role for inserts
const supabase = createClient(supabaseUrl, supabaseKey);

const user_id = 'public-or-admin-user-id'; // Replace with a valid user id or null for public

async function seed() {
  for (const set of defaultFlashcardSets) {
    // Insert set
    const { data: setData, error: setError } = await supabase
      .from('flashcard_sets')
      .insert([{ title: set.title, description: set.description, subject: set.subject, user_id, tags: set.tags }])
      .select()
      .single();

    if (setError) {
      console.error(`Error inserting set ${set.title}:`, setError.message);
      continue;
    }

    // Insert cards
    const cardsToInsert = set.cards.map(card => ({
      set_id: setData.id,
      front: card.front,
      back: card.back,
      user_id,
    }));

    const { error: cardError } = await supabase
      .from('flashcards')
      .insert(cardsToInsert);

    if (cardError) {
      console.error(`Error inserting cards for set ${set.title}:`, cardError.message);
    } else {
      console.log(`Inserted set: ${set.title} with ${cardsToInsert.length} cards.`);
    }
  }
}

seed().then(() => {
  console.log('Seeding complete.');
  process.exit(0);
}); 