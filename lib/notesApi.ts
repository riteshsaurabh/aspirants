import { supabase } from "./supabaseClient"

export async function createNote(note) {
  const { data, error } = await supabase.from("notes").insert([note]).select().single()
  if (error) throw error
  return data
}

export async function getNotes(user_id) {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false })
  if (error) throw error
  return data
}

export async function updateNote(id, updates) {
  const { data, error } = await supabase
    .from("notes")
    .update(updates)
    .eq("id", id)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteNote(id) {
  const { error } = await supabase.from("notes").delete().eq("id", id)
  if (error) throw error
  return true
} 