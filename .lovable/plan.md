

# Alternating Backgrounds on Services Page

## Current State
The Services page has 5 sections stacked vertically, but most share the same default background (`#121212`). Only "How We Work" has a subtle difference via the `blueprint-grid` class. The page lacks the alternating rhythm established in the visual identity.

## The Fix
Apply the Matte Slate (`#1A1C1E`) background to every other section, creating a clear visual cadence:

| # | Section | Background |
|---|---------|-----------|
| 1 | Hero / Intro | Deep Charcoal (default `bg-background`) |
| 2 | Engagement Tiers | Matte Slate (`bg-[#1A1C1E]`) |
| 3 | How We Work | Deep Charcoal (default -- already has `blueprint-grid`) |
| 4 | FAQ | Matte Slate (`bg-[#1A1C1E]`) |
| 5 | CTA Band | Deep Charcoal (default) |

## Changes

### 1. `src/components/EngagementTypes.tsx`
- Add `bg-[#1A1C1E]` to the `<section>` wrapper so the Engagement Tiers sit on the Matte Slate background.

### 2. `src/components/FAQSection.tsx`
- Add `bg-[#1A1C1E]` to the `<section>` wrapper so the FAQ section sits on the Matte Slate background.

No other files need changes. The Hero, How We Work, and CTA Band remain on the default Deep Charcoal background, producing a clean alternating rhythm across the page.

