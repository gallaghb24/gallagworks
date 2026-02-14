
# Visual Texture and Brand Polish

## Changes (14 items)

1. **Remove CredibilitySection** -- Delete import and usage from `Index.tsx`. Delete `CredibilitySection.tsx`.
2. **Add "Implementation-first" block on Home** -- Place a short standalone line after ProofPoints and before ServicesSummary (no founder framing).
3. **Coral-tinted cards on Diagnose/Build/Embed** -- `ServicesSummary.tsx`: change card bg to `#FFF1EF`, border to `#F2C7C2`.
4. **Coral left rail on neutral cards** -- Add `border-l-4 border-l-primary` to proof point cards (`ProofPoints.tsx`), engagement type cards (`EngagementTypes.tsx`), FAQ accordion items (`FAQSection.tsx`), and case study cards (`CaseStudyCard.tsx`).
5. **Section dividers** -- Create a reusable `SectionDivider` component (1px stone line + 40px coral accent segment, left-aligned). Insert between major sections on all pages.
6. **Kicker labels** -- Add uppercase coral kicker text (letter-spaced, small) above each H2: "PROOF", "ENGAGEMENTS", "METHOD", "FAQ", "CASE STUDIES", "CONTACT" in their respective components/pages.
7. **Hero grid texture** -- Add a CSS `background-image` using a repeating linear-gradient grid pattern at ~4% opacity to all hero sections (Home, Services, Case Studies, Contact).
8. **Icons on Diagnose/Build/Embed cards** -- Use lucide-react: `Search`, `Wrench`, `Anchor` in `ServicesSummary.tsx`.
9. **Icons on How We Work steps** -- Use lucide-react: `Map`, `Layers`, `Zap` in `HowWeWork.tsx`.
10. **Fix em dash in EngagementTypes** -- Line 42 has `—`, replace with ` – `.
11. **Fix em dash in Services page** -- Line 26 `–` is correct already, but ensure consistency.
12. **Standardise FAQ section padding** -- Change `py-20` to `py-16` in `FAQSection.tsx`.
13. **Hero grid CSS utility** -- Add `.hero-grid` class in `index.css` with the subtle grid pattern.
14. **Add icons to proof points (optional)** -- Skip to avoid mobile clutter per the brief.

## Technical Details

### New files
| File | Purpose |
|------|---------|
| `src/components/SectionDivider.tsx` | Reusable divider: 1px `border-border` line with a 40px coral accent segment left-aligned |

### Files to delete
| File | Reason |
|------|--------|
| `src/components/CredibilitySection.tsx` | Founder section removed per brief |

### Files to edit

| File | Changes |
|------|---------|
| `src/index.css` | Add `.hero-grid` utility class with repeating-linear-gradient grid at 4% opacity |
| `src/pages/Index.tsx` | Remove `CredibilitySection` import/usage. Add `SectionDivider` between sections. Add "Implementation-first" standalone block after ProofPoints. |
| `src/components/HeroSection.tsx` | Add `hero-grid` class to section element |
| `src/components/ProofPoints.tsx` | Add kicker label "PROOF". Add `border-l-4 border-l-primary` to cards. |
| `src/components/ServicesSummary.tsx` | Add kicker label "SERVICES". Change card bg/border to coral-tinted (`bg-[#FFF1EF] border-[#F2C7C2]`). Add lucide icons (Search, Wrench, Anchor). |
| `src/components/HowWeWork.tsx` | Add kicker label "METHOD". Add lucide icons (Map, Layers, Zap). |
| `src/components/EngagementTypes.tsx` | Add kicker label "ENGAGEMENTS". Add `border-l-4 border-l-primary` to cards. Fix em dash on line 42. |
| `src/components/FAQSection.tsx` | Add kicker label "FAQ". Add `border-l-4 border-l-primary` to accordion items. Fix padding `py-20` to `py-16`. |
| `src/components/CaseStudyCard.tsx` | Add `border-l-4 border-l-primary` to card wrapper. |
| `src/pages/Services.tsx` | Add `hero-grid` to hero section. Add `SectionDivider` between sections. |
| `src/pages/CaseStudies.tsx` | Add kicker label "CASE STUDIES" to hero. Add `hero-grid` to hero section. Add `SectionDivider` before CTA. |
| `src/pages/Contact.tsx` | Add kicker label "CONTACT" to hero. Add `hero-grid` to hero section. |
| `src/components/CTABand.tsx` | No changes needed (no kicker here -- it's a CTA, not a content section). |

### CSS: `.hero-grid` pattern
```css
.hero-grid {
  background-image:
    repeating-linear-gradient(0deg, rgba(31,31,31,0.04) 0px, rgba(31,31,31,0.04) 1px, transparent 1px, transparent 60px),
    repeating-linear-gradient(90deg, rgba(31,31,31,0.04) 0px, rgba(31,31,31,0.04) 1px, transparent 1px, transparent 60px);
}
```

### Kicker label pattern (consistent across all sections)
```tsx
<span className="text-primary text-xs font-semibold uppercase tracking-[0.15em]">PROOF</span>
```

### SectionDivider component
```tsx
<div className="container mx-auto px-6 lg:px-12">
  <div className="max-w-4xl mx-auto relative">
    <div className="h-px bg-border" />
    <div className="absolute top-0 left-0 h-px w-10 bg-primary" />
  </div>
</div>
```

### "Implementation-first" block (Home, after ProofPoints)
A compact, standalone line in a slightly emphasised style -- not a section with its own heading, just a strong sentence with a coral left border, placed inside its own small wrapper.
