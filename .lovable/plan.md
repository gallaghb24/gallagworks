
# Hero Diagram Overhaul and UI Polish

## Overview
Three targeted changes: replace the hero SVG with a larger, high-fidelity technical schematic; polish the Philosophy section typography; and update copy in the Principal and Hero sections.

---

## 1. Hero Section Diagram -- Full Rebuild (HeroSection.tsx)

Replace the current simple SVG with a much larger, detailed "Technical Schematic" spanning the full right column.

**Left Side -- "Unstructured Inputs and Manual Friction":**
- Four input source icons rendered as small labelled rectangles with simple Lucide-style line-art icons inside (Email, Spreadsheet, Database, Chat/Slack)
- Tangled, crossing grey lines emerging from each source and converging toward the centre
- Monospace label above: `UNSTRUCTURED INPUTS & MANUAL FRICTION`

**Centre -- "Operational Engineering Core":**
- A larger bordered rectangle containing internal structure:
  - A funnel shape at the entry point
  - Three diamond-shaped decision nodes (logic gates) connected by internal lines
- Monospace label inside or below: `OPERATIONAL ENGINEERING CORE`
- Sub-label: `Simplify. Standardise. Validate.`

**Right Side -- Three Clean Output Streams:**
- Three parallel horizontal lines emerging from the central box, each terminating at a labelled endpoint with a small icon circle
- Top stream: Safety Orange accent dot + label "Structured Decisions (Human-in-the-Loop)"
- Middle stream: Safety Orange accent dot + label "Autonomous Workflows (AI & Automation)"
- Bottom stream: Grey dot + label "Exception Handling (Routed for Review)"

**SVG viewport**: Increase from `400x320` to approximately `600x400` for more detail. Remove `max-w-md` constraint so it fills the column. The diagram container uses `w-full` to span wide.

**Style**: Thin 1px lines in white/grey. Safety Orange used only on the two top output dots and their connecting lines to highlight the critical value path.

---

## 2. Hero Headline -- "AI Era." in Orange (HeroSection.tsx)

Split the H1 so that "AI Era." is wrapped in a `<span className="text-primary">` to render in Safety Orange, while the rest remains Off-White.

---

## 3. Philosophy Section -- Constrain Paragraph Width (Philosophy.tsx)

Add `max-w-[600px]` to the body paragraph element to limit it to roughly 60-65 characters per line for better readability. The paragraph stays left-aligned within its container (no centring of the text block itself, as the section is left-aligned by design).

---

## 4. Principal Section -- "design" to "engineering" (Principal.tsx)

Change "operational design studio" to "operational engineering studio" in the body copy.

---

## Files Modified

1. **src/components/HeroSection.tsx** -- Complete SVG rebuild with high-fidelity schematic; H1 orange accent on "AI Era."
2. **src/components/Philosophy.tsx** -- Add `max-w-[600px]` to body paragraph
3. **src/components/Principal.tsx** -- Replace "design" with "engineering" in body text
