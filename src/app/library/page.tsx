import { getCanonicalWorks, getTraditions } from "@/lib/data";
import LibraryGrid from "@/components/LibraryGrid";

export const metadata = {
  title: "Canonical Library — Codex Atelier",
  description: "66 essential art instruction books spanning 600 years.",
};

export default async function LibraryPage() {
  const [works, traditions] = await Promise.all([getCanonicalWorks(), getTraditions()]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-10">
        <h1
          className="text-3xl sm:text-4xl text-text-primary mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Canonical Library
        </h1>
        <p className="text-text-secondary max-w-2xl">
          The books that define art education. 66 works spanning 600 years, from
          Renaissance treatises to modern atelier manuals. These are the
          authority layer behind every recommendation.
        </p>
      </div>

      <LibraryGrid works={works} traditions={traditions} />
    </div>
  );
}
