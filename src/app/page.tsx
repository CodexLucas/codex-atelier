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
      <section className="py-20 sm:py-28 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">
          Art Education Navigator
        </p>
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl text-text-primary leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          600 Years of Art Instruction.
          <br />
          <span className="text-accent">One Clear Path.</span>
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Classic art books define what to learn and in what order. We organize
          the internet&apos;s best tutorials and courses around that authority.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tracks"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg-primary hover:bg-accent/90 transition-colors"
          >
            Browse Career Tracks
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm text-text-secondary hover:text-text-primary hover:border-accent/40 transition-all"
          >
            Ask the Books
          </Link>
        </div>
      </section>

      {/* ─── Three Zones ──────────────────────────────── */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-12">
        <div className="rounded-lg border border-border bg-bg-card p-6 text-center">
          <div className="h-1 w-8 rounded-full bg-zone-fundamentos mx-auto mb-4" />
          <h3 className="text-lg text-text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Fundamentos
          </h3>
          <p className="text-sm text-text-secondary">
            Structured learning paths. &ldquo;I want to learn to draw properly.&rdquo;
          </p>
        </div>
        <div className="rounded-lg border border-border bg-bg-card p-6 text-center">
          <div className="h-1 w-8 rounded-full bg-zone-industria mx-auto mb-4" />
          <h3 className="text-lg text-text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Industria
          </h3>
          <p className="text-sm text-text-secondary">
            Career prep and portfolio. &ldquo;I want to work in concept art.&rdquo;
          </p>
        </div>
        <div className="rounded-lg border border-border bg-bg-card p-6 text-center">
          <div className="h-1 w-8 rounded-full bg-zone-expresion mx-auto mb-4" />
          <h3 className="text-lg text-text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Expresión
          </h3>
          <p className="text-sm text-text-secondary">
            Personal voice and philosophy. &ldquo;I want to find my style.&rdquo;
          </p>
        </div>
      </section>

      {/* ─── Career Tracks ────────────────────────────── */}
      <ZoneSection
        title="Career Tracks"
        subtitle="10 paths from Drawing Foundations to specialization. Each built from the canonical curriculum."
        color="bg-accent"
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
        subtitle="The building blocks of art education. Every concept belongs to a discipline."
        color="bg-trad-fine-art"
      >
        <div className="flex flex-wrap gap-3">
          {disciplines.map((d) => (
            <DisciplineChip key={d.id} discipline={d} />
          ))}
        </div>
      </ZoneSection>

      {/* ─── The Two Layers ───────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="rounded-lg border border-border bg-bg-card p-8 sm:p-12">
          <h2
            className="text-2xl sm:text-3xl text-text-primary mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-accent font-semibold mb-2">The Authority Layer</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                66 canonical art books — Loomis, Bridgman, Bargue, Aristides,
                Hampton, Gurney — define what concepts exist, what order to learn
                them, and which tradition they belong to. This is the brain.
              </p>
            </div>
            <div>
              <h3 className="text-trad-digital font-semibold mb-2">The Content Layer</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                YouTube tutorials, Domestika courses, Proko, NMA, Schoolism —
                ranked and contextualized using the book knowledge. The system
                knows what a video teaches, what you need first, and where it
                fits in your career path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────── */}
      <section className="py-16 text-center">
        <h2
          className="text-2xl sm:text-3xl text-text-primary mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          7,141 pages of art knowledge, searchable.
        </h2>
        <p className="text-text-secondary mb-8">
          Ask any question. Get answers grounded in the masters.
        </p>
        <Link
          href="/search"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg-primary hover:bg-accent/90 transition-colors"
        >
          Try Ask the Books
        </Link>
      </section>
    </div>
  );
}
