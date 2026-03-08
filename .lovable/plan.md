

## Add Analytics Event Tracking

### 1. Database Migration
Create `analytics_events` table:
- `id` (uuid, PK, default gen_random_uuid())
- `assessment_id` (uuid, nullable)
- `event_name` (text, not null)
- `properties` (jsonb, default '{}')
- `created_at` (timestamptz, default now())

RLS: INSERT open to all (anon), SELECT restricted (false for anon — admin only via service role).

### 2. Create `src/lib/analytics.ts`
Utility with `trackEvent(eventName: string, properties?: Record<string, any>)` that:
- Calls `posthog.capture(eventName, properties)` (import posthog from 'posthog-js')
- Fire-and-forget inserts into `analytics_events` via supabase client

### 3. Track `page_view` on Every Route Change
In `src/App.tsx`, enhance the existing `ScrollToTop` component to also call `trackEvent('page_view', { path: pathname })` on every pathname change.

### 4. Instrument Diagnostic Flow

**`src/pages/DiagnosticAssess.tsx`**:
- `dimension_completed` — in `handleNext`, before advancing, track with `{ dimension_name, dimension_score }` (compute score from answers for that dimension)
- `assessment_abandoned` — add `beforeunload` listener that fires `trackEvent('assessment_abandoned', { last_dimension_completed: currentDimension })`. Clean up on unmount and on successful completion.

**`src/pages/DiagnosticCapture.tsx`**:
- `assessment_started` — on successful form submit (after DB insert), track with `{ industry, company_size }`
- `assessment_completed` — track with `{ total_score, maturity_level, assessment_id }`

**`src/pages/DiagnosticResults.tsx`**:
- `results_viewed` — on mount/data load, track with `{ assessment_id, total_score, maturity_level }`
- `pdf_downloaded` — in the PDF download button click handler
- `calendly_clicked` — in the "Book a Strategy Call" button click handler
- `linkedin_share_clicked` — in `handleLinkedInShare`
- `results_link_copied` — in `handleCopyLink`

### Files
1. **Migration** — create `analytics_events` table + RLS
2. **Create** `src/lib/analytics.ts`
3. **Edit** `src/App.tsx` — add page_view tracking in ScrollToTop
4. **Edit** `src/pages/DiagnosticAssess.tsx` — dimension_completed + assessment_abandoned
5. **Edit** `src/pages/DiagnosticCapture.tsx` — assessment_started + assessment_completed
6. **Edit** `src/pages/DiagnosticResults.tsx` — results_viewed + button click events

