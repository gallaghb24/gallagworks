

## Add LinkedIn Links to About Page and Principal Section

Two small additions — both are static `<a>` tags with exact markup provided by the user.

### Changes

**1. `src/pages/About.tsx`** — Insert LinkedIn link after the hero paragraph (after line ~62, the `</p>` with animationDelay 0.1s), before the closing `</div>`:

```tsx
<a
  href="https://www.linkedin.com/in/bengallagher/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors mt-6 opacity-0 animate-fade-in-up"
  style={{ animationDelay: "0.2s" }}
>
  Connect on LinkedIn →
</a>
```

**2. `src/components/Principal.tsx`** — Insert LinkedIn link after the "Meet the Principal" `<Link>` (after line ~34):

```tsx
<a
  href="https://www.linkedin.com/in/bengallagher/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors mt-3"
>
  LinkedIn →
</a>
```

No dependencies, no structural changes — just two link insertions.

