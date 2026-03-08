

## Update Insights Page: Subtext & Date Column

### Changes to `src/pages/Insights.tsx`

**1. Update subtext paragraph (line 102)**
Replace current text with:
> "Each entry below is a field-documented engagement led by the Principal. The GW-LOG series covers the technical methodology, friction diagnosis, and engineering outcomes from real operational transformations across retail, financial services, professional services, and media."

**2. Add `date` field to insights array**
- GW-TOOL-001: no date (tools don't need one)
- GW-LOG-101: `"MAR 2025"`
- GW-LOG-201: `"MAY 2025"`
- GW-LOG-202: `"JUL 2025"`
- GW-LOG-203: `"SEP 2025"`
- GW-LOG-204: `"NOV 2025"`
- GW-LOG-205: `"JAN 2026"`
- GW-LOG-206: `"MAR 2026"`

**3. Update table layout**
- Header row: Add `[DATE]` column between `[PRIMARY METRIC]` and `[STATUS]`
- Grid columns: `'12% 38% 24% 14% 12%'` (accommodate 5 columns)
- Data rows: Display `item.date` with `font-mono text-xs text-muted-foreground`, show "—" for entries without dates

