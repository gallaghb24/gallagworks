

# Light Mode Implementation Plan

## Overview

Add a complete light theme to the site that auto-detects the user's system preference and provides a toggle in the navigation header. The project already has `next-themes` installed but not configured.

---

## 1. Set up ThemeProvider in App.tsx

Wrap the app in `next-themes` `ThemeProvider` with `attribute="class"`, `defaultTheme="system"`, and `enableSystem={true}`. This uses the `darkMode: ["class"]` strategy already configured in `tailwind.config.ts`.

---

## 2. Define light mode CSS variables in index.css

Add a `.light` class block (alongside the existing `:root` dark defaults) with inverted values:

```text
.light {
  --background:    0 0% 98%;      (near-white)
  --foreground:    0 0% 10%;      (near-black text)
  --card:          0 0% 100%;     (white cards)
  --card-foreground: 0 0% 10%;
  --popover:       0 0% 100%;
  --popover-foreground: 0 0% 10%;
  --primary:       20 100% 50%;   (slightly deeper orange for contrast on white)
  --primary-foreground: 0 0% 100%;
  --secondary:     210 10% 94%;   (light grey)
  --secondary-foreground: 0 0% 10%;
  --muted:         210 10% 94%;
  --muted-foreground: 0 0% 40%;
  --accent:        20 100% 50%;
  --accent-foreground: 0 0% 100%;
  --border:        210 10% 85%;
  --input:         210 10% 90%;
  --ring:          20 100% 50%;
  --footer-bg:     210 10% 96%;
  --footer-fg:     0 0% 30%;
  --slate:         210 10% 94%;
  --sidebar-*:     (matching light values)
}
```

---

## 3. Add theme toggle to Navigation

- Import `useTheme` from `next-themes` and `Sun`/`Moon` icons from `lucide-react`
- Add a small icon button between the nav links and the CTA button (desktop), and at the bottom of the mobile menu
- The button cycles: if current theme is dark, switch to light; if light, switch to dark; if system, switch to light/dark based on current resolved theme
- Use a simple Sun/Moon icon swap based on `resolvedTheme`

---

## 4. Replace hardcoded colours with CSS variable references

Several components use hardcoded hex values that won't adapt to light mode. These need updating:

### LeakageEstimator.tsx (heaviest offender)
- `background: "#000000"` on the section -- replace with `bg-background` or a new CSS variable `--estimator-bg`
- `color: "#FFFFFF"` on inputs/headings -- replace with `text-foreground`
- `BORDER_COLOR = "#1A1C1E"` -- replace with `hsl(var(--border))`
- `background: "hsl(210, 3%, 16%)"` on inputs/buttons -- replace with `hsl(var(--input))`
- `color: "#FF5F1F"` -- replace with `hsl(var(--primary))`
- Hover states (`#FFFFFF` / `#000000`) -- use foreground/background variables

### HeroSchematic.tsx
- SVG strokes `#2F3133` -- replace with `hsl(var(--border))` via a CSS variable or `currentColor`
- `#F5F5F5` core strokes -- replace with `hsl(var(--foreground))`
- `#FF5F1F` pulses -- replace with `hsl(var(--primary))`

### HowWeWork.tsx
- `border-[#2F3133]` -- replace with `border-border`

### EngagementTypes.tsx
- `bg-[#1A1C1E]` -- replace with `bg-muted` or `bg-slate`
- `border-[#2F3133]` -- replace with `border-border`

### FAQSection.tsx
- `bg-[#1A1C1E]` -- replace with `bg-slate`
- `border-[#2F3133]` -- replace with `border-border`

### GallagGlyph.tsx
- `stroke="#2F3133"` -- replace with CSS variable
- `group-hover:stroke-[#F5F5F5]` -- replace with `group-hover:stroke-foreground`

### About.tsx
- `bg-[#1A1C1E]` and `border-[#2F3133]` on stat cards -- replace with `bg-slate` / `border-border`

---

## 5. Handle the wordmark logo

The site uses a PNG wordmark (`gallag-wordmark.png`) that is likely white text on transparent. In light mode this will be invisible. Two approaches:

- **Option A (recommended):** Add a `dark:` variant -- use the existing white wordmark for dark mode and provide a dark version for light mode. If no dark PNG exists, apply a CSS `filter: invert(1)` in light mode via a conditional class.
- **Option B:** Use CSS `filter: brightness(0)` on the wordmark in light mode to turn it black.

We will use Option B (`filter`) as it requires no additional assets.

---

## 6. Files to modify

| File | Change |
|---|---|
| `src/App.tsx` | Wrap in `ThemeProvider` |
| `src/index.css` | Add `.light` CSS variable block |
| `src/components/Navigation.tsx` | Add Sun/Moon toggle button |
| `src/components/LeakageEstimator.tsx` | Replace ~15 hardcoded hex values with CSS variables |
| `src/components/HeroSchematic.tsx` | Replace SVG hardcoded colours with CSS variables |
| `src/components/HowWeWork.tsx` | Replace `#2F3133` with `border-border` |
| `src/components/EngagementTypes.tsx` | Replace `#1A1C1E` and `#2F3133` with semantic classes |
| `src/components/FAQSection.tsx` | Replace `#1A1C1E` and `#2F3133` with semantic classes |
| `src/components/GallagGlyph.tsx` | Replace hardcoded strokes with CSS variable references |
| `src/pages/About.tsx` | Replace `#1A1C1E` and `#2F3133` with semantic classes |

---

## Technical notes

- `next-themes` is already installed; `darkMode: ["class"]` is already in `tailwind.config.ts` -- no config changes needed
- The `:root` block keeps the current dark values as the default (so the site stays dark by default for users without a system preference)
- The `.light` class is applied by `next-themes` to `<html>` when the user selects light mode or their system prefers it
- The Sonner toaster component already imports `useTheme` and will work automatically once the provider is in place

