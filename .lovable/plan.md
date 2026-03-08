

## Assessment Engine — `/diagnostic/assess`

### Files to create/modify

**1. `src/data/questions.ts`** — All 30 questions from the spec, structured as typed data:
- 6 dimensions, each with `id`, `name`, `tagline`, `intro`, and 5 questions
- Each question has `id` (e.g. `data_foundation_1`), `text`, and `options` array with `{ value: 1-5, label: string }`
- Full question text from the spec (not placeholders — the spec content is available)

**2. `src/pages/DiagnosticAssess.tsx`** — Complete rewrite of the placeholder:

**Layout:**
- `bg-background` full page (black in dark mode), no Navigation/Footer — immersive assessment experience
- Fixed top progress bar area + scrollable question content below

**Progress bar:**
- Full-width bar: `bg-border` track (graphite), `bg-primary` fill (Safety Orange), `h-1` (4px), `rounded-none`
- Above bar: dimension counter in `font-mono text-primary` (e.g. `[02/06]`) + dimension name in `font-sans font-bold text-foreground`
- Progress = currentDimension / 6

**Dimension intro:**
- Below progress: dimension tagline + intro text in `text-muted-foreground font-light`

**Questions (all 5 visible per dimension):**
- Each question in a card: `border border-border rounded-none p-6`
- Question text: `font-bold text-foreground`
- Options as selectable rows: `border border-border rounded-none`, full-width
  - Hover: `border-primary`
  - Selected: `border-l-[3px] border-l-primary bg-primary/5` (subtle orange tint)
  - Option text: `text-foreground font-normal`
  - Score values hidden from user

**Navigation buttons:**
- Bottom of page, flex row with gap
- "Back": `border border-border text-foreground rounded-none` (ghost/outline style) — hidden on dimension 1
- "Next": `bg-primary text-primary-foreground rounded-none` — disabled until all 5 questions answered
- On final dimension with all answered: button text becomes "See Your Results"
- "See Your Results" navigates to `/diagnostic/capture`

**State management:**
- Uses `useDiagnostic()` context — calls `updateAnswer(questionId, value)` on selection
- Tracks `currentDimension` index as local state (0-5)
- Scrolls to top on dimension change

**Mobile:** Full-width cards and options, stacked vertically. Buttons full-width on mobile.

### No database changes needed — answers stored in context, persisted to DB on capture page.

