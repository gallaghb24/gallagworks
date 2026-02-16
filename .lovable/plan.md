
# Fix: Output Dots Only on the Center Orange Line

## Problem

Output pulse dots are spawning across all 3 output lines (top, center, bottom) because the spawn logic cycles through `OUTPUT_Y[0]`, `[1]`, and `[2]`. The desired behavior is a single pulsating orange laser on the center line only, with dots streaming along just that one line.

## Solution

Change the output pulse spawning to always use `OUTPUT_Y[1]` (the center orange line) instead of cycling through all three.

## Technical Detail

**File: `src/components/HeroSchematic.tsx`, lines 202-206**

Change:
```typescript
const outIdx = Math.floor(frameCountRef.current / 18) % 3;
const wp: [number, number][] = [
  [CORE.x + CORE.size, OUTPUT_Y[outIdx]],
  [620, OUTPUT_Y[outIdx]],
];
```

To:
```typescript
const wp: [number, number][] = [
  [CORE.x + CORE.size, OUTPUT_Y[1]],
  [620, OUTPUT_Y[1]],
];
```

This keeps dots exclusively on the center orange line, preserving the "single pulsating laser" look. The top and bottom grey lines remain as static structural lines with no dots.
