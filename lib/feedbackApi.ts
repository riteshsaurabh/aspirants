import { supabase } from "./supabaseClient"

export async function createFeedback(feedback: any) {
  const { data, error } = await supabase.from("feedback").insert([feedback]).select().single()
  if (error) throw error
  return data
}

export async function getFeedback() {
  const { data, error } = await supabase.from("feedback").select("*").order("created_at", { ascending: false })
  if (error) throw error
  return data
}

export async function updateFeedback(id: string, updates: any) {
  const { data, error } = await supabase
    .from("feedback")
    .update(updates)
    .eq("id", id)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteFeedback(id: string) {
  const { error } = await supabase.from("feedback").delete().eq("id", id)
  if (error) throw error
  return true
} 