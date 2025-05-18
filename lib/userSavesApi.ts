import { supabase } from "./supabaseClient"

// News Article Saves
export async function saveNewsArticle(entry: any) {
  const { data, error } = await supabase.from("user_saved_news_articles").insert([entry]).select().single()
  if (error) throw error
  return data
}
export async function getSavedNewsArticles(user_id: string) {
  const { data, error } = await supabase.from("user_saved_news_articles").select("*").eq("user_id", user_id)
  if (error) throw error
  return data
}
export async function deleteSavedNewsArticle(id: string) {
  const { error } = await supabase.from("user_saved_news_articles").delete().eq("id", id)
  if (error) throw error
  return true
}

// PYQ Saves
export async function savePYQ(entry: any) {
  const { data, error } = await supabase.from("user_saved_pyqs").insert([entry]).select().single()
  if (error) throw error
  return data
}
export async function getSavedPYQs(user_id: string) {
  const { data, error } = await supabase.from("user_saved_pyqs").select("*").eq("user_id", user_id)
  if (error) throw error
  return data
}
export async function deleteSavedPYQ(id: string) {
  const { error } = await supabase.from("user_saved_pyqs").delete().eq("id", id)
  if (error) throw error
  return true
}

// Flashcard Set Saves
export async function saveFlashcardSet(entry: any) {
  const { data, error } = await supabase.from("user_saved_flashcard_sets").insert([entry]).select().single()
  if (error) throw error
  return data
}
export async function getSavedFlashcardSets(user_id: string) {
  const { data, error } = await supabase.from("user_saved_flashcard_sets").select("*").eq("user_id", user_id)
  if (error) throw error
  return data
}
export async function deleteSavedFlashcardSet(id: string) {
  const { error } = await supabase.from("user_saved_flashcard_sets").delete().eq("id", id)
  if (error) throw error
  return true
} 