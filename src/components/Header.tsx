"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Foundations", href: "/foundations" },
  { label: "Industry", href: "/industry" },
  { label: "Expression", href: "/expression" },
  { label: "Tracks", href: "/tracks" },
  { label: "Reading list", href: "/reading-list" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="text-text-primary text-xl tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Codex<span className="text-accent">Atelier</span>
          </span>
        </Link>

        <nav className="hidden sm:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/start"
            className="rounded-md bg-accent px-5 py-2 text-sm text-bg-primary hover:bg-accent-hover transition-colors"
            style={{ fontWeight: 500 }}
          >
            Start learning
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-2 text-text-secondary hover:text-text-primary"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="sm:hidden border-t border-border px-4 py-3 space-y-2 bg-bg-primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-text-secondary hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/start"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm text-accent font-medium"
          >
            Start learning
          </Link>
        </nav>
      )}
    </header>
  );
}
