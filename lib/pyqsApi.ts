import { supabase } from "./supabaseClient"

export async function createPYQ(pyq) {
  const { data, error } = await supabase.from("pyqs").insert([pyq]).select().single()
  if (error) throw error
  return data
}

export async function getPYQs() {
  const { data, error } = await supabase.from("pyqs").select("*").order("year", { ascending: false })
  if (error) throw error
  return data
}

export async function updatePYQ(id, updates) {
  const { data, error } = await supabase
    .from("pyqs")
    .update(updates)
    .eq("id", id)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deletePYQ(id) {
  const { error } = await supabase.from("pyqs").delete().eq("id", id)
  if (error) throw error
  return true
} 