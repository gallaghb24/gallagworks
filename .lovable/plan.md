

## Add Sharing Capabilities to Results Page

### Changes — single file: `src/pages/DiagnosticResults.tsx`

**1. Load from Supabase when `:assessmentId` param is present**

- Import `useParams` from react-router-dom, `supabase` client, and `useState`
- Add state: `loading`, `error`, `resolvedData` (scoring + organisation)
- In a `useEffect`, if `assessmentId` param exists, fetch from `assessments` table joined with `leads` (for organisation name), then reconstruct the `ScoringResult` using `calculateFullScoring` or by rebuilding from stored `dimension_scores`, `total_score`, `maturity_level`
- The assessments table stores `dimension_scores` (jsonb), `total_score`, `maturity_level`, and `answers` (jsonb) — plus `lead_id` FK to `leads.id` for the organisation name
- If no param, fall back to existing `location.state` behavior
- Only redirect to `/diagnostic` if neither param nor state is available
- Show loading spinner while fetching

**2. Share Results button**

- Add a "Share Your Results" button next to the existing CTAs (or in a new sharing row above CTAs)
- On click: copy `window.location.origin + /diagnostic/results/${assessmentId}` to clipboard
- Show toast "Link copied to clipboard"
- Icon: `Link` from lucide-react

**3. LinkedIn share button**

- "Share on LinkedIn" outlined button with LinkedIn blue (`#0A66C2`) icon
- Opens `https://www.linkedin.com/sharing/share-offsite/?url=...` with the share URL
- Pre-filled text via the URL (LinkedIn share dialog only supports URL, not custom text — but we can encode a mini-page or just share the link)
- Actually LinkedIn share-offsite only takes a URL. The pre-filled text approach requires the og:title/description on the shared page. So the button opens the share dialog with the results URL, and the OG tags on that page provide the preview text.

**4. "Take the assessment" CTA on shared view**

- When loaded via URL param (not from state), show a banner/CTA: "Take the assessment for your organisation" linking to `/diagnostic`

**5. RLS consideration**

- The assessments table already has `SELECT` with `USING (true)` — shared results are publicly readable. This is intentional for sharing.

**6. Reconstruct scoring from DB**

- The `assessments` table stores `dimension_scores` (jsonb) and `total_score` (int) and `maturity_level` (text)
- Need to rebuild the full `ScoringResult` object: call `getMaturityLevel(total_score)`, `getDimensionRating` for each dimension, and `getPriorityOrder` from the stored dimension_scores
- Get `organisation` by joining with `leads` table via `lead_id`

No database changes needed. No new dependencies.

