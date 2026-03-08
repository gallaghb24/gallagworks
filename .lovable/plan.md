

## Cross-link Diagnostic Throughout Site

### 1. CTABand — add `secondaryCTA` prop (`src/components/CTABand.tsx`)
Add optional `secondaryCTA: { label: string; to: string }` to the interface. When provided, render a second `Link` button below the primary one with outlined styling (`border border-border text-foreground hover:text-primary rounded-none`).

### 2. Update CTABand usages
- **Index.tsx**: Import CTABand and add it before `</main>` (above Footer) with `secondaryCTA={{ label: "Take the AI Readiness Diagnostic", to: "/diagnostic" }}`. Use a suitable headline.
- **Services.tsx** (line 43): Add `secondaryCTA={{ label: "Start with the free Diagnostic", to: "/diagnostic" }}`
- **Insights.tsx** (line 148): Add `secondaryCTA={{ label: "Take the Diagnostic", to: "/diagnostic" }}`

### 3. Footer — add Diagnostic link + update CTA copy (`src/components/Footer.tsx`)
- Insert `<Link to="/diagnostic">Diagnostic</Link>` in the NAV column between Services and The Principal (after line 62)
- Update subcopy (line 28) to: "Start with the free AI Readiness Diagnostic, or request an Operational X-Ray to quantify your margin recovery opportunity."
- Add secondary text link below the Button: `<Link to="/diagnostic" className="text-sm text-foreground/50 hover:text-primary transition-colors mt-4 block">Or take the free 5-minute diagnostic →</Link>`

### 4. DiagnosticResults — add cross-links (`src/pages/DiagnosticResults.tsx`)
After the existing CTA section (below the "30 minutes, no obligation" paragraph, ~line 823), add a row of three monospace text links:
- "Explore our methodology" → `/insights/eradicating-enterprise-data-glue`
- "See how we work" → `/services`
- "Book a strategy call" → `https://calendly.com/bengallagher`

Styled as `font-mono text-sm text-muted-foreground hover:text-primary` in a flex row with gaps.

### Files
1. `src/components/CTABand.tsx` — add secondaryCTA prop + render
2. `src/pages/Index.tsx` — add CTABand with secondaryCTA
3. `src/pages/Services.tsx` — add secondaryCTA prop
4. `src/pages/Insights.tsx` — add secondaryCTA prop
5. `src/components/Footer.tsx` — add Diagnostic nav link + update CTA copy
6. `src/pages/DiagnosticResults.tsx` — add cross-link row

