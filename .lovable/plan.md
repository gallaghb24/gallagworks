

## Update Dimensions 3 & 4 with Real Content

Replace the placeholder content for Governance & Risk (lines 142-203) and Skills & Culture (lines 205-266) in `src/data/questions.ts`:

**Dimension 3 — Governance & Risk:**
- Update `intro` text to user's version
- Rename question IDs: `governance_risk_1..5` → `gr_1..5`
- Replace question text and option labels with user's exact content (removing em dashes, cleaning quotes)

**Dimension 4 — Skills & Culture:**
- Update `intro` text to user's version
- Rename question IDs: `skills_culture_1..5` → `sc_1..5`
- Replace question text and option labels with user's exact content

No other files need changes — the scoring function already iterates over question IDs from the data.

