import { getTracks } from "@/lib/data";
import TrackCard from "@/components/TrackCard";

export const metadata = {
  title: "Career Tracks — Codex Atelier",
  description: "Ten structured paths from Drawing Foundations to specialization. Study progresses through the traditional order.",
};

export default async function TracksPage() {
  const tracks = await getTracks();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-10">
        <h1
          className="text-3xl sm:text-4xl text-text-primary mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Career tracks
        </h1>
        <p className="text-text-secondary max-w-2xl">
          All tracks begin with Drawing Foundations, then branch into
          specialization. A structured curriculum designed to be followed
          at any pace.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
}
