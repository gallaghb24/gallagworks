

## Broaden Positioning: Remove Sector-Specific Language

### Changes

**1. `src/pages/Index.tsx` (line 17)** — SEO description  
→ "Principal-led operational engineering for high-volume, handoff-heavy operations. Eradicating 'Data Glue' and manual friction to recover enterprise margins. Proven results: 1,200+ hours reclaimed, up to 98% manual effort reduction."

**2. `src/pages/About.tsx` (line 35)** — SEO description  
→ "15+ years directing enterprise delivery across retail, financial services, and professional services. Principal-led operational transformation as operational lead within a 2,100-person agency."

**3. `src/pages/About.tsx` (line 54)** — Hero paragraph  
Replace "I led operational transformation for Tier-1 retailers and FTSE 100 entities, managing £15M+ annual multichannel contracts."  
→ "I led operational transformation across retail, financial services, and professional services as operational lead within a 2,100-person content production agency, managing £15M+ annual contracts."

**4. `src/pages/About.tsx` (line 130)** — Experience paragraph  
Replace current text with: "15 years directing enterprise client delivery and managing £15M+ contracts as operational lead within a 2,100-person content production agency taught a hard truth: efficiency protects the P&L. Managing high-stakes, 30+ person teams required a ruthless focus on operations. Gallag Works was founded to bring that exact efficiency-first methodology to leaders across industries who are drowning in manual workarounds and ready to build scalable systems."

**5. `src/components/StructuredData.tsx`:**
- Line 48: professionalService.description → "Principal-led operational engineering for high-volume, handoff-heavy operations. Eradicating 'Data Glue' and manual friction to recover enterprise margins."
- Line 65: founder.description → replace "Tier-1 retailers and FTSE 100 entities" with "enterprise clients across retail, financial services, and professional services"
- Line 70: founder.knowsAbout → replace "Multichannel Retail Operations" with "Enterprise Operations"
- Line 85: personSchema.description → replace "multichannel contracts for Tier-1 retailers and FTSE 100 entities" with "contracts across retail, financial services, and professional services"
- Line 91: personSchema.knowsAbout → replace "Multichannel Retail Operations" with "Enterprise Operations"

**No changes** to Contact.tsx or Services.tsx (already problem-led).

