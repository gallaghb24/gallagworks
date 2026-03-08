

## Adjust Financial Claims for Credibility

### 1. `src/components/ProofPoints.tsx`
- **Line 7**: Change `target: 15` to `target: 10` (counts to £1.0M+)
- **Line 14**: Change label from `"Quantified Margin Recovery"` to `"Identified Operational Leakage"`
- **Lines 15-16**: Replace detail text with: `"Identified over £1M in cumulative operational leakage across enterprise engagements. Leakage quantified through the Operational X-Ray methodology: fully-loaded cost of manual re-keying, spreadsheet handoffs, and coordination overhead mapped workflow by workflow."`

### 2. `src/pages/InsightManifesto.tsx`
Four instances of £1.5M to update:
- **Line 58** (seoDescription): `"£1.5M+"` → `"£1M+"`
- **Line 85** (section title): `"£1.5M+"` → `"£1M+"`
- **Line 87** (paragraph): `"over £1.5M in cumulative annual operational leakage"` → `"over £1M in cumulative operational leakage identified across engagements"`
- **Line 119** (structured data FAQ): `"over £1.5M in cumulative operational leakage"` → `"over £1M in cumulative operational leakage"`

### 3. `src/pages/Index.tsx`
- **Line 17** (SEO description): `"£1.5M+"` → `"£1M+"`

### No change needed
- `src/components/Principal.tsx` — already has context per user instructions.

