interface Discipline {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  sort_order: number | null;
}

export default function DisciplineChip({ discipline }: { discipline: Discipline }) {
  return (
    <div className="rounded-full border border-border bg-bg-card px-4 py-2 text-sm text-text-secondary hover:border-accent-light hover:text-text-primary transition-all cursor-default">
      {discipline.name}
    </div>
  );
}
