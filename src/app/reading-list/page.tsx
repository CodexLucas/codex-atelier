import { getCanonicalWorks, getTraditions } from "@/lib/data";
import ReadingListGrid from "@/components/ReadingListGrid";

export const metadata = {
  title: "Reading List — Codex Atelier",
  description: "Essential art instruction books spanning 600 years. The references behind the curriculum.",
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
          The books behind the curriculum. For deeper study of any concept,
          these are the references worth owning — organized by tradition
          and approach.
        </p>
      </div>

      <ReadingListGrid works={works} traditions={traditions} />
    </div>
  );
}
