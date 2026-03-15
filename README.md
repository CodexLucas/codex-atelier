# Codex Atelier

Art education navigator platform. Structured learning paths for drawing, painting, and visual arts.

## Stack

- **Next.js 16** + React 19
- **Supabase** (schema: `atelier`, project: `vbrkqszvnozrbyhcqptx`)
- **Tailwind CSS 4**
- **Cormorant Garamond** (display) + **DM Sans** (body)

## Visual Language

Working studio aesthetic — warm toned paper, sanguine (conté crayon) accents, linen surfaces. Not dark mode fintech. Not sterile EdTech white.

### Palette

| Role | Color | Hex |
|------|-------|-----|
| Background | Canvas | `#F5F0E6` |
| Surface | Linen | `#EDE6D6` |
| Card | Warm white | `#FDFAF4` |
| Text primary | Graphite 900 | `#2A2826` |
| Text secondary | Graphite 600 | `#5A5754` |
| Text muted | Graphite 300 | `#9E9A95` |
| Accent | Sanguine | `#A0432A` |
| Secondary accent | Ultramarine | `#1B3A6B` |
| Border | Toned tan | `#D4C5A9` |

### Three Zones

- **Foundations** — toned paper warmth, the student's workspace
- **Industry** — graphite/charcoal dark, professional, portfolio-ready
- **Expression** — sanguine heat, creative risk, personal voice

## Content Strategy

Atelier is its own editorial authority. The 66 canonical art books are used internally for concept mapping and AI personalization but are never exposed as the source of content.

- Books appear only in the **Reading List** as curated recommendations for further study
- All user-facing concept explanations are original prose, never raw extractions
- No "grounded in 66 books" claims — Atelier *is* the curriculum

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/tracks` | Career tracks listing (10 tracks) |
| `/tracks/[slug]` | Track detail with modules |
| `/reading-list` | Curated book recommendations |
| `/foundations` | Foundations zone (TBD) |
| `/industry` | Industry zone (TBD) |
| `/expression` | Expression zone (TBD) |

## Development

```bash
npm install
cp .env.example .env.local  # Add Supabase credentials
npm run dev
```

## What's Next

- NMA curriculum constellation (interactive concept graph)
- Zone pages (Foundations, Industry, Expression)
- Module detail pages with curated resources
- AI-powered path recommendation (paid tier)
- EN/ES localization
