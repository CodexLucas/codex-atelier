"use client";

import { useState } from "react";

interface Work {
  id: string;
  title: string;
  author: string;
  type: string | null;
  year_published: number | null;
  description: string | null;
  affiliate_url: string | null;
  traditions: { name: string; slug: string } | null;
}

interface Tradition {
  id: string;
  name: string;
  slug: string;
}

export default function ReadingListGrid({
  works,
  traditions,
}: {
  works: Work[];
  traditions: Tradition[];
}) {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = works.filter((w) => {
    const matchesTradition =
      filter === "all" || w.traditions?.slug === filter;
    const matchesSearch =
      !search ||
      w.title.toLowerCase().includes(search.toLowerCase()) ||
      w.author.toLowerCase().includes(search.toLowerCase());
    return matchesTradition && matchesSearch;
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search books or authors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-light"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full px-3 py-1.5 text-xs border transition-colors ${
              filter === "all"
                ? "bg-accent text-bg-primary border-accent"
                : "border-border text-text-secondary hover:border-accent-light"
            }`}
          >
            All
          </button>
          {traditions.map((t) => (
            <button
              key={t.id}
              onClick={() => setFilter(t.slug)}
              className={`rounded-full px-3 py-1.5 text-xs border transition-colors ${
                filter === t.slug
                  ? "bg-accent text-bg-primary border-accent"
                  : "border-border text-text-secondary hover:border-accent-light"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-text-muted mb-6">
        {filtered.length} {filtered.length === 1 ? "book" : "books"}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((work) => (
          <div
            key={work.id}
            className="rounded-lg border border-border bg-bg-card p-5 transition-all hover:bg-bg-hover"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-text-primary text-sm leading-snug" style={{ fontWeight: 500 }}>
                {work.title}
              </h3>
              {work.year_published && (
                <span className="text-xs text-text-muted flex-shrink-0">
                  {work.year_published}
                </span>
              )}
            </div>
            <p className="text-xs text-text-secondary mb-2">{work.author}</p>
            {work.traditions && (
              <span className="text-xs text-text-muted">{work.traditions.name}</span>
            )}
            {work.description && (
              <p className="mt-2 text-xs text-text-muted leading-relaxed line-clamp-2">
                {work.description}
              </p>
            )}
            {work.affiliate_url && (
              <a
                href={work.affiliate_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs text-link hover:text-link-light transition-colors"
              >
                Find this book &rarr;
              </a>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-text-muted">
          No books match your search.
        </div>
      )}
    </>
  );
}
