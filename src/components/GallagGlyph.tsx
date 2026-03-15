const GallagGlyph = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Gallag Works AI Transformation Glyph - Eliminating human middleware from enterprise operations"
  >
    {/* Top-left bracket */}
    <line x1="0" y1="0.5" x2="10" y2="0.5" stroke="hsl(var(--border))" strokeWidth="1" className="group-hover:stroke-foreground transition-[stroke] duration-300" />
    <line x1="0.5" y1="0" x2="0.5" y2="10" stroke="hsl(var(--border))" strokeWidth="1" className="group-hover:stroke-foreground transition-[stroke] duration-300" />

    {/* Top-right bracket */}
    <line x1="26" y1="0.5" x2="36" y2="0.5" stroke="hsl(var(--border))" strokeWidth="1" className="group-hover:stroke-foreground transition-[stroke] duration-300" />
    <line x1="35.5" y1="0" x2="35.5" y2="10" stroke="hsl(var(--border))" strokeWidth="1" className="group-hover:stroke-foreground transition-[stroke] duration-300" />

    {/* Bottom-left bracket */}
    <line x1="0" y1="35.5" x2="10" y2="35.5" stroke="hsl(var(--border))" strokeWidth="1" className="group-hover:stroke-foreground transition-[stroke] duration-300" />
    <line x1="0.5" y1="26" x2="0.5" y2="36" stroke="hsl(var(--border))" strokeWidth="1" className="group-hover:stroke-foreground transition-[stroke] duration-300" />

    {/* Bottom-right bracket */}
    <line x1="26" y1="35.5" x2="36" y2="35.5" stroke="hsl(var(--border))" strokeWidth="1" className="group-hover:stroke-foreground transition-[stroke] duration-300" />
    <line x1="35.5" y1="26" x2="35.5" y2="36" stroke="hsl(var(--border))" strokeWidth="1" className="group-hover:stroke-foreground transition-[stroke] duration-300" />

    {/* Center core */}
    <rect x="12" y="12" width="12" height="12" fill="hsl(var(--primary))" />
  </svg>
);

export default GallagGlyph;
