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

const TRADITION_COLORS: Record<string, string> = {
  "classical-academic": "text-trad-academic border-trad-academic/30",
  "fine-art": "text-trad-fine-art border-trad-fine-art/30",
  "concept-art": "text-trad-concept border-trad-concept/30",
  "illustration": "text-trad-illustration border-trad-illustration/30",
  "digital-3d": "text-trad-digital border-trad-digital/30",
};

export default function LibraryGrid({
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
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search books or authors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full px-3 py-1.5 text-xs border transition-colors ${
              filter === "all"
                ? "bg-accent text-bg-primary border-accent"
                : "border-border text-text-secondary hover:border-accent/40"
            }`}
          >
            All ({works.length})
          </button>
          {traditions.map((t) => (
            <button
              key={t.id}
              onClick={() => setFilter(t.slug)}
              className={`rounded-full px-3 py-1.5 text-xs border transition-colors ${
                filter === t.slug
                  ? "bg-accent text-bg-primary border-accent"
                  : "border-border text-text-secondary hover:border-accent/40"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-text-muted mb-6">
        {filtered.length} {filtered.length === 1 ? "work" : "works"}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((work) => {
          const tradColor =
            TRADITION_COLORS[work.traditions?.slug ?? ""] ?? "text-text-muted border-border";
          return (
            <div
              key={work.id}
              className={`rounded-lg border bg-bg-card p-5 transition-all hover:bg-bg-hover ${tradColor}`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-text-primary font-medium text-sm leading-snug">
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
                <span className="text-xs opacity-80">{work.traditions.name}</span>
              )}
              {work.description && (
                <p className="mt-2 text-xs text-text-muted leading-relaxed line-clamp-2">
                  {work.description}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-text-muted">
          No works match your filter.
        </div>
      )}
    </>
  );
}
