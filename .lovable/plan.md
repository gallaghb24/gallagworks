
# Gallag Works Homepage Overhaul

## Overview
Complete rebrand and visual overhaul of the homepage, transforming from the warm, centre-aligned "Intelligent Transformation Studio" into a dark, left-aligned, engineering-studio aesthetic for "Gallag Works."

This plan covers the homepage only. Other pages (About, Services, Case Studies, Contact) will retain their current structure but will inherit the new colour palette and typography through the global theme changes.

---

## 1. Global Theme Changes

### Fonts (index.html + index.css + tailwind.config.ts)
- Load **Archivo** (bold sans-serif for headings) and **JetBrains Mono** (monospace for labels/numbers) via Google Fonts
- Keep **Inter** for body text
- Add `font-mono` mapping to JetBrains Mono in Tailwind config
- Replace `font-display` mapping from Sora to Archivo

### Colour Palette (index.css CSS variables)
- **Background**: Deep Charcoal `#1A1A1A`
- **Foreground**: Crisp White `#F5F5F5`
- **Primary (accent)**: Safety Orange `#FF5F1F`
- **Muted foreground**: Light Grey `#A0A0A0`
- **Border**: `#2E2E2E` (subtle dark border)
- **Footer**: Slightly darker `#111111`
- **Card / popover**: `#222222`

### Global Styles (index.css)
- Remove the `hero-grid` warm background texture
- Remove the `card-hover` shadow/lift effect (replaced with border-only interactions)
- Update `scroll-fade-in` to work with the dark palette

---

## 2. Navigation (Navigation.tsx)

- Replace logo image with a text wordmark: **GALLAG WORKS** in Archivo bold + a small monospace tagline "Operational Engineering"
- Sticky header with glassmorphism: `bg-[#1A1A1A]/80 backdrop-blur-md border-b border-[#2E2E2E]`
- "Book a discovery call" button: Safety Orange pill (`bg-[#FF5F1F] rounded-full`)
- Nav links in light grey, white on hover/active
- Mobile menu: dark background with orange accent

---

## 3. Hero Section (HeroSection.tsx)

- **Layout**: Switch from centred to a two-column grid (`grid-cols-1 lg:grid-cols-2`)
  - **Left column**: Left-aligned headline "Operational Engineering for the AI Era." in large bold Archivo. Subtext in light grey. Safety Orange CTA button.
  - **Right column**: Animated terminal/code window component showing scrolling operational engineering commands (pure CSS animation, no dependencies). Dark card with monospace text, a fake title bar with coloured dots, and auto-scrolling lines like `> mapping workflow nodes...`, `> deploying automation pipeline...`, etc.

---

## 4. Services Section (ServicesSummary.tsx)

- Remove the coral-tinted cards entirely
- Replace with a **vertical list with 1px horizontal dividers**
- Each row: monospace label on the left (e.g., `[01 DIAGNOSE]`) in Safety Orange, description text on the right in light grey
- Responsive: stacks vertically on mobile with label above description
- Remove the "Explore our services" button (or restyle as a minimal text link)

---

## 5. How We Work Section (HowWeWork.tsx)

- Create a **horizontal flow diagram** layout
- Three steps connected by literal SVG/CSS lines
- Each step: a bordered box with monospace step number (`01`, `02`, `03`) in orange, title in white, description in grey
- Connecting lines: 1px solid orange/grey lines between boxes
- Responsive: vertical flow on mobile with vertical connecting lines

---

## 6. Outcomes / Proof Points (ProofPoints.tsx)

- Replace the text-only cards with a **data grid** layout
- Each item gets a large bold metric/label (e.g., "Capacity Released", "Rework Eliminated") in white Archivo, with a supporting line underneath in grey
- Grid: `grid-cols-2 lg:grid-cols-4` for a dense data-panel feel
- Each cell separated by 1px borders, no rounded corners
- Monospace kicker label `[OUTCOMES]` at the top

---

## 7. CTA Band (CTABand.tsx)

- Dark section with 1px top/bottom borders
- Headline left-aligned or centred in bold white
- Safety Orange CTA button
- Email line below in monospace grey

---

## 8. Footer (Footer.tsx)

- Update brand name to "Gallag Works"
- Update email address to `hello@gallagworks.com` (or keep current if not changing domain yet)
- Dark background (`#111`), 1px top border, minimal layout
- Monospace copyright line

---

## 9. Page Title / Meta (index.html)

- Update `<title>` to "Gallag Works | Operational Engineering"
- Update meta description and OG tags

---

## Technical Details

### Files Modified
1. **index.html** -- title, meta tags, font imports
2. **src/index.css** -- CSS variables (full palette swap), remove old utilities, add new ones
3. **tailwind.config.ts** -- font families (Archivo, JetBrains Mono), updated colour references
4. **src/components/Navigation.tsx** -- text wordmark, glassmorphism, orange CTA, dark mobile menu
5. **src/components/HeroSection.tsx** -- two-column grid, left-aligned copy, terminal animation component
6. **src/components/ServicesSummary.tsx** -- vertical divider list with monospace labels
7. **src/components/HowWeWork.tsx** -- horizontal flow diagram with connecting lines
8. **src/components/ProofPoints.tsx** -- data grid layout with bold metrics
9. **src/components/CTABand.tsx** -- dark bordered section, left-align option
10. **src/components/Footer.tsx** -- brand name, dark styling
11. **src/pages/Index.tsx** -- update CTA headline text, email address if needed
12. **src/pages/About.tsx** -- update document title reference from "Intelligent Transformation Studio" to "Gallag Works"

### New Components
- **TerminalAnimation** (inline in HeroSection or separate file) -- pure CSS animated terminal window with scrolling monospace text lines

### No New Dependencies
All achieved with existing Tailwind, Lucide icons, and CSS animations.
