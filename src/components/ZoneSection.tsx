interface ZoneSectionProps {
  title: string;
  subtitle: string;
  color: string;
  children: React.ReactNode;
}

export default function ZoneSection({ title, subtitle, color, children }: ZoneSectionProps) {
  return (
    <section className="py-16">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className={`h-1 w-8 rounded-full ${color}`} />
          <h2
            className="text-2xl sm:text-3xl text-text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
        </div>
        <p className="text-text-secondary text-sm max-w-xl">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}
