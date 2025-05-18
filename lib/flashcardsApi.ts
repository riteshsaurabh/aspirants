import { supabase } from "./supabaseClient"

export async function createFlashcardSet(set) {
  const { data, error } = await supabase.from("flashcard_sets").insert([set]).select().single()
  if (error) throw error
  return data
}

export async function getFlashcardSets() {
  const { data, error } = await supabase.from("flashcard_sets").select("*").order("created_at", { ascending: false })
  if (error) throw error
  return data
}

export async function updateFlashcardSet(id, updates) {
  const { data, error } = await supabase
    .from("flashcard_sets")
    .update(updates)
    .eq("id", id)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteFlashcardSet(id) {
  const { error } = await supabase.from("flashcard_sets").delete().eq("id", id)
  if (error) throw error
  return true
} 