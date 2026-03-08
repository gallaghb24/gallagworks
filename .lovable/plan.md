

## Build Admin Dashboard

### Database Changes

**RLS policy updates** — The current `assessments` and `leads` tables have `SELECT` with `USING (true)` (public read). For the admin dashboard, authenticated admin users need SELECT access. The current policies already allow this, so no RLS changes needed. No new tables required — we'll query existing `assessments`, `leads`, and `contact_submissions` tables.

**Auth setup** — Admin accounts will be created manually in the backend. No self-registration. Use `supabase.auth.signInWithPassword()` for login.

### New Files

**1. `src/pages/AdminLogin.tsx`**
- Centered form on black background
- Email + password fields, Safety Orange "Sign In" button
- 0px border-radius, 1px border styling
- On success, redirect to `/admin`
- On error, show inline error message

**2. `src/components/admin/AdminLayout.tsx`**
- Auth guard: checks `supabase.auth.getSession()`, redirects to `/admin/login` if not authenticated
- Left sidebar (black, w-60) with nav links: Overview, Leads, Assessments
- Sidebar uses JetBrains Mono uppercase labels
- Main content area with dark graphite background
- Sign out button in sidebar footer

**3. `src/pages/admin/AdminOverview.tsx`**
- Summary cards (1px border, 0px radius): Total assessments, This month, Average maturity score, Completion rate
- Bar chart (recharts): Assessments by maturity level
- Bar chart (recharts): Average score by dimension
- Fetches all assessments with joined leads data

**4. `src/pages/admin/AdminLeads.tsx`**
- Table of all leads joined with assessments
- Columns: Name, Organisation, Email, Industry, Company Size, Status, Maturity Level, Date
- Sortable columns (client-side sort)
- Filter dropdowns: Industry, Company Size, Maturity Level, Date Range
- Click row to expand and show dimension scores
- "Export CSV" button generates and downloads CSV
- JetBrains Mono uppercase table headers

**5. `src/pages/admin/AdminAssessments.tsx`**
- Table of all assessments joined with leads
- Columns: Organisation, Name, Total Score, Maturity Level, Status, Date
- Click row to expand and show individual answers (from `answers` jsonb)
- Same brand styling as Leads page

### Route Updates in `src/App.tsx`

```
/admin/login → AdminLogin
/admin → AdminOverview (wrapped in AdminLayout)
/admin/leads → AdminLeads (wrapped in AdminLayout)
/admin/assessments → AdminAssessments (wrapped in AdminLayout)
```

### Styling Approach
- All components use existing CSS variables (background, foreground, border, primary)
- Tables: `font-mono text-xs uppercase tracking-widest` for headers
- Cards: `border border-border rounded-none`
- Charts: recharts `BarChart` with Safety Orange fill (`#FF5F1F`)
- No new CSS or dependencies needed — recharts already installed

### Auth Flow
1. User navigates to `/admin` → `AdminLayout` checks session → redirects to `/admin/login` if unauthenticated
2. Login form calls `signInWithPassword` → on success navigates to `/admin`
3. `onAuthStateChange` listener keeps session state in sync
4. Sign out button calls `supabase.auth.signOut()`

