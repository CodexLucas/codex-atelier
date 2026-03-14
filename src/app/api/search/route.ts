import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json({ error: "Query required" }, { status: 400 });
    }

    if (!OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "Search not configured (missing API key)" },
        { status: 500 }
      );
    }

    // Get embedding from OpenAI
    const embeddingRes = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "text-embedding-3-small",
        input: query,
      }),
    });

    if (!embeddingRes.ok) {
      return NextResponse.json(
        { error: "Embedding generation failed" },
        { status: 500 }
      );
    }

    const embeddingData = await embeddingRes.json();
    const embedding = embeddingData.data[0].embedding;

    // Search Supabase via RPC
    const { data, error } = await supabase.schema("atelier").rpc("match_extractions", {
      query_embedding: embedding,
      match_threshold: 0.25,
      match_count: 10,
    });

    if (error) {
      console.error("Supabase search error:", error);
      return NextResponse.json({ error: "Search failed" }, { status: 500 });
    }

    return NextResponse.json({ results: data });
  } catch (err) {
    console.error("Search error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
