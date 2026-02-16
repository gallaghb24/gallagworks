
# Delay Orange Output Line Until Dots Reach the Core

## Problem

The orange "laser" output line (and its grey siblings) draw immediately when the core box finishes building (`coreProgress >= 4`), well before any input dots have reached the white box.

## Solution

Track how many input pulses have arrived at the core. Only reveal the output lines and start spawning output pulses once at least 3 input dots have reached the box.

## Technical Details (single file: `src/components/HeroSchematic.tsx`)

**1. Add an arrival counter ref**

Add a new ref `arrivalsRef = useRef(0)` and a state `outputRevealed` (boolean, starts `false`).

**2. Count arrivals in the animation loop**

When an input pulse's `done` flips to `true` for the first time (it just reached the core), increment `arrivalsRef.current`. Once it hits 3, set `outputRevealed` to `true`.

**3. Gate output line visibility on `outputRevealed`**

Change the output lines' `revealed` condition from `coreProgress >= 4` to `outputRevealed`. This delays the orange line draw-in until 3 dots have arrived.

**4. Gate output pulse spawning on `outputRevealed`**

Wrap the existing output pulse spawn block (`frameCountRef.current % 18 === 0`) inside an `if (outputRevealed)` check so output dots don't appear before the line.

No other logic, layout, or styling changes.
