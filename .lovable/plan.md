
# Hero Schematic Redesign: Abstract Geometric Art

## Overview
Replace the literal software architecture diagram (icons, labels, funnels, diamonds) with a pure geometric abstraction representing "untangling the mess." No text, no icons -- just lines and geometry.

---

## Visual Composition

The SVG will have three zones flowing left to right:

**Left -- The Tangle:**
A dense web of 12-15 thin, curved bezier paths in dark grey (`#2F3133` at varying opacities 0.2-0.5). These lines originate from scattered points on the far left and weave, cross, and loop over each other chaotically, converging toward the centre. Think of it like a ball of tangled wire viewed from above.

**Centre -- The Filter:**
A single sharp-edged geometric shape -- a perfect square (rotated 0 degrees, axis-aligned) rendered with a crisp white stroke (`#F5F5F5`, strokeWidth 1.5) and no fill. Slightly larger than the tangle's convergence point to feel like a gateway/filter. The tangled lines feed into the left edge of this square and disappear.

**Right -- The Order:**
Three perfectly straight, horizontal, parallel lines emerge from the right edge of the square and extend cleanly off the right side of the SVG viewport. Two lines in white (`#F5F5F5`, strokeWidth 0.75), and the middle line in Safety Orange (`#FF5F1F`, strokeWidth 1) -- the single touch of colour.

---

## Technical Details

- **SVG viewport**: `680 x 400` (same width as current, slightly shorter since no labels)
- **Background**: Transparent (no fill on the SVG)
- **All text and labels removed**: Zero `<text>` elements
- **All icons removed**: No rectangles acting as email/spreadsheet/database icons
- **Line style**: Razor-thin -- 0.5px for tangle lines, 0.75px for output lines, 1.5px for the central square
- **Central square**: Approximately 80x80 units, positioned at centre of viewport
- **Tangle lines**: ~14 bezier curves using `<path>` with cubic beziers, varying opacity (0.15-0.45) to create depth
- **Output lines**: 3 horizontal lines spaced ~30px apart vertically, extending from square's right edge to beyond the viewport (x=700+)
- **Animation**: Keep existing `animate-fade-in-up` on the container; no additional animation needed

---

## File Modified

1. **src/components/HeroSection.tsx** -- Replace the entire SVG block (lines 48-144) with the new abstract geometric composition. Everything outside the SVG (headline, paragraph, button, grid layout) remains untouched.
