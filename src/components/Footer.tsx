import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3
              className="text-text-primary text-lg mb-2"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Codex<span className="text-accent">Atelier</span>
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Structured art education paths you can actually follow.
              From gesture to finished work.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-3" style={{ fontWeight: 500 }}>
              Navigate
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tracks" className="text-text-secondary hover:text-accent transition-colors">
                  Career tracks
                </Link>
              </li>
              <li>
                <Link href="/foundations" className="text-text-secondary hover:text-accent transition-colors">
                  Foundations
                </Link>
              </li>
              <li>
                <Link href="/reading-list" className="text-text-secondary hover:text-accent transition-colors">
                  Reading list
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-3" style={{ fontWeight: 500 }}>
              Zones
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/foundations" className="text-text-secondary hover:text-accent transition-colors">
                  Foundations
                </Link>
              </li>
              <li>
                <Link href="/industry" className="text-text-secondary hover:text-accent transition-colors">
                  Industry
                </Link>
              </li>
              <li>
                <Link href="/expression" className="text-text-secondary hover:text-accent transition-colors">
                  Expression
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Codex Atelier
        </div>
      </div>
    </footer>
  );
}
