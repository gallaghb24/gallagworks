

## Consolidate Homepage CTAs

The homepage has two CTA sections: the `CTABand` component above the footer, and a CTA block built into the `Footer` component itself. The user wants to keep one CTA with the best of both.

### Plan

**Single change in `src/pages/Index.tsx` (lines 28-32):**
Update the CTABand headline to use "Stop the leakage. Start the Engineering." (from the footer CTA) while keeping the current layout with both buttons (Request a Consultation + Take the AI Readiness Diagnostic).

```
headline={<>Stop the leakage. <span className="text-primary">Start the Engineering.</span></>}
```

The subcopy and secondaryCTA stay as-is. The footer's built-in CTA remains unchanged (it appears on every page as part of the footer pattern).

