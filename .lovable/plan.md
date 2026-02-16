
# Principal-Level Polish: FAQ & Engagement Tightening

## Overview
Replace FAQ copy with enterprise-governance language, strip the accordion UI for a clean separator-based list, update Engagement copy and timeline, and remove all "techy" tool mentions.

---

## 1. FAQ Section (src/components/FAQSection.tsx)

**UI Change:** Remove the Accordion component entirely. Replace with a simple list of question/answer pairs separated by `1px` Graphite (`#2F3133`) horizontal lines. Each question is a `font-extrabold` left-aligned heading; each answer sits directly below as `font-light` body text. No expand/collapse, no chevrons, no rounded corners -- just clean vertical flow.

**Copy Replacement (all 6 FAQs):**

1. **How do you handle data security?**
"Data integrity and security are foundational to operational engineering. I bring enterprise-level governance experience to every project. We work within your existing InfoSec frameworks, follow least-privilege access protocols, and execute under NDA as standard. We don't 'move' your data; we engineer the systems that handle it safely."

2. **What tools do you use?**
"We are tool-agnostic. My goal is to maximise your existing stack (M365, Google Workspace, specialised ERPs/CRMs) before suggesting new infrastructure. When we do build, we use enterprise-grade AI and orchestration tools that your team can actually own and maintain. We don't build black boxes."

3. **Do you build software?**
"We build Operational Infrastructure. Sometimes that looks like a custom dashboard or a lightweight internal tool; other times it's a series of automated 'Decision Inboxes' connecting your existing apps. We start with the workflow architecture -- software is simply the delivery mechanism for that logic."

4. **What do you need from us?**
"Executive sponsorship and operational transparency. I need access to the people in the trenches -- the ones currently acting as the 'Data Glue' -- and a clear owner for commercial decisions. Transformation fails in a vacuum; it succeeds when the leaders are ready to kill redundant processes."

5. **How long does an engagement take?**
"A Diagnostic (The X-Ray) is a sharp, 2-week engagement. A Build phase typically runs between 6 and 12 weeks. While I only lead 3-4 full-scale transformations per year to ensure direct Principal involvement, the initial X-Ray is the fastest way to determine if we are a fit."

6. **What industries do you work with?**
"I specialise in knowledge-intensive environments where high-volume handoffs and data friction create avoidable costs. My background is rooted in the high-velocity worlds of multichannel retail, marketing operations, and commercial delivery. If your team spends more time 'managing the process' than 'doing the work,' the methodology applies."

**Technical:** Remove Accordion imports entirely. Render as a simple `div` list with `border-b border-[#2F3133]` separators and `py-6` padding per item.

---

## 2. Engagement Types (src/components/EngagementTypes.tsx)

**Timeline Update:** Change Tier 1 sublabel from "2-4 Weeks | Fixed Scope" to "2-3 Weeks | Fixed Scope" to encourage low-risk entry.

**Intro Copy Update:** Replace the current sub-paragraph with:
"We don't start with 6-month roadmaps. We start with a 2-week Operational X-Ray. This is a fixed-price, high-impact audit designed to expose the 'Data Glue' and quantify the margin recovery opportunity. From there, we move into implementation sprints -- typically 4 to 8 weeks -- depending on the complexity of the architecture."

---

## Files Modified

1. **src/components/FAQSection.tsx** -- Remove accordion, replace with separator-based list, swap all 6 FAQ answers
2. **src/components/EngagementTypes.tsx** -- Update Tier 1 timeline to "2-3 Weeks", replace intro paragraph copy
