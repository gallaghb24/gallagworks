

## Update Contact Form Success State

**File:** `src/pages/Contact.tsx` (lines 91-94)

Replace the current single-line success message with a three-part message:

1. `[RECEIVED]` — mono uppercase header (same style as current)
2. Body paragraph: "Thank you. I will review your submission and respond within 24 hours with initial thoughts on how I can help."
3. Follow-up paragraph with email link: "If you need to add anything in the meantime, email hello@gallag.works directly."

The outer `<div>` gets `space-y-4` added. The two new body paragraphs use `text-foreground/70 leading-relaxed font-light`. The email link uses `text-primary hover:text-primary/80 transition-colors` with `mailto:` href.

