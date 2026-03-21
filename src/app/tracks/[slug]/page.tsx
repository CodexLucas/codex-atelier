import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getTrackBySlug,
  getModulesByTrack,
  getTracks,
  getConceptsForModules,
  getTopResourcesForConcepts,
  getEditorialForModules,
  getConceptEdges,
} from "@/lib/data";
import ModuleCard from "@/components/ModuleCard";

export async function generateStaticParams() {
  const tracks = await getTracks();
  return tracks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const track = await getTrackBySlug(slug);
  if (!track) return { title: "Track Not Found" };
  return {
    title: `${track.name} — Codex Atelier`,
    description: track.description,
  };
}

// Group resource_concepts by concept_id, pick top 5 by view_count
function groupResources(rawResources: any[]) {
  const byConceptId: Record<string, any[]> = {};
  for (const rc of rawResources) {
    const cid = rc.concept_id;
    if (!byConceptId[cid]) byConceptId[cid] = [];
    const r = rc.resources;
    if (r) {
      byConceptId[cid].push({
        ...r,
        coverage: rc.coverage,
      });
    }
  }
  // Sort each concept's resources: definitive first, then deep_dive, then covers; within tier by view_count
  const coverageOrder: Record<string, number> = { definitive: 0, deep_dive: 1, covers: 2 };
  for (const cid of Object.keys(byConceptId)) {
    byConceptId[cid].sort((a: any, b: any) => {
      const ca = coverageOrder[a.coverage] ?? 3;
      const cb = coverageOrder[b.coverage] ?? 3;
      if (ca !== cb) return ca - cb;
      return (b.view_count ?? 0) - (a.view_count ?? 0);
    });
    byConceptId[cid] = byConceptId[cid].slice(0, 5);
  }
  return byConceptId;
}

export default async function TrackDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const track = await getTrackBySlug(slug);
  if (!track) notFound();

  const modules = await getModulesByTrack(track.id);
  const moduleIds = modules.map((m) => m.id);

  // Fetch concepts, editorial, and resources in parallel
  const [rawConcepts, rawEditorial, rawResources, rawEdges] = await Promise.all([
    getConceptsForModules(moduleIds),
    getEditorialForModules(moduleIds),
    getConceptsForModules(moduleIds).then((mc) => {
      const conceptIds = mc
        .map((r: any) => r.concepts?.id)
        .filter(Boolean);
      return getTopResourcesForConcepts(conceptIds);
    }),
    getConceptsForModules(moduleIds).then((mc) => {
      const conceptIds = mc
        .map((r: any) => r.concepts?.id)
        .filter(Boolean);
      return getConceptEdges(conceptIds);
    }),
  ]);

  // Group concepts by module
  const conceptsByModule: Record<string, any[]> = {};
  for (const mc of rawConcepts) {
    const mid = mc.module_id;
    if (!conceptsByModule[mid]) conceptsByModule[mid] = [];
    if (mc.concepts) conceptsByModule[mid].push(mc.concepts);
  }

  // Group editorial by module
  const editorialByModule: Record<string, Record<string, string>> = {};
  for (const ed of rawEditorial) {
    const mid = ed.target_id;
    if (!editorialByModule[mid]) editorialByModule[mid] = {};
    editorialByModule[mid][ed.note_type] = ed.content;
  }

  // Group resources by concept
  const resourcesByConcept = groupResources(rawResources);

  // Group edges
  const edgesByFromConcept: Record<string, any[]> = {};
  for (const edge of rawEdges) {
    const fid = edge.from_concept_id;
    if (!edgesByFromConcept[fid]) edgesByFromConcept[fid] = [];
    edgesByFromConcept[fid].push(edge);
  }

  // Build concept name lookup for edges
  const allConcepts = rawConcepts.map((mc: any) => mc.concepts).filter(Boolean);
  const conceptNameMap: Record<string, string> = {};
  for (const c of allConcepts) {
    conceptNameMap[c.id] = c.name;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      <nav className="mb-8 text-sm text-text-muted">
        <Link href="/tracks" className="hover:text-accent transition-colors">
          Tracks
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text-secondary">{track.name}</span>
      </nav>

      <div className="mb-12">
        <h1
          className="text-3xl sm:text-5xl text-text-primary mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {track.name}
        </h1>
        {track.estimated_years && (
          <div className="inline-flex items-center gap-2 rounded-full bg-bg-card border border-border px-4 py-1.5 text-sm text-text-secondary mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            ~{track.estimated_years} years estimated
          </div>
        )}
        {track.description && (
          <p className="text-text-secondary leading-relaxed max-w-2xl">
            {track.description}
          </p>
        )}
      </div>

      {modules.length > 0 ? (
        <div className="space-y-6">
          <h2
            className="text-xl text-text-primary mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Modules
          </h2>
          {modules.map((mod, i) => (
            <ModuleCard
              key={mod.id}
              module={mod}
              index={i}
              tagline={editorialByModule[mod.id]?.tagline}
              concepts={conceptsByModule[mod.id] ?? []}
              resourcesByConcept={resourcesByConcept}
              edgesByFromConcept={edgesByFromConcept}
              conceptNameMap={conceptNameMap}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-border bg-bg-card p-8 text-center">
          <h2
            className="text-xl text-text-primary mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Modules coming soon
          </h2>
          <p className="text-sm text-text-secondary max-w-md mx-auto">
            We are building the detailed curriculum for this track. Each module
            will include concepts, prerequisites, and recommended resources.
          </p>
        </div>
      )}

      <div className="mt-12">
        <Link
          href="/tracks"
          className="text-sm text-text-muted hover:text-accent transition-colors"
        >
          &larr; All tracks
        </Link>
      </div>
    </div>
  );
}
