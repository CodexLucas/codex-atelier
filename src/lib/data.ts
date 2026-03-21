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

// ─── Canonical Works (for reading list) ───────────────────
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

// ─── Concepts (for modules) ──────────────────────────────
export async function getConceptsForModules(moduleIds: string[]) {
  if (!moduleIds.length) return [];
  const supabase = await createClient();
  const { data } = await supabase
    .schema("atelier")
    .from("module_concepts")
    .select("module_id, concepts(id, name, slug, description, skill_level)")
    .in("module_id", moduleIds);
  return data ?? [];
}

// ─── Concept Edges ───────────────────────────────────────
export async function getConceptEdges(conceptIds: string[]) {
  if (!conceptIds.length) return [];
  const supabase = await createClient();
  const { data } = await supabase
    .schema("atelier")
    .from("concept_edges")
    .select(
      "from_concept_id, to_concept_id, relation_type, notes"
    )
    .in("from_concept_id", conceptIds);
  return data ?? [];
}

// ─── Top Resources for Concepts ──────────────────────────
export async function getTopResourcesForConcepts(conceptIds: string[]) {
  if (!conceptIds.length) return [];
  const supabase = await createClient();
  const { data } = await supabase
    .schema("atelier")
    .from("resource_concepts")
    .select(
      "concept_id, coverage, resources(id, title, youtube_id, channel_name, view_count)"
    )
    .in("concept_id", conceptIds)
    .in("coverage", ["definitive", "deep_dive", "covers"])
    .order("coverage", { ascending: false })
    .limit(5000);
  return data ?? [];
}

// ─── Editorial (taglines, overviews) ─────────────────────
export async function getEditorialForModules(moduleIds: string[]) {
  if (!moduleIds.length) return [];
  const supabase = await createClient();
  const { data } = await supabase
    .schema("atelier")
    .from("editorial")
    .select("target_id, note_type, content")
    .eq("target_type", "module")
    .in("target_id", moduleIds)
    .in("note_type", ["tagline", "overview"]);
  return data ?? [];
}
