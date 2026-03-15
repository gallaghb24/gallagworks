

# Phase 1: Design Foundation + Remove Theme Toggle

This is the foundational layer — typography, colours, border-radius, and removing the theme toggle. Everything else (content, terminology) builds on top in subsequent phases.

## Changes

### 1. Typography swap
**Files:** `index.html`, `src/index.css`, `tailwind.config.ts`

- Replace Google Fonts import: swap `Inter` for `Sora` and `DM Sans`, keep `JetBrains Mono`
- Update Tailwind `fontFamily`: `sans` becomes `['DM Sans', ...]`, add `display` as `['Sora', ...]`
- All headings get `font-display` class (Sora) with tighter tracking (`-0.02em` to `-0.03em`)
- Body text stays `font-sans` (now DM Sans) with `leading-relaxed` (line-height ~1.7)
- JetBrains Mono usage unchanged

### 2. Colour palette update
**File:** `src/index.css`

Remove the `.light` theme block entirely (no toggle). Update `:root` variables to match the new charcoal palette:

| Variable | New value (hex → HSL) |
|---|---|
| `--background` | `#111113` → `240 5% 7%` |
| `--card` / `--secondary` / `--muted` / `--slate` | `#1A1A1F` → `240 6% 11%` |
| `--foreground` | `#E8E8E6` → `40 5% 91%` |
| `--primary` | `#FF5F1F` → `16 100% 56%` (stays close) |
| `--muted-foreground` | `#8A8A8E` → `240 2% 55%` |
| `--border` | Subtle shift to match Charcoal Mid |
| `--footer-bg` | `#111113` (same as background) |

Light surface colours (`#F5F4F0` Warm Stone, `#FAFAF8` Off-White) will be used as explicit section backgrounds via utility classes (e.g. `bg-stone`, `bg-off-white`) rather than theme variables — this enables the dual-surface pattern within a single page.

### 3. Remove theme toggle
**Files:** `src/App.tsx`, `src/components/Navigation.tsx`, `src/components/Footer.tsx`, `src/pages/ConsultationConfirmation.tsx`

- Remove `ThemeProvider` wrapper and `next-themes` import from `App.tsx`
- Remove theme toggle button and all `dark:` conditional classes from `Navigation.tsx` (show dark logo only)
- Remove `dark:block` / `block dark:hidden` logo switching from `Footer.tsx`
- Remove `useTheme` / `mounted` / `toggleTheme` from Navigation

### 4. Border-radius update
**Files:** `tailwind.config.ts`, then global search for `rounded-none`

- Change `--radius` from `0.5rem` to `0.625rem` (10px)
- Remove all `rounded-none` classes from buttons and inputs across: `HeroSection.tsx`, `CTABand.tsx`, `Navigation.tsx`, `LeakageEstimator.tsx`, `Footer.tsx`, and any other instances
- Update `LeakageEstimator.tsx` inline `borderRadius: 0` to remove/inherit

### 5. Add dual-surface utilities
**File:** `src/index.css`, `tailwind.config.ts`

Add custom colour tokens for the warm light surfaces:
- `--stone: 40 9% 96%` (`#F5F4F0`)
- `--off-white: 40 14% 98%` (`#FAFAF8`)
- Tailwind utilities: `bg-warm-stone`, `bg-off-white`, `text-on-light` (`#111113`)

These won't be applied to sections yet (that's Phase 2/3 content work) but the tokens will be ready.

### 6. Update `index.html` meta
- Update Google Fonts link to load Sora + DM Sans instead of Inter
- Update `<title>` and meta descriptions (just the "Operational Engineering" → "AI Transformation" swap for now)

---

## What this does NOT change yet

- No content or terminology changes (Phase 2)
- No section-level dark/light surface assignments (Phase 3 — home page content rewrite)
- Logo stays as-is (you'll update separately)
- Domain references stay as gallag.works for now

## Implementation order

All changes in one pass — they're interdependent (removing theme toggle requires colour consolidation, typography needs font imports updated simultaneously).

