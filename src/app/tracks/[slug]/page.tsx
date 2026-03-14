import { notFound } from "next/navigation";
import Link from "next/link";
import { getTrackBySlug, getModulesByTrack, getTracks } from "@/lib/data";

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

export default async function TrackDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const track = await getTrackBySlug(slug);
  if (!track) notFound();

  const modules = await getModulesByTrack(track.id);

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
        <div className="space-y-4">
          <h2
            className="text-xl text-text-primary mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Modules
          </h2>
          {modules.map((mod, i) => (
            <div
              key={mod.id}
              className="flex items-start gap-4 rounded-lg border border-border bg-bg-card p-5"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent text-sm flex items-center justify-center" style={{ fontWeight: 500 }}>
                {i + 1}
              </div>
              <div>
                <h3 className="text-text-primary" style={{ fontWeight: 500 }}>{mod.name}</h3>
                {mod.part_name && (
                  <span className="text-xs text-text-muted">{mod.part_name}</span>
                )}
                {mod.description && (
                  <p className="text-sm text-text-secondary mt-1">{mod.description}</p>
                )}
                {mod.estimated_hours && (
                  <span className="text-xs text-text-muted mt-2 inline-block">
                    ~{mod.estimated_hours}h
                  </span>
                )}
              </div>
            </div>
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
