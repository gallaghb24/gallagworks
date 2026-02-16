

# Hero Background Image Replacement

Replace the existing SVG diagram with the uploaded workflow automation image, positioned as a full-bleed background element that extends behind the navigation and blends into the dark background.

---

## What Changes

**1. Copy image to project assets**
- Copy `user-uploads://Gemini_Generated_Image_2jfjlt2jfjlt2jfj.png` to `src/assets/hero-bg.png`

**2. Restructure `src/pages/Index.tsx`**
- Move the hero background image out of `HeroSection` and into `Index.tsx` as an absolutely positioned element that sits behind both the Navigation and HeroSection
- The image will be right-aligned, full height of the viewport, and extend from the top of the page (behind the nav) downward
- A gradient overlay (left-to-right, from the dark background colour to transparent) ensures all left-side copy remains fully readable

**3. Simplify `src/components/HeroSection.tsx`**
- Remove the entire right column (the SVG diagram, lines 40-70)
- Keep the left column copy and CTA but constrain it to roughly half the width so the image is visible on the right
- The section no longer needs the 12-column grid split; the left content simply sits over the background

## Layout Structure

```text
+---------------------------------------------------------------+
|  Navigation (z-50, transparent bg)                             |
|---------------------------------------------------------------|
|                                                                |
|  [Hero Copy]              |        [Background Image]          |
|  H1, subhead, CTA         |   right-aligned, object-right     |
|  (relative, z-10)         |   with left gradient fade          |
|                            |   (absolute, top-0, right-0)      |
|                                                                |
+---------------------------------------------------------------+
```

## Technical Details

- **Image container**: `absolute top-0 right-0 h-full w-[60%] lg:w-[55%]` on a wrapper div in `Index.tsx`, placed before Navigation so it renders behind everything
- **Gradient overlay**: A `div` with `absolute inset-0` and a CSS gradient `bg-gradient-to-r from-background via-background/80 to-transparent` layered on top of the image to blend the left edge into the charcoal background
- **Image element**: `object-cover object-right h-full w-full` to keep it right-aligned and cropped naturally
- **Z-indexing**: Image wrapper at `z-0`, hero content at `z-10`, nav stays at `z-50`
- **Mobile**: Image hidden on small screens (`hidden lg:block`) since the copy needs full width on mobile
- **Hero section**: Remove the grid layout and SVG; the left content becomes `max-w-2xl` positioned with `relative z-10`

## Files Modified

| File | Change |
|------|--------|
| `src/assets/hero-bg.png` | New file (copied from upload) |
| `src/pages/Index.tsx` | Add absolute-positioned image + gradient wrapper behind nav and hero |
| `src/components/HeroSection.tsx` | Remove SVG right column; simplify to single-column left-aligned content |

