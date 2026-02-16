
# Legal Infrastructure and Cookieless Analytics

## 1. New Pages: /privacy and /cookies

Create two new page components following the existing page pattern (Navigation + main content + Footer). Both will use the established dark mode architectural style:
- Left-aligned text, max-width 720px
- JetBrains Mono label tags, Inter body copy
- 1px graphite border separators
- Placeholder content structure ready for the client's legal text

**Files:**
- `src/pages/Privacy.tsx` -- new
- `src/pages/Cookies.tsx` -- new
- `src/App.tsx` -- add routes for `/privacy` and `/cookies`

## 2. PostHog Cookieless Analytics

Add the PostHog JS snippet to the app entry point with strict cookieless configuration.

- Install `posthog-js` dependency
- Initialise in `src/main.tsx` with `persistence: 'memory'` and `disable_cookies: true`
- No cookie consent banner whatsoever

A PostHog project API key will be needed. This will be hardcoded in the client-side init (standard practice for PostHog public keys, same as their docs recommend).

**Question for you:** Do you have your PostHog project API key and host URL ready to provide, or should I use a placeholder you can swap later?

## 3. Privacy Disclaimer on CTA Buttons

Add a discreet line beneath every "Request a Consultation" button:

> Data is processed in accordance with our [Privacy Policy].

Styled as `font-mono text-xs text-muted-foreground/50` with a link to `/privacy`.

**Files affected:**
- `src/components/HeroSection.tsx` -- below hero CTA
- `src/components/CTABand.tsx` -- below CTA band button
- `src/pages/Contact.tsx` -- below the submit button

## 4. Footer Updates

Restructure the footer to add a Legal section and update the copyright line:

- Add "Privacy" and "Cookies" links in a new legal nav group, styled consistently with existing footer links
- Replace the copyright text with: "© 2026 Gallag Works Ltd. Registered in England and Wales: 17033965."

**File:** `src/components/Footer.tsx`

---

## Technical Summary

| Change | File(s) | Type |
|---|---|---|
| Privacy page | `src/pages/Privacy.tsx`, `src/App.tsx` | New file + route |
| Cookies page | `src/pages/Cookies.tsx`, `src/App.tsx` | New file + route |
| PostHog init | `src/main.tsx` | Edit |
| Privacy disclaimer | `HeroSection.tsx`, `CTABand.tsx`, `Contact.tsx` | Edit |
| Footer legal section | `Footer.tsx` | Edit |
| PostHog dependency | `package.json` | New dependency |
