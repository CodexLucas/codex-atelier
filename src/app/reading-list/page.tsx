import { getCanonicalWorks, getTraditions } from "@/lib/data";
import ReadingListGrid from "@/components/ReadingListGrid";

export const metadata = {
  title: "Reading List — Codex Atelier",
  description: "Recommended art instruction books for every level and discipline.",
};

export default async function ReadingListPage() {
  const [works, traditions] = await Promise.all([getCanonicalWorks(), getTraditions()]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-10">
        <h1
          className="text-3xl sm:text-4xl text-text-primary mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Reading list
        </h1>
        <p className="text-text-secondary max-w-2xl">
          The best art instruction books we know. If you want to go deeper on
          any concept in our curriculum, these are the references worth owning.
          Organized by tradition and approach.
        </p>
      </div>

      <ReadingListGrid works={works} traditions={traditions} />
    </div>
  );
}
