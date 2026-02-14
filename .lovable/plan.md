

# Tweak Plan: Premium Polish, Mobile Readability, and Conversion

## A) Prioritised Changes

1. **Hero sub-headline contrast** -- Change `text-muted-foreground` to `text-foreground/70` on the hero `<p>` tag. Current muted-foreground (`hsl(20 8% 40%)`) is too washed out against the stone background. (`HeroSection.tsx`)

2. **Mobile body text sizing** -- Add `text-base md:text-sm` to proof point card text, engagement type descriptions, and how-we-work paragraphs so mobile gets 16px (browser default, no zoom issues) while desktop stays compact. Increase `leading-relaxed` to `leading-relaxed` (already set) or bump to `leading-7` where needed. (`ProofPoints.tsx`, `EngagementTypes.tsx`, `HowWeWork.tsx`, `ServicesSummary.tsx`, `CaseStudyCard.tsx`)

3. **Mobile spacing rhythm** -- Standardise section padding to `py-16 lg:py-28` (currently some are `py-20 lg:py-28`, others `py-20 lg:py-24`). Standardise card padding to `p-6 md:p-8`. (`ProofPoints.tsx`, `ServicesSummary.tsx`, `HowWeWork.tsx`, `EngagementTypes.tsx`, `CTABand.tsx`)

4. **Credibility section** -- Create `CredibilitySection.tsx` and place it on the Home page between ProofPoints and ServicesSummary. Title: "Led by Ben Gallagher". 2-3 bullets + InfoSec line. Uses scroll animation. (`CredibilitySection.tsx`, `Index.tsx`)

5. **Em dash to en dash** -- Replace all `—` with ` -- ` across `ProofPoints.tsx`, `HowWeWork.tsx`, `EngagementTypes.tsx`, `Services.tsx`. (5 occurrences total.)

6. **Mobile CTA in hamburger menu** -- Move the "Book a discovery call" button to the top of the mobile menu (before nav links), styled as a full-width button. (`Navigation.tsx`)

7. **"See how we work" secondary CTA upgrade** -- Change from inline text link to an outlined button (`variant="outline"`) with the coral border and stronger visual weight. (`ServicesSummary.tsx`)

8. **Card border/shadow improvement** -- Darken `--border` from `28 20% 83%` to `28 18% 78%`. Add a very subtle box-shadow to `.card-hover` base state: `box-shadow: 0 1px 3px 0 hsl(var(--foreground) / 0.04)`. (`index.css`)

9. **Button hover/pressed states** -- Add `active:scale-[0.98]` to the primary button variant for a confident pressed feel. Ensure consistent `rounded-full` on all CTA buttons (already mostly done). (`button.tsx`)

10. **Sub-headline contrast on Services and Case Studies pages** -- Same fix as hero: change `text-muted-foreground` to `text-foreground/70` on page sub-headlines. (`Services.tsx`, `CaseStudies.tsx`, `Contact.tsx`)

---

## B) Implementation Notes

### Files to edit

| File | Changes |
|------|---------|
| `src/index.css` | Darken `--border` to `28 18% 78%`. Add base `box-shadow` to `.card-hover`. |
| `src/components/ui/button.tsx` | Add `active:scale-[0.98] transition-all` to base CVA string. |
| `src/components/HeroSection.tsx` | Change sub-headline class from `text-muted-foreground` to `text-foreground/70`. |
| `src/components/ProofPoints.tsx` | Fix em dash. Add `text-base` to card text for mobile sizing. Standardise section padding to `py-16 lg:py-28`. |
| `src/components/ServicesSummary.tsx` | Add `text-base` to description text. Upgrade "See how we work" to outlined Button. Standardise padding. |
| `src/components/HowWeWork.tsx` | Fix em dash. Add `text-base` to step descriptions. Standardise padding. |
| `src/components/EngagementTypes.tsx` | Fix 3 em dashes. Change description from `text-sm` to `text-base md:text-sm`. Standardise padding. |
| `src/components/CTABand.tsx` | Standardise padding to `py-16 lg:py-24`. |
| `src/components/CaseStudyCard.tsx` | Add `text-base` to paragraph text for mobile. |
| `src/components/Navigation.tsx` | Move CTA button to top of mobile menu, before nav links. |
| `src/pages/Services.tsx` | Fix em dash in sub-headline. Change `text-muted-foreground` to `text-foreground/70`. |
| `src/pages/CaseStudies.tsx` | Change `text-muted-foreground` to `text-foreground/70` on sub-headline. |
| `src/pages/Contact.tsx` | Change `text-muted-foreground` to `text-foreground/70` on sub-headline. |
| `src/pages/Index.tsx` | Import and insert `CredibilitySection` between `ProofPoints` and `ServicesSummary`. |

### New file

| File | Purpose |
|------|---------|
| `src/components/CredibilitySection.tsx` | Compact trust signal section with title, bullet points, and InfoSec line. Uses `useScrollAnimation` hook and existing design tokens. |

### Credibility section content

**Title:** "Led by Ben Gallagher"

**Bullets:**
- Operational AI and workflow transformation across industries -- from professional services to media to financial operations.
- Implementation-first: working automation, adoption planning, and governance -- not just strategy decks.
- I lead engagements directly and bring specialist build support when needed.

**Footer line:** "NDA and InfoSec-aligned delivery as standard."

### CSS token changes

| Token | Before | After |
|-------|--------|-------|
| `--border` | `28 20% 83%` | `28 18% 78%` |
| `.card-hover` base shadow | none | `box-shadow: 0 1px 3px 0 hsl(var(--foreground) / 0.04)` |

### No changes to
- Colour palette (stone, coral, charcoal, dark footer -- untouched)
- Routing or page structure
- Logo
- Contact form logic
- Footer layout
- Font families (Sora + Inter)

