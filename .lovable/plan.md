

## Replace Brandmark with "Surgical Viewfinder" Glyph

### Current State
The existing `GallagGlyph` is a simple square with a 1px border and an orange bottom-right quadrant. It needs to be replaced with a more refined "architectural viewfinder" design.

### New Design Specification

The glyph uses a 36x36 SVG viewBox with a 3x3 grid logic (each cell = 12px):

```text
+--          --+
|              |
               
               
|              |
+--          --+
      ____
     |    |
     | FF |  <-- Orange core (center cell)
     |____|
```

- **Four corner brackets**: Each is an "L" shape made of two 1px lines (one horizontal, one vertical), ~10px long, in Graphite (#2F3133). They define the corners of the square without connecting.
- **Center core**: A solid 12x12 Safety Orange (#FF5F1F) square placed at position (12, 12) -- exactly 1/9th of the 36x36 area.
- **No border-radius anywhere**.

### Changes

**1. Update `src/components/GallagGlyph.tsx`**
- Replace the current bordered-square SVG with four corner bracket lines and a centered orange square.
- Add a CSS transition on the bracket strokes so they brighten to white (#F5F5F5) on hover via a `group-hover` pattern.
- The orange core remains static on hover.

**2. Update `src/components/Navigation.tsx`**
- Add the `group` class to the logo `Link` element so the hover state propagates to the glyph's bracket strokes.

**3. Update `public/favicon.svg`**
- Replace with the same viewfinder design: four corner brackets + centered orange square. The transparent background ensures the orange "ping" stands out in browser tabs.

**4. Update `index.html`**
- No change needed -- already references `/favicon.svg`.

### Technical Details

SVG structure (36x36 viewBox):
- Top-left bracket: horizontal line (0,0.5)-(10,0.5), vertical line (0.5,0)-(0.5,10)
- Top-right bracket: horizontal line (26,0.5)-(36,0.5), vertical line (35.5,0)-(35.5,10)
- Bottom-left bracket: horizontal line (0,35.5)-(10,35.5), vertical line (0.5,26)-(0.5,36)
- Bottom-right bracket: horizontal line (26,35.5)-(36,35.5), vertical line (35.5,26)-(35.5,36)
- Center square: rect at (12, 12), width=12, height=12, fill=#FF5F1F

Hover effect uses Tailwind's `group-hover` to transition bracket stroke from `#2F3133` to `#F5F5F5` over 300ms. Implemented via inline styles with CSS `transition` property on each line element, and a parent `group` class on the Navigation link.

