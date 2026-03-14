import { createClient } from "@/lib/supabase/server";

// ─── Traditions ───────────────────────────────────────────
export async function getTraditions() {
  const supabase = await createClient();
  const { data } = await supabase
    .schema("atelier")
    .from("traditions")
    .select("*")
    .order("name");
  return data ?? [];
}

// ─── Disciplines ──────────────────────────────────────────
export async function getDisciplines() {
  const supabase = await createClient();
  const { data } = await supabase
    .schema("atelier")
    .from("disciplines")
    .select("*")
    .order("sort_order");
  return data ?? [];
}

// ─── Tracks ───────────────────────────────────────────────
export async function getTracks() {
  const supabase = await createClient();
  const { data } = await supabase
    .schema("atelier")
    .from("tracks")
    .select("*")
    .order("sort_order");
  return data ?? [];
}

export async function getTrackBySlug(slug: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .schema("atelier")
    .from("tracks")
    .select("*")
    .eq("slug", slug)
    .single();
  return data;
}

// ─── Canonical Works ──────────────────────────────────────
export async function getCanonicalWorks() {
  const supabase = await createClient();
  const { data } = await supabase
    .schema("atelier")
    .from("canonical_works")
    .select("*, traditions(name, slug)")
    .order("title");
  return data ?? [];
}

// ─── Modules (for track detail) ───────────────────────────
export async function getModulesByTrack(trackId: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .schema("atelier")
    .from("modules")
    .select("*")
    .eq("track_id", trackId)
    .order("sort_order");
  return data ?? [];
}

// ─── Platforms ────────────────────────────────────────────
export async function getPlatforms() {
  const supabase = await createClient();
  const { data } = await supabase
    .schema("atelier")
    .from("platforms")
    .select("*")
    .order("name");
  return data ?? [];
}

// ─── RAG Search ───────────────────────────────────────────
export async function searchExtractions(queryEmbedding: number[], threshold = 0.3, count = 10) {
  const supabase = await createClient();
  const { data } = await supabase
    .schema("atelier")
    .rpc("match_extractions", {
      query_embedding: queryEmbedding,
      match_threshold: threshold,
      match_count: count,
    });
  return data ?? [];
}
