

# Technical Logic Schematic -- Hero Graphic

## Overview

Create a new `HeroSchematic` React component rendered as an SVG canvas alongside the existing hero copy. It depicts an animated engineering blueprint: a chaotic grey maze on the left, a clean central "core" frame, and three parallel output paths on the right (centre path in Safety Orange). The animation sequence plays on page load.

---

## Architecture

A single new component `src/components/HeroSchematic.tsx` containing:

1. **SVG Canvas** -- absolutely positioned to fill the right side of the hero section (hidden on mobile, visible `lg:` and up)
2. **All animation driven by `useEffect` + `requestAnimationFrame`** -- no external libraries
3. **Three visual zones** drawn with SVG `<line>`, `<rect>`, and `<circle>` elements

---

## Visual Zones (all orthogonal, 1px lines)

### Zone 1 -- The Mess (left ~60% of canvas)
- ~25-30 pre-defined orthogonal line segments in `#2F3133`
- Overlapping, dead-end paths resembling a disorganised circuit / floor plan
- One valid path threads through the maze from left edge to centre

### Zone 2 -- The Core (centre)
- A clean white-outlined square (`#F5F5F5`, 1px stroke)
- Positioned at the junction between the mess and the output

### Zone 3 -- The Infrastructure (right ~25% of canvas)
- Three perfectly horizontal parallel lines extending from the core to the right edge
- Top and bottom lines in `#2F3133`
- Centre line in Safety Orange `#FF5F1F` (2px stroke for emphasis)

---

## Animation Sequence

### Phase 1 -- "The Build" (0 - 1.8s)
- Each maze segment draws itself using SVG `stroke-dasharray` / `stroke-dashoffset` animation
- Segments appear sequentially in small groups (staggered ~60ms apart)
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` -- matching the site's "Power Out" curve
- The core square draws its four edges in sequence (top, right, bottom, left)

### Phase 2 -- "The Flow" (1.8s - 4.5s)
- 3-4 small Safety Orange dots (`<circle r="2">`) spawn at the left edge
- They travel along maze paths using `requestAnimationFrame`, following pre-defined waypoint arrays
- Some dots enter dead ends, pause briefly, then fade out (opacity transition)
- One dot successfully navigates the valid path into the core square
- On entering the core, a brief flash effect (white glow filter, 200ms)

### Phase 3 -- "The Result" (4.5s onwards, loops)
- A continuous stream of small orange dots flows smoothly from the core down the centre output path
- Speed is noticeably faster and more uniform than the chaotic Phase 2 movement
- Dots fade out as they exit the right edge of the canvas
- This phase loops indefinitely using `requestAnimationFrame`

---

## Layout Integration

**`src/components/HeroSection.tsx`** changes:
- Import and render `<HeroSchematic />` as a sibling to the text content
- The section becomes a two-column layout on `lg:` screens: left column = existing copy, right column = schematic
- On mobile/tablet: schematic is hidden (`hidden lg:block`)

---

## Technical Details

### New File
| File | Purpose |
|---|---|
| `src/components/HeroSchematic.tsx` | SVG schematic with all animation logic |

### Modified File
| File | Change |
|---|---|
| `src/components/HeroSection.tsx` | Add two-column grid layout, import and render `HeroSchematic` |

### Animation approach
- Maze line-draw: CSS `stroke-dasharray` + `stroke-dashoffset` transitions triggered by toggling a class after mount
- Data pulses: `requestAnimationFrame` loop moving `<circle>` elements along waypoint coordinate arrays
- All coordinates defined as constants (no randomisation) for a precise, engineered feel
- Cleanup: `useEffect` return function cancels `requestAnimationFrame` to prevent memory leaks

### Responsiveness
- SVG uses `viewBox` for scaling
- Hidden below `lg` breakpoint
- Canvas sized to fill available space without overlapping the text column

### Performance
- Pure SVG + rAF, no canvas or WebGL
- `will-change: stroke-dashoffset` on maze lines during Phase 1, removed after completion
- Total animated elements: ~35 lines + ~6 circles -- lightweight

