import SearchInterface from "@/components/SearchInterface";

export const metadata = {
  title: "Ask the Books — Codex Atelier",
  description:
    "Search 7,141 pages of art knowledge from Loomis, Bridgman, Aristides, and more.",
};

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-10 text-center">
        <h1
          className="text-3xl sm:text-4xl text-text-primary mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ask the Books
        </h1>
        <p className="text-text-secondary max-w-xl mx-auto">
          Search across 7,141 pages extracted from 36 canonical art books.
          Ask about any concept — gesture, anatomy, color temperature, composition
          — and get answers grounded in the masters.
        </p>
      </div>

      <SearchInterface />
    </div>
  );
}
