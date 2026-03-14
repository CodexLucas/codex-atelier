import Link from "next/link";

// Icons mapped to track slugs
const TRACK_ICONS: Record<string, string> = {
  "drawing-foundations": "✏️",
  "figure": "🧍",
  "portrait": "👤",
  "painting": "🎨",
  "illustration": "📖",
  "entertainment-design": "🎬",
  "animation": "🎞️",
  "landscape": "🌄",
  "3d-digital": "🧊",
  "sculpture": "🗿",
};

interface Track {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  estimated_years: string | null;
  sort_order: number | null;
}

export default function TrackCard({ track }: { track: Track }) {
  const icon = TRACK_ICONS[track.slug] || "📐";

  return (
    <Link
      href={`/tracks/${track.slug}`}
      className="group block rounded-lg border border-border bg-bg-card p-5 transition-all hover:border-accent/40 hover:bg-bg-hover"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3
        className="text-lg text-text-primary group-hover:text-accent transition-colors mb-1"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {track.name}
      </h3>
      {track.estimated_years && (
        <span className="text-xs text-text-muted">
          ~{track.estimated_years} years
        </span>
      )}
      {track.description && (
        <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">
          {track.description}
        </p>
      )}
    </Link>
  );
}
