

# Fix: Orange Center Line + Continuous Core Flash

## Two Issues

### 1. Orange line not appearing
The `outputRevealed` state is set inside the animation loop, but the loop re-creates when `outputRevealed` changes (it's in the dependency array). This causes `arrivalsRef.current` to keep counting from where it was, but the `setOutputRevealed(true)` call triggers a re-render and loop restart. The real problem is that `outputRevealed` is read as a stale closure value *within* the same loop iteration that sets it. The line renders conditionally on `outputRevealed` in JSX -- this part should work once state updates. However, the `showFlash` being set only once (`hasFlashedRef`) means only one flash ever happens.

A more robust fix: use a ref for `outputRevealed` to avoid the stale closure entirely, and read from the ref in both the animation loop and via a synced state for JSX rendering.

### 2. Core flash on every dot arrival (not just the first)
Currently `hasFlashedRef` gates the flash to fire only once. Remove this gate and instead trigger a flash every time any input pulse reaches the core (becomes `done`).

## Technical Changes

**File: `src/components/HeroSchematic.tsx`**

### Change A: Use a ref for outputRevealed to avoid stale closures
- Add `const outputRevealedRef = useRef(false);`
- When setting `outputRevealed(true)`, also set `outputRevealedRef.current = true`
- In the animation loop, read from `outputRevealedRef.current` instead of the state variable
- Remove `outputRevealed` from the useEffect dependency array (back to `[buildPhase, advancePulse]`)
- Keep the `outputRevealed` state for JSX rendering of the line

### Change B: Flash core on every input pulse arrival
- Remove the `hasFlashedRef` guard entirely
- Instead, inside the pulse advancement loop, whenever an input pulse becomes `done` (reaches the core), trigger `setShowFlash(true)` and set a timeout to clear it
- Use a simple approach: track arrivals in the loop and flash for each one

### Specific code changes:

1. **Add ref** (near other refs, ~line 96):
```typescript
const outputRevealedRef = useRef(false);
```

2. **Update arrival logic** (~lines 157-161): When an input pulse arrives, flash every time and set outputRevealed via both ref and state:
```typescript
if (!p.done && advanced.done && advanced.phase === "input") {
  arrivalsRef.current++;
  // Flash on every arrival
  setShowFlash(true);
  setTimeout(() => setShowFlash(false), 200);
  if (arrivalsRef.current >= 3 && !outputRevealedRef.current) {
    outputRevealedRef.current = true;
    setOutputRevealed(true);
  }
}
```

3. **Remove old flash logic** (~lines 166-174): Delete the `hasFlashedRef` check block entirely. Also remove `hasFlashedRef` declaration.

4. **Use ref in spawn check** (~line 202):
```typescript
if (outputRevealedRef.current && frameCountRef.current % 18 === 0) {
```

5. **Fix dependency array** (~line 228): Remove `outputRevealed` to prevent loop restarts:
```typescript
}, [buildPhase, advancePulse]);
```

This ensures the animation loop runs continuously without restarting, reads the output state from a ref (never stale), and flashes the core box every time a dot arrives.
