

# Fix Input Paths: 3 Grey Lines to Core, Dots Stay on Lines

## Problem

1. Orange dots travel through black space (off grey lines) because waypoints don't match maze line segments
2. Only some paths visually connect to the white core box
3. Need exactly 3 grey connector lines arriving at 3 different sides of the core

## Solution

Redesign the maze connector lines and all 3 input waypoint paths so every dot strictly follows a visible grey line. Three connector lines will visibly enter the core from the top, left, and bottom.

---

## Core Entry Points

The core box spans x:290-350, y:200-260.

- **Top entry:** (320, 200) -- dot arrives from above into the top edge
- **Left entry:** (290, 230) -- dot arrives from the left into the left edge  
- **Bottom entry:** (290, 260) -- dot arrives from below into the bottom edge

---

## Maze Line Changes

### Extend existing segments
- `[40, 40, 140, 40]` becomes `[40, 40, 160, 40]` -- closes gap to meet vertical at x=160
- `[140, 120, 240, 120]` becomes `[140, 120, 320, 120]` -- extends to align with core top
- `[0, 380, 120, 380]` becomes `[0, 380, 180, 380]` -- extends to meet vertical at x=180

### Remove old connectors (no longer needed)
- `[180, 380, 290, 380]`
- `[260, 200, 290, 200]`
- `[40, 300, 40, 260]`
- `[40, 260, 60, 260]`

### Add new connector segments (3 lines into the core)
- `[320, 120, 320, 200]` -- vertical drop into core top
- `[160, 180, 160, 200]` -- short vertical bridge for Path B
- `[260, 230, 290, 230]` -- horizontal into core left side
- `[180, 260, 290, 260]` -- horizontal into core bottom

---

## 3 Input Paths (all waypoints on grey lines)

**Path A (top):**
`[40,40] -> [160,40] -> [160,120] -> [320,120] -> [320,200]`

**Path B (left):**
`[20,100] -> [120,100] -> [120,180] -> [160,180] -> [160,200] -> [260,200] -> [260,230] -> [290,230]`

**Path C (bottom):**
`[0,380] -> [180,380] -> [180,260] -> [290,260]`

Each path enters the core from a different side (top, left, bottom). Every segment between consecutive waypoints lies on a visible grey maze line.

---

## File Changed

`src/components/HeroSchematic.tsx` -- update `MAZE_LINES` array and `INPUT_PATHS` array. No other files change.

