import { supabase } from "./supabaseClient"

export async function createNewsArticle(article) {
  const { data, error } = await supabase.from("news_articles").insert([article]).select().single()
  if (error) throw error
  return data
}

export async function getNewsArticles() {
  const { data, error } = await supabase
    .from("news_articles")
    .select("*")
    .order("date", { ascending: false })
  if (error) throw error
  return data
}

export async function updateNewsArticle(id, updates) {
  const { data, error } = await supabase
    .from("news_articles")
    .update(updates)
    .eq("id", id)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteNewsArticle(id) {
  const { error } = await supabase.from("news_articles").delete().eq("id", id)
  if (error) throw error
  return true
} 