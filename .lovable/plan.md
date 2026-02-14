
# Tidying up the Services / How We Work naming

## The Problem
There's a naming mismatch across the site:
- Nav link says **"Services"**
- Home page has two sections: **"What we do"** and **"How we work"**
- The Services page headline says **"How we work"**
- The CTA button says **"See how we work"** but links to `/services`

It all refers to the same page but the labels don't align, making it feel disjointed.

## The Fix

**1. Move the button under "What we do" (ServicesSummary) and change its text to "Learn more about our services"**

This makes sense because:
- It links to `/services`, so calling it a services link is natural
- "What we do" is the summary — "want to know more? go to the full page" is a clear flow
- "How we work" on the home page is a standalone teaser that doesn't need its own link

**2. Rename the Services page headline from "How we work" to "Our services"**

This aligns the page title with:
- The nav label ("Services")
- The button text referencing services

The page subtitle already works: *"Every engagement starts with understanding..."*

**3. Keep the "How we work" section on the Services page as-is**

It still appears as a section within the services page (with its own "METHOD / How we work" heading), which is fine — it's detail within the services context.

## Summary of changes

| Location | Current | Proposed |
|---|---|---|
| Home - button location | Under "How we work" | Under "What we do" |
| Home - button text | "See how we work" | "Explore our services" |
| Services page headline | "How we work" | "Our services" |
| Nav link | "Services" (unchanged) | "Services" (unchanged) |
| Home section headings | "What we do" / "How we work" (unchanged) | Same (unchanged) |

## Technical details

- **`src/components/ServicesSummary.tsx`**: Add the outline button (with Link, ArrowRight, Button imports) below the cards grid, text "Explore our services", linking to `/services`
- **`src/components/HowWeWork.tsx`**: Remove the `showLink` prop and the button entirely, clean up unused imports (Button, Link, ArrowRight)
- **`src/pages/Services.tsx`**: Change the h1 from "How we work" to "Our services"; remove the `showLink={false}` prop from HowWeWork
- **`src/pages/Index.tsx`**: No changes needed (HowWeWork will no longer accept/need showLink)
