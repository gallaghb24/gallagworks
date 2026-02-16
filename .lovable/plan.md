# Services Page Copy Refinements

Three targeted copy updates to the engagement tiers in `src/components/EngagementTypes.tsx`.

---

## Changes

### Tier 01: Operational Audit & X-Ray

**Current:**

> ...We expose the Data Glue — the manual re-keying and spreadsheet handoffs — that silently consumes 30% of your team's capacity. You receive a logic schematic of where your margin is leaking.

**New:**

> ...We expose the Data Glue — the manual re-keying and spreadsheet handoffs — hiding in plain sight. We identify the 20% of 'Data Glue' causing 80% of your operational friction. You receive a logic schematic of where your margin is leaking.

### Tier 02: Structural Prototype

**Current:**

> We re-engineer one high-friction workflow end-to-end. We don't just 'test' AI; we build working infrastructure that proves the ROI and protects the P&L before you commit to scaling.

**New:**

> We re-engineer one high-friction workflow end-to-end via engineered Decision Inboxes — AI aggregates the context, but your experts retain the final sign-off. We don't just 'test' AI; we build working infrastructure that proves the ROI and protects the P&L before you commit to scaling.

### Tier 03: Enterprise Integration

**Current:**

> Transformation at scale. We focus on the human-in-the-loop governance and champion-led adoption that ensures the system actually sticks across teams and geographies.

**New:**

> Transformation at scale. We focus on Governance and Exception Engineering — human-in-the-loop safety rails that ensure your team stays in control. Combined with champion-led adoption, the system actually sticks across teams and geographies.

---

## Technical Detail

All changes are in a single file: `src/components/EngagementTypes.tsx`, updating the `description` strings in the `tiers` array (lines 8, 14, and 20). No layout or styling changes.