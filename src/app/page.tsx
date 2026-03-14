import Link from "next/link";
import { getTracks, getDisciplines } from "@/lib/data";
import TrackCard from "@/components/TrackCard";
import DisciplineChip from "@/components/DisciplineChip";
import ZoneSection from "@/components/ZoneSection";

export default async function HomePage() {
  const [tracks, disciplines] = await Promise.all([getTracks(), getDisciplines()]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      {/* ─── Hero ─────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-5" style={{ fontWeight: 500 }}>
            Art education, structured
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Learn to draw the way{" "}
            <em className="text-accent">it was always meant to be taught</em>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mb-10 leading-relaxed">
            Structured learning paths from gesture to finished work. Every
            YouTube tutorial, every online course — organized into the
            curriculum that actually works, so you always know what to study
            next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/tracks"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-7 py-3.5 text-sm text-bg-primary hover:bg-accent-hover transition-colors"
              style={{ fontWeight: 500 }}
            >
              Explore the paths
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-border px-7 py-3.5 text-sm text-text-secondary hover:text-text-primary hover:border-border-hover transition-all"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Three Zones ──────────────────────────────── */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-12">
        <div className="rounded-lg p-7 bg-zone-foundations">
          <h3
            className="text-lg text-text-primary mb-2"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Foundations
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            Structured paths from absolute beginner to confident draftsman.
            Proportion, gesture, form, light — in the right order.
          </p>
        </div>
        <div className="rounded-lg p-7 bg-zone-industry text-bg-primary">
          <h3
            className="text-lg mb-2"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "#C8C4BF" }}
          >
            Industry
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "#9E9A95" }}>
            Portfolio preparation, career paths, studio standards. What the
            industry actually looks for and how to get there.
          </p>
        </div>
        <div className="rounded-lg p-7 bg-accent text-bg-primary">
          <h3
            className="text-lg mb-2"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "#F5F0E6" }}
          >
            Expression
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "#E4B09F" }}>
            Finding your voice. Art philosophy, creative development, personal
            projects. The part no curriculum teaches.
          </p>
        </div>
      </section>

      {/* ─── Career Tracks ────────────────────────────── */}
      <ZoneSection
        title="Career tracks"
        subtitle="Ten paths from Drawing Foundations to specialization. Every track starts with learning to see."
        accentColor="bg-accent"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </ZoneSection>

      {/* ─── Disciplines ──────────────────────────────── */}
      <ZoneSection
        title="Disciplines"
        subtitle="The building blocks. Every concept and resource belongs to a discipline."
        accentColor="bg-link"
      >
        <div className="flex flex-wrap gap-3">
          {disciplines.map((d) => (
            <DisciplineChip key={d.id} discipline={d} />
          ))}
        </div>
      </ZoneSection>

      {/* ─── How It Works ─────────────────────────────── */}
      <section id="how-it-works" className="py-16 sm:py-20">
        <div className="rounded-lg border border-border bg-bg-card p-8 sm:p-12">
          <h2
            className="text-2xl sm:text-3xl text-text-primary mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="w-8 h-8 rounded-full bg-accent/10 text-accent text-sm flex items-center justify-center mb-3" style={{ fontWeight: 500 }}>
                1
              </div>
              <h3 className="text-text-primary mb-2" style={{ fontWeight: 500 }}>
                Choose your intent
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Are you building fundamentals, preparing for an industry career,
                or developing a personal voice? Each zone organizes content
                around what you are actually trying to do.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full bg-accent/10 text-accent text-sm flex items-center justify-center mb-3" style={{ fontWeight: 500 }}>
                2
              </div>
              <h3 className="text-text-primary mb-2" style={{ fontWeight: 500 }}>
                Follow a structured path
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Every track is a multi-year curriculum with modules, prerequisites,
                and checkpoints. You always know what to study next and why it
                comes in that order.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full bg-accent/10 text-accent text-sm flex items-center justify-center mb-3" style={{ fontWeight: 500 }}>
                3
              </div>
              <h3 className="text-text-primary mb-2" style={{ fontWeight: 500 }}>
                Study from the best sources
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                For each concept, we curate the best available resources — free
                YouTube tutorials, paid courses, and reference books — ranked by
                quality and mapped to your level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20 text-center">
        <h2
          className="text-2xl sm:text-3xl text-text-primary mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Every path starts with drawing.
        </h2>
        <p className="text-text-secondary mb-8 max-w-lg mx-auto">
          Start with Drawing Foundations — the core module every track shares —
          and branch into your specialization from there.
        </p>
        <Link
          href="/tracks"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-7 py-3.5 text-sm text-bg-primary hover:bg-accent-hover transition-colors"
          style={{ fontWeight: 500 }}
        >
          Browse career tracks
        </Link>
      </section>
    </div>
  );
}
