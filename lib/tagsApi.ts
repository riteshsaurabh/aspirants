import { supabase } from "./supabaseClient"

export async function createTag(tag: any) {
  const { data, error } = await supabase.from("tags").insert([tag]).select().single()
  if (error) throw error
  return data
}

export async function getTags() {
  const { data, error } = await supabase.from("tags").select("*").order("name", { ascending: true })
  if (error) throw error
  return data
}

export async function updateTag(id: string, updates: any) {
  const { data, error } = await supabase
    .from("tags")
    .update(updates)
    .eq("id", id)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteTag(id: string) {
  const { error } = await supabase.from("tags").delete().eq("id", id)
  if (error) throw error
  return true
} 