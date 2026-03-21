"use client";

import { useState } from "react";

interface Concept {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  skill_level: string | null;
}

interface Resource {
  id: string;
  title: string;
  youtube_id: string;
  channel_name: string;
  teacher: string | null;
  view_count: number | null;
  coverage: string;
}

interface Edge {
  from_concept_id: string;
  to_concept_id: string;
  relation_type: string;
  notes: string;
}

interface ModuleCardProps {
  module: {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    part_name: string | null;
  };
  index: number;
  tagline?: string;
  concepts: Concept[];
  resourcesByConcept: Record<string, Resource[]>;
  edgesByFromConcept: Record<string, Edge[]>;
  conceptNameMap: Record<string, string>;
}

function formatViews(n: number | null): string {
  if (!n) return "";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M views`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K views`;
  return `${n} views`;
}

const COVERAGE_LABEL: Record<string, string> = {
  definitive: "Essential",
  deep_dive: "In-depth",
  covers: "Covers this",
};

const EDGE_LABEL: Record<string, string> = {
  suggested_before: "Helps with",
  reinforces: "Reinforces",
  alternative: "Alternative to",
};

export default function ModuleCard({
  module: mod,
  index,
  tagline,
  concepts,
  resourcesByConcept,
  edgesByFromConcept,
  conceptNameMap,
}: ModuleCardProps) {
  const [expanded, setExpanded] = useState(false);
  const hasConcepts = concepts.length > 0;

  return (
    <div className="rounded-lg border border-border bg-bg-card overflow-hidden transition-all">
      {/* Module header — always visible */}
      <button
        onClick={() => hasConcepts && setExpanded(!expanded)}
        className={`w-full text-left p-5 flex items-start gap-4 ${
          hasConcepts ? "cursor-pointer hover:bg-bg-hover" : "cursor-default"
        } transition-colors`}
      >
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent text-sm flex items-center justify-center"
          style={{ fontWeight: 500 }}
        >
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-text-primary" style={{ fontWeight: 500 }}>
            {mod.name}
          </h3>
          {tagline && (
            <p
              className="text-sm text-accent-light mt-0.5 italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {tagline}
            </p>
          )}
          {mod.description && (
            <p className="text-sm text-text-secondary mt-1 line-clamp-2">
              {mod.description}
            </p>
          )}
          {hasConcepts && (
            <span className="inline-block mt-2 text-xs text-text-muted">
              {concepts.length} concept{concepts.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>
        {hasConcepts && (
          <span className="flex-shrink-0 text-text-muted text-sm mt-1 transition-transform duration-200"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            &#9662;
          </span>
        )}
      </button>

      {/* Expanded content — concepts and resources */}
      {expanded && hasConcepts && (
        <div className="border-t border-border-light px-5 pb-5">
          <div className="space-y-5 mt-4">
            {concepts.map((concept) => {
              const resources = resourcesByConcept[concept.id] ?? [];
              const edges = edgesByFromConcept[concept.id] ?? [];

              return (
                <div key={concept.id} className="pl-12">
                  <h4
                    className="text-text-primary text-sm"
                    style={{ fontWeight: 500 }}
                  >
                    {concept.name}
                  </h4>
                  {concept.description && (
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      {concept.description}
                    </p>
                  )}

                  {/* Concept edges */}
                  {edges.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                      {edges.map((edge, i) => {
                        const targetName = conceptNameMap[edge.to_concept_id];
                        if (!targetName) return null;
                        return (
                          <span
                            key={i}
                            className="text-[11px] text-text-muted"
                            title={edge.notes}
                          >
                            {EDGE_LABEL[edge.relation_type] ?? edge.relation_type}:{" "}
                            <span className="text-text-secondary">{targetName}</span>
                          </span>
                        );
                      })}
                    </div>
                  )}

                  {/* Resources */}
                  {resources.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {resources.map((r) => (
                        <a
                          key={r.id}
                          href={`https://www.youtube.com/watch?v=${r.youtube_id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-baseline gap-2 group text-xs"
                        >
                          <span className="text-link group-hover:text-link-light transition-colors truncate">
                            {r.title}
                          </span>
                          <span className="flex-shrink-0 text-text-muted">
                            {r.teacher && r.teacher !== r.channel_name
                              ? `${r.teacher} (${r.channel_name})`
                              : r.channel_name}
                          </span>
                          {r.view_count && (
                            <span className="flex-shrink-0 text-text-muted hidden sm:inline">
                              {formatViews(r.view_count)}
                            </span>
                          )}
                          {r.coverage === "definitive" && (
                            <span className="flex-shrink-0 text-[10px] text-accent px-1 py-0.5 rounded bg-accent/5">
                              {COVERAGE_LABEL[r.coverage]}
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
