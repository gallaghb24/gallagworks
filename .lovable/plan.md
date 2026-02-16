

# Fix: Restore the Orange Output Laser Line

## Problem

The animation loop captures `outputRevealed` in a stale closure. The `useEffect` running the animation has dependencies `[buildPhase, advancePulse]` but never re-runs when `outputRevealed` changes. This means:
- Output pulse dots never spawn (the spawn check on line 202 always reads `false`)
- The output lines may render via JSX but without the dynamic dot movement

## Solution

Add `outputRevealed` to the `useEffect` dependency array so the animation loop restarts with the current value when it flips to `true`. This is a one-line fix.

## Technical Detail

**File: `src/components/HeroSchematic.tsx`**

Change line 229 from:
```
}, [buildPhase, advancePulse]);
```
to:
```
}, [buildPhase, advancePulse, outputRevealed]);
```

This ensures the animation loop closure captures the updated `outputRevealed = true` value, allowing:
1. The output pulse spawning logic (`if (outputRevealed && ...)`) to actually fire
2. Orange dots to stream along the center line
3. The orange line with its pulsating glow and filter to render correctly

No other changes needed.
