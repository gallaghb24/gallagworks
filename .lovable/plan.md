

# Refine the Knowledge Hub: Manifesto Bridges, Visual Separation, and Deep-Linking

## Overview

Three targeted refinements to elevate the unified Insight pages from technically correct to Principal-grade authority.

---

## 1. Expand Manifesto Narratives for GW-001 through GW-006

Each of the six project schematics currently has short, functional manifesto sections (one paragraph each for Friction and Engineering). These will be expanded to include a third section -- a "Strategic Context" bridge -- that frames the operational challenge from a leadership perspective before the reader drops into the Technical Schematic.

**What changes in the data:**

Each case study entry gains an additional manifesto section inserted between "THE FRICTION" and "THE ENGINEERING":

- **GW-001 (POS Workflow):** New section "THE STRATEGIC COST" -- discusses how stale reporting erodes client trust and advisory credibility, turning a professional services team into a data factory.
- **GW-002 (Costing Process):** New section "THE STRATEGIC COST" -- explores how invisible coordination tax creates the illusion of under-resourcing when the real problem is architectural.
- **GW-003 (Validation Pipeline):** New section "THE STRATEGIC COST" -- examines the paradox of low error rates masking unsustainable time investment, and how it blocks the improvement work the organisation actually needs.
- **GW-004 (Multichannel Content):** New section "THE STRATEGIC COST" -- addresses the normalisation of copy-paste culture and how it prevents account teams from scaling client relationships.
- **GW-005 (Enterprise Reporting):** New section "THE STRATEGIC COST" -- frames the "Opportunity Cost of Blind Leadership" in high-stakes reporting, where last-minute data scrambles undermine decision quality.
- **GW-006 (Allocation Logistics):** New section "THE STRATEGIC COST" -- discusses how manual consolidation creates operational fragility, making it impossible to respond to client changes with agility.

Each new section will be 200-300 words written in the Principal-to-Peer tone, connecting the tactical friction to its strategic business impact.

**File modified:** `src/pages/InsightManifesto.tsx` -- the `insightData` array, expanding the `manifesto` arrays for entries GW-001 through GW-006.

---

## 2. Visual Separation: Blueprint Inset for Technical Schematic

The `[TECHNICAL SCHEMATIC]` section will receive a distinct visual treatment to create a "context switch" from boardroom narrative to engineering review.

**Changes:**

- Wrap the entire Technical Schematic section (the `<section>` containing the title, the schematic card, and the confidentiality notice) in a container with a faint Graphite background (`#1A1C1E` or equivalent via `bg-[#1A1C1E]`)
- Add increased vertical padding (`py-16`) and a subtle top/bottom 1px border to frame it as an inset document
- The schematic section header gets a slightly larger treatment with a thin horizontal rule above it

**File modified:** `src/pages/InsightManifesto.tsx` -- the JSX rendering the Technical Schematic section (around lines 554-575).

---

## 3. Deep-Linking with Anchor IDs for AEO

Add an `id="schematic"` attribute to the Technical Schematic section so AI answer engines and internal links can point directly to the evidence block at `/insights/[slug]#schematic`.

**Changes:**

- Add `id="schematic"` to the Technical Schematic `<section>` element
- Update the `StructuredData.tsx` CreativeWork URLs to append `#schematic` in a secondary reference field, so the structured data explicitly signals the evidence location

**Files modified:**
- `src/pages/InsightManifesto.tsx` -- add `id="schematic"` to the section element
- `src/components/StructuredData.tsx` -- add a `hasPart` property to each CreativeWork pointing to `#schematic`

---

## Technical Details

### Files to modify:

1. **`src/pages/InsightManifesto.tsx`**
   - Expand `manifesto` arrays for GW-001 through GW-006 with a new "STRATEGIC COST" section (each 200-300 words)
   - Wrap the Technical Schematic section in a `bg-[#1A1C1E]` container with `py-16` padding and border framing
   - Add `id="schematic"` to the schematic section element

2. **`src/components/StructuredData.tsx`**
   - Add `hasPart` to each CreativeWork schema pointing to the `#schematic` anchor for direct AEO deep-linking

### No new files or dependencies required.

