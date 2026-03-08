

## Add Diagnostic Entry to Insights Index

Single file edit: `src/pages/Insights.tsx`

1. **Add new entry** at the top of the `insights` array with ref `GW-TOOL-001`, type `TOOL`, status `LIVE`, slug `diagnostic`
2. **Update Link `to` prop** — conditionally use `/diagnostic` for the TOOL type entry instead of `/insights/${item.slug}`
3. **Status colour** — conditionally apply `text-green-500` instead of `text-primary` when `item.type === "TOOL"` on the status span

