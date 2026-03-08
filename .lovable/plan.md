

## Add Industry Terms to Glossary

Append 7 new entries to the `glossaryTerms` array in `src/pages/Glossary.tsx`, after the existing 9 proprietary terms. Each entry follows the same `{ id, term, definition }` shape already in use.

### New entries (in order):
1. **Process Automation** — defined through the Operational X-Ray lens
2. **Workflow Optimisation** — systemic redesign vs task-level speed
3. **Operational Efficiency** — end-to-end throughput vs departmental metrics
4. **AI Readiness** — six-dimension assessment framing
5. **Digital Transformation** — Gallag Works' pragmatic redefinition
6. **Robotic Process Automation (RPA)** — process engineering before automation
7. **Human-in-the-Loop** — Decision Inbox as implementation pattern

### Implementation
Single file change: `src/pages/Glossary.tsx`. Insert the 7 objects after the last existing entry (`logic-gates`) in the `glossaryTerms` array. No structural, layout, or component changes needed — the existing `.map()` renders them automatically, including Schema.org `DefinedTerm` structured data.

