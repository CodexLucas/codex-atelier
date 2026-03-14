import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3
              className="text-accent text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Codex Atelier
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              600 years of art instruction tradition, organized into career
              paths you can actually follow.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tracks" className="text-text-secondary hover:text-text-primary transition-colors">
                  Career Tracks
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-text-secondary hover:text-text-primary transition-colors">
                  Canonical Library
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-text-secondary hover:text-text-primary transition-colors">
                  Ask the Books
                </Link>
              </li>
            </ul>
          </div>

          {/* Traditions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
              Traditions
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-trad-academic">Classical Academic</li>
              <li className="text-trad-fine-art">Fine Art</li>
              <li className="text-trad-concept">Concept Art</li>
              <li className="text-trad-illustration">Illustration</li>
              <li className="text-trad-digital">Digital / 3D</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-text-muted">
          Built by a chef who draws. &copy; {new Date().getFullYear()} Codex Atelier
        </div>
      </div>
    </footer>
  );
}
