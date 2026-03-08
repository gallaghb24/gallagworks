

## Add SEO Meta Tags for Diagnostic Pages

All four diagnostic pages already import and render `<SEOHead>`. The changes are minor text updates and one dynamic enhancement.

### Changes

**1. `src/pages/Diagnostic.tsx`** — Update SEOHead props:
- title: `"AI Readiness Diagnostic"`
- description: `"How ready is your organisation for AI? A free 5-minute diagnostic across six critical dimensions. Built by practitioners, not consultants."`
- path: `"/diagnostic"`

**2. `src/pages/DiagnosticAssess.tsx`** — Update SEOHead props:
- title: `"Assessment in Progress"`
- description: `"How ready is your organisation for AI? A free 5-minute diagnostic across six critical dimensions. Built by practitioners, not consultants."`
- path: `"/diagnostic/assess"`

**3. `src/pages/DiagnosticCapture.tsx`** — Update SEOHead props:
- title: `"Your Results Are Ready"`
- description: `"How ready is your organisation for AI? A free 5-minute diagnostic across six critical dimensions. Built by practitioners, not consultants."`
- path: `"/diagnostic/capture"`

**4. `src/pages/DiagnosticResults.tsx`** — Make SEOHead dynamic:
- When `finalData` is available, use dynamic title/description:
  - title: `"${organisation} AI Readiness Assessment"` (or fallback `"Your AI Readiness Results"`)
  - description: `"Scored ${totalScore}/150 — ${maturityLevel.label}. Take the assessment for your organisation."`
  - path: `/diagnostic/results/${currentAssessmentId}` (or `/diagnostic/results`)
- Move the `<SEOHead>` render below the `finalData` extraction so it can use dynamic values, with a static fallback in the loading/error states

**5. `public/sitemap.xml`** — Add `/diagnostic` entry:
```xml
<url>
  <loc>https://www.gallag.works/diagnostic</loc>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

No changes to `SEOHead` component itself — it already renders all required OG tags, Twitter cards, and canonical URLs.

