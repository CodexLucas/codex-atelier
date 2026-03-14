"use client";

import { useState } from "react";

interface SearchResult {
  id: string;
  content: string;
  topics: string[] | null;
  skill_level: string | null;
  tradition: string | null;
  source_notebook: string | null;
  similarity: number;
}

const EXAMPLE_QUERIES = [
  "How do I draw gesture?",
  "What is constructive anatomy?",
  "Explain color temperature",
  "How to compose a painting",
  "What is the Bargue method?",
  "Difference between form and shape",
];

export default function SearchInterface() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function handleSearch(searchQuery?: string) {
    const q = searchQuery || query;
    if (!q.trim()) return;

    setLoading(true);
    setSearched(true);
    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q }),
      });
      const data = await res.json();
      setResults(data.results ?? []);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  function handleExampleClick(q: string) {
    setQuery(q);
    handleSearch(q);
  }

  return (
    <>
      {/* Search input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="flex gap-3 mb-6"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything about art fundamentals..."
          className="flex-1 rounded-lg border border-border bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50"
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg-primary hover:bg-accent/90 transition-colors disabled:opacity-50"
        >
          {loading ? "..." : "Search"}
        </button>
      </form>

      {/* Example queries */}
      {!searched && (
        <div className="mb-8">
          <p className="text-xs text-text-muted mb-3">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLE_QUERIES.map((q) => (
              <button
                key={q}
                onClick={() => handleExampleClick(q)}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-text-secondary hover:border-accent/40 hover:text-text-primary transition-all"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {loading && (
        <div className="py-12 text-center text-text-muted">
          <div className="inline-block w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin mb-3" />
          <p className="text-sm">Searching across 36 books...</p>
        </div>
      )}

      {!loading && searched && results.length === 0 && (
        <div className="py-12 text-center text-text-muted">
          <p>No results found. Try a different query.</p>
        </div>
      )}

      {!loading && results.length > 0 && (
        <div className="space-y-4">
          <p className="text-sm text-text-muted">
            {results.length} results
          </p>
          {results.map((result) => (
            <div
              key={result.id}
              className="rounded-lg border border-border bg-bg-card p-5 hover:bg-bg-hover transition-colors"
            >
              {/* Source & metadata */}
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                {result.source_notebook && (
                  <span className="text-xs font-medium text-accent">
                    {formatBookTitle(result.source_notebook)}
                  </span>
                )}
                {result.tradition && (
                  <span className="text-xs text-text-muted rounded-full border border-border px-2 py-0.5">
                    {result.tradition}
                  </span>
                )}
                {result.skill_level && (
                  <span className="text-xs text-text-muted rounded-full border border-border px-2 py-0.5">
                    {result.skill_level}
                  </span>
                )}
                <span className="text-xs text-text-muted ml-auto">
                  {(result.similarity * 100).toFixed(0)}% match
                </span>
              </div>

              {/* Content */}
              <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                {result.content.length > 500
                  ? result.content.slice(0, 500) + "..."
                  : result.content}
              </p>

              {/* Topics */}
              {result.topics && result.topics.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {result.topics.slice(0, 5).map((topic) => (
                    <span
                      key={topic}
                      className="text-xs text-text-muted bg-bg-primary rounded px-2 py-0.5"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function formatBookTitle(slug: string): string {
  return slug
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
