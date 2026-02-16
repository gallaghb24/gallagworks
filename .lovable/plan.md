

# Continuous Maze Pulses with 3 Input Paths to Core

## What Changes

Currently, orange dots traverse the maze once during Phase 2 ("Flow"), then stop. Only one valid path feeds the core. After that, only output pulses appear.

This update will:

1. **Make maze pulses continuous** -- orange dots keep spawning and travelling through the maze indefinitely, not just once
2. **Create 3 distinct input paths** that all connect to and feed the core box from different directions (top-left, middle-left, bottom-left)
3. **Remove the one-shot phase model** -- after the initial build, input and output pulses run simultaneously in a permanent loop

---

## Technical Details

### File: `src/components/HeroSchematic.tsx`

**1. Replace the 3 dead-end paths with 3 valid input paths**

Define 3 new waypoint arrays that each start from different points on the left edge of the maze and all terminate at the core box:

- **Path A (top):** Enters from top-left, winds through upper maze segments, arrives at core top-left corner
- **Path B (middle):** Enters from mid-left, threads through middle maze, arrives at core left side
- **Path C (bottom):** Enters from bottom-left, navigates lower maze, arrives at core bottom-left corner

Each path follows existing maze line segments so dots visually travel along the grey lines.

**2. Continuous spawning loop**

Replace the one-shot Phase 2 spawn with a recurring spawn inside the `requestAnimationFrame` loop:

- Every ~90 frames (~1.5s), spawn a new pulse on each of the 3 input paths (staggered so they don't all appear simultaneously)
- Each pulse travels its waypoints at slightly varied speeds (1.5-2.5 px/frame) for organic feel
- When a pulse reaches the core, it fades out (no flash every time -- only the first arrival flashes)

**3. Simplify phase model**

- Keep Phase 1 ("build") as-is for the line-drawing intro
- Merge Phase 2 and 3 into a single "running" phase that starts after the build completes
- In "running" phase: continuously spawn input pulses on all 3 paths AND output pulses on the orange line
- Remove the `DEAD_PATHS` constant entirely

**4. Updated waypoint paths (connecting to maze lines)**

- Path A: `[0,60] -> [80,60] -> [80,140] -> [60,140] -> [60,260] -> [180,260] -> [180,380]` then route to core via new connecting segment
- Path B: `[0,220] -> [100,220] -> [100,340] -> [200,340] -> [220,340] -> [220,200] -> [260,200]` then into core left side
- Path C: `[20,100] -> [120,100] -> [120,180] -> [140,180] -> [140,300] -> [20,300]` then route to core

Add 2-3 additional short maze line segments to physically connect these paths to the core box edges, so the dots visually arrive at the box.

**5. Prevent pulse accumulation**

- Cap total active input pulses at ~15 to prevent performance degradation
- Remove pulses that have completed their path and faded out

### No other files change.
