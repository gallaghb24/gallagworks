

## Plan: Interactive Radar Chart + Hover Effects + Scroll Animations on Results Page

### 1. Interactive Radar Chart
- Add `hoveredDimension` state to the component
- Use Recharts' `onMouseEnter`/`onMouseLeave` on the `<Radar>` dots or wrap with custom active dot rendering
- Actually, better approach: add a **custom `activeDot`** prop on `<Radar>` that enlarges on hover, plus use `onMouseEnter` on `<PolarAngleAxis>` tick labels to set hovered dimension
- When a dimension is hovered (on chart OR on dimension breakdown cards), highlight the corresponding radar point (larger dot, glow effect) and visually connect chart ↔ cards
- Add click/hover handlers to the dimension breakdown cards that set `hoveredDimension`, causing the radar chart dot to pulse/enlarge
- Render a custom tick on `PolarAngleAxis` using `tick` render prop — make labels clickable/hoverable, bold + primary color when active

### 2. Hover Effects on Cards & Elements
- **Dimension Breakdown cards**: Add `hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300` + slight `hover:-translate-y-1`
- **Detailed Recommendation cards**: Same hover lift + border highlight
- **Action Plan columns**: Subtle `hover:border-primary/30` transition
- **Score Card**: Subtle glow on hover
- **Progress bars** in dimension cards: Add a shimmer/pulse on hover

### 3. Scroll-triggered Animations
- Use the existing `useScrollAnimation` hook already in the project
- Wrap each major section (`<section>`) with the hook's ref and apply `opacity-0 → animate-fade-in-up` when `isVisible` becomes true
- Stagger child elements using `animationDelay` based on index (already done for dimension cards, extend to recommendations, action plan columns)
- Sections to animate on scroll:
  - Score Card + Radar Chart (fade in from below)
  - Dimension Breakdown grid (staggered, already partially done)
  - Detailed Recommendations (staggered pairs)
  - Action Plan columns (stagger left to right)
  - Share/CTA section (fade in)

### Technical Approach
- All changes in `src/pages/DiagnosticResults.tsx`
- Use existing `useScrollAnimation` hook from `src/hooks/useScrollAnimation.ts`
- Use Recharts' built-in `activeIndex` / custom dot rendering for radar interactivity
- Tailwind classes for hover transitions — no new CSS needed beyond what exists
- Shared `hoveredDimension` state connects radar chart to dimension cards bidirectionally

