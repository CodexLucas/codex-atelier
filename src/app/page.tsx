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
            Codex
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A structured path for learning classical art{" "}
            <em className="text-accent">in the digital age</em>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mb-10 leading-relaxed">
            Art education on the internet is abundant but fragmented.
            Thousands of lessons exist, yet they rarely form a coherent path.
            Codex organizes high-quality teaching material into a structured
            progression inspired by the traditional atelier model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/tracks"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-7 py-3.5 text-sm text-bg-primary hover:bg-accent-hover transition-colors"
              style={{ fontWeight: 500 }}
            >
              Browse the paths
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

      {/* ─── What Codex Is ──────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl text-text-primary mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Codex is
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Instead of isolated tutorials, the lessons follow a logical sequence
              of artistic training — the same order that ateliers and academies
              have used for centuries.
            </p>
            <p>
              Renaissance artists kept notebooks filled with drawings, observations,
              and technical studies. These collections of knowledge were often called
              codices. Codex follows that tradition: a living notebook for the study of art.
            </p>
          </div>
        </div>
      </section>

      {/* ─── The Traditional Order ──────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="rounded-lg border border-border bg-bg-card p-8 sm:p-12">
          <h2
            className="text-2xl sm:text-3xl text-text-primary mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The traditional order of study
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl">
            For centuries, artists developed their skills through a disciplined
            sequence of studies. Training typically began with observation and
            the study of form. Each stage built upon the previous one.
          </p>
          <ol className="space-y-3">
            {[
              "Drawing from observation",
              "Light and shadow",
              "Anatomy",
              "Perspective",
              "Composition",
              "Painting and visual storytelling",
            ].map((stage, i) => (
              <li key={stage} className="flex items-center gap-4 text-sm text-text-secondary">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent text-xs flex items-center justify-center" style={{ fontWeight: 500 }}>
                  {i + 1}
                </span>
                {stage}
              </li>
            ))}
          </ol>
          <p className="text-text-secondary leading-relaxed mt-6 max-w-2xl">
            Codex reconstructs this structure using modern educational resources.
          </p>
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
            Structured paths from beginner to confident draftsman.
            Proportion, gesture, form, light — in the traditional order.
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
            Portfolio preparation, career paths, studio standards.
            What the industry requires and how to get there.
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
            Art philosophy, creative development, personal voice.
            The dimension no structured curriculum typically addresses.
          </p>
        </div>
      </section>

      {/* ─── Career Tracks ────────────────────────────── */}
      <ZoneSection
        title="Career tracks"
        subtitle="Ten paths from Drawing Foundations to specialization. All training begins with the study of form."
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
        subtitle="The building blocks of artistic training. Every concept belongs to a discipline."
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
            How to use Codex
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="w-8 h-8 rounded-full bg-accent/10 text-accent text-sm flex items-center justify-center mb-3" style={{ fontWeight: 500 }}>
                1
              </div>
              <h3 className="text-text-primary mb-2" style={{ fontWeight: 500 }}>
                Choose a direction
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Building fundamentals, preparing for an industry career,
                or developing a personal voice. Each zone organizes content
                around a different purpose.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full bg-accent/10 text-accent text-sm flex items-center justify-center mb-3" style={{ fontWeight: 500 }}>
                2
              </div>
              <h3 className="text-text-primary mb-2" style={{ fontWeight: 500 }}>
                Follow the sequence
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Each track is a structured curriculum with modules and
                prerequisites. The structure reflects the order in which
                artists historically developed their craft.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full bg-accent/10 text-accent text-sm flex items-center justify-center mb-3" style={{ fontWeight: 500 }}>
                3
              </div>
              <h3 className="text-text-primary mb-2" style={{ fontWeight: 500 }}>
                Study from the sources
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                For each concept, the best available resources are listed —
                free YouTube tutorials, paid courses, and reference books —
                ranked by quality and mapped to the appropriate level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Sources ─────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl text-text-primary mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sources
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            The material referenced in Codex draws from leading teachers and
            institutions. Each topic links directly to lessons that demonstrate
            the principles in practice.
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">&#8226;</span>
              New Masters Academy
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">&#8226;</span>
              Proko
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">&#8226;</span>
              Classical atelier programs
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">&#8226;</span>
              Historical art manuals
            </li>
          </ul>
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
          Study begins with Drawing Foundations — the core module shared by
          every track — then branches into specialization.
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
