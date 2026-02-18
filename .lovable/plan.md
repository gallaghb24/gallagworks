

# Canonicalize All URLs to `https://www.gallag.works`

## Problem

Google Search Console is flagging "Page with redirect" errors because:
- **Sitemap** uses `https://gallag.works/` (no `www.`) -- GSC crawls these, gets redirected to the `www.` version, and flags them.
- **Canonical tags** (SEOHead) point to `https://gallagworks.lovable.app` -- completely wrong domain.
- **Structured data** (JSON-LD) also references `https://gallagworks.lovable.app`.

All three must consistently use `https://www.gallag.works`.

---

## Changes

### 1. `public/sitemap.xml` -- Prefix all URLs with `www.`
Replace every `https://gallag.works/` with `https://www.gallag.works/` across all 15 URL entries.

### 2. `src/components/SEOHead.tsx` -- Fix canonical domain
Change `siteUrl` from `"https://gallagworks.lovable.app"` to `"https://www.gallag.works"`. This fixes canonical tags, OG URLs, and Twitter image URLs on every page.

### 3. `src/components/StructuredData.tsx` -- Fix JSON-LD URLs
Replace all 6 occurrences of `https://gallagworks.lovable.app` with `https://www.gallag.works` (in ProfessionalService url/logo/image, Person worksFor url, and CreativeWork URLs).

### 4. `public/robots.txt` -- Fix sitemap reference
Change `Sitemap: https://gallag.works/sitemap.xml` to `Sitemap: https://www.gallag.works/sitemap.xml`.

---

## Technical Details

### Files to modify:
- `public/sitemap.xml` -- find/replace `https://gallag.works/` with `https://www.gallag.works/` (15 URLs)
- `src/components/SEOHead.tsx` -- line 14: change `siteUrl` constant
- `src/components/StructuredData.tsx` -- lines 49-51, 97, 106, 110: replace lovable.app domain
- `public/robots.txt` -- line 16: update sitemap URL

### Not changing (email-only references):
- `hello@gallag.works` email addresses in Footer, Contact, Privacy, and edge function remain as-is (email addresses don't use `www.`)

