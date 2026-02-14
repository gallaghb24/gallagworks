
# Weave "Implementation-first" tone into How We Work

## What changes

### 1. Remove the standalone block from the homepage
Delete the "Implementation-first..." callout block (lines 17-24) from `src/pages/Index.tsx`.

### 2. Update the step descriptions to carry the implementation-first tone
Rather than adding a new subtitle, infuse the existing step copy with the "implementation-first" ethos -- working automation, adoption, governance over strategy decks. Specifically:

- **Step 03 ("Build and embed")** -- update the description to absorb the key message. Current copy already hints at it ("we implement working automation and stay until it's adopted"). Strengthen it to:
  *"We deliver working automation with adoption planning and governance baked in. No strategy decks that gather dust."*

This keeps the section's current structure intact (METHOD label, heading, three steps) while naturally folding the implementation-first sentiment into the step where it belongs most -- the delivery step.

## Technical details

### `src/pages/Index.tsx`
- Delete lines 17-24 (the container div with the border-l callout).

### `src/components/HowWeWork.tsx`
- Update the step 03 description (line 20) from:
  `"We implement working automation and stay until it's adopted. No handover documents that gather dust."`
  to:
  `"We deliver working automation with adoption planning and governance baked in. Not strategy decks that gather dust."`
