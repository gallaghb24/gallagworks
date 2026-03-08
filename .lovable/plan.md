

## One-Question-Per-Page Diagnostic

### Current State
The assessment shows all 5 questions per dimension on a single scrollable page (6 dimensions × 5 questions = 30 total). Users must scroll and click "Next" after each dimension.

### Proposed Change
Flatten all 30 questions into a single linear sequence. Show one question at a time. When the user selects an answer, auto-advance to the next question after a brief delay (~600ms). The progress bar tracks individual questions (1/30 → 2/30 → ... → 30/30).

### Technical Changes — `src/pages/DiagnosticAssess.tsx`

1. **Replace dimension-based state with flat question index:**
   - Flatten `dimensions` into a single array of `{ dimension, question, globalIndex }` objects
   - Track `currentQuestion` (0–29) instead of `currentDimension`
   - Progress = `(currentQuestion + 1) / totalQuestions * 100`

2. **Auto-advance on answer selection:**
   - Wrap `updateAnswer` — after calling it, set a `setTimeout` (~600ms) to increment `currentQuestion`
   - On the last question, navigate to `/diagnostic/capture` instead
   - Show a brief visual confirmation (the selected option highlights) before advancing

3. **Update the sticky header:**
   - Show dimension name + tagline for context (derived from current question's parent dimension)
   - Counter changes to `[06/30]` style
   - Progress bar width based on per-question progress

4. **Simplify the content area:**
   - Render only the single current question (no `.map()` over questions)
   - Keep the dimension intro shown only when entering a new dimension (first question of that dimension)

5. **Navigation:**
   - Keep a "Back" button (or arrow) to go to previous question
   - Remove the "Next" button — selection auto-advances
   - On the very last question, after selection, auto-navigate to capture page

6. **Analytics adjustments:**
   - Track `dimension_completed` when the last question of each dimension is answered
   - Update abandonment tracking to reference `currentQuestion` index

