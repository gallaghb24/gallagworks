
# Copy Refinement: Sharpen the Messaging Across Key Sections

This plan applies the suggested copy refinements across four homepage sections, plus adds a new "Anti-Hero" callout. Each change is designed to increase credibility, specificity, and emotional resonance.

---

## 1. Hero Section (HeroSection.tsx)

**What changes:**
- Sub-headline gets a stronger "So What?" ending
- Second sentence reframed around "Decision Inboxes" as a proprietary system

**Current copy:**
> We help operations and commercial leaders untangle the 'Data Glue' -- the manual re-keying, spreadsheets, and workarounds that kill capacity. We simplify the logic, then build the AI infrastructure to run it.

**New copy:**
> We help operations and commercial leaders untangle the 'Data Glue' -- the manual re-keying, spreadsheets, and workarounds that erode margin and burn out your best people. We move your team from Data Processors to Decision Makers via engineered Decision Inboxes.

---

## 2. The Principal Section (Principal.tsx)

**What changes:**
- Replace the existing bio paragraph with a sharper, first-person-feel statement that foregrounds the £15m+ experience and reframes the value as "recovering hours, not billing them"

**Current copy:**
> Gallag Works is an independent operational engineering studio founded by Ben Gallagher. With nearly two decades of experience directing enterprise client delivery and managing £15m+ multichannel contracts for major UK retailers, Ben learned a hard truth: efficiency protects the P&L. Managing high-stakes, 30+ person teams required a ruthless focus on operations. He founded Gallag Works to bring that exact 'efficiency-first' methodology to leaders across industries who are drowning in manual workarounds and ready to build scalable systems.

**New copy:**
> Gallag Works is an independent operational engineering studio founded by Ben Gallagher. After 20 years managing £15m+ multichannel contracts and 30+ person teams for major UK retailers, Ben learned a hard truth: efficiency protects the P&L. He's not here to bill hours -- he's here to recover them. Gallag Works exists to bring that exact 'efficiency-first' methodology to leaders who are drowning in manual workarounds and ready to build scalable systems.

---

## 3. Outcomes Section (ProofPoints.tsx)

**What changes:**
- Add specificity to the 98% metric to increase believability

**Current detail copy for Metric 2:**
> Eradicating the 'Data Glue' from core workflows to cut manual effort by up to 98% on targeted tasks -- reallocating thousands of hours toward strategic growth.

**New detail copy:**
> Up to 98% reduction in repetitive data entry across core workflows -- eradicating the 'Data Glue' and reallocating thousands of hours toward strategic growth.

---

## 4. New "Anti-Hero" Callout (Philosophy.tsx)

**What changes:**
- Add a bold callout line after the existing Philosophy paragraph to address the "AI Gold Rush"

**New line appended:**
> Everyone is buying AI tools. No one is engineering the logic to make them work. We do the latter.

This will be styled as a separate paragraph with the same muted styling, appearing after the existing philosophy copy.

---

## Technical Summary

| File | Change |
|---|---|
| `src/components/HeroSection.tsx` | Update sub-headline copy (line 20) |
| `src/components/Principal.tsx` | Update bio paragraph copy (line 23-24) |
| `src/components/ProofPoints.tsx` | Update Metric 2 detail copy (line 14) |
| `src/components/Philosophy.tsx` | Add "Anti-Hero" callout paragraph after existing copy (after line 24) |

All changes are copy-only -- no layout, styling, or structural modifications required.
