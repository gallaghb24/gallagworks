import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CaseStudyCardProps {
  projectId: string;
  title: string;
  sector: string;
  friction: string[];
  engineering: string[];
  humanLayer: string;
  result: string;
}

const CaseStudyCard = ({ projectId, title, sector, friction, engineering, humanLayer, result }: CaseStudyCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`border border-border transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
      style={{
        borderColor: isVisible ? undefined : "transparent",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out, border-color 0.8s ease-out 0.3s",
      }}
    >
      {/* Hard-stop rule */}
      <div className="border-b border-foreground" />

      {/* Header */}
      <div className="px-10 py-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <span className="font-mono text-sm text-primary font-semibold tracking-widest">
            {projectId}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-[800] text-foreground mt-2">{title}</h3>
        </div>
        <span className="font-mono text-xs text-muted-foreground/60 uppercase tracking-widest pt-1 flex-shrink-0">
          {sector}
        </span>
      </div>

      {/* Friction / Engineering two-column blueprint grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
        <div className="px-10 py-8 md:border-r border-border">
          <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-5">
            [FRICTION]
          </span>
          <ul className="space-y-3">
            {friction.map((item, i) => (
              <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                <span className="text-primary/60 mt-0.5 flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-10 py-8 border-t md:border-t-0 border-border">
          <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-5">
            [ENGINEERING]
          </span>
          <ul className="space-y-3">
            {engineering.map((item, i) => (
              <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                <span className="text-primary/60 mt-0.5 flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Human Layer */}
      <div className="border-t border-border px-10 py-8">
        <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-3">
          [HUMAN LAYER]
        </span>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-[720px]">{humanLayer}</p>
      </div>

      {/* Result — orange-bordered payoff block */}
      <div className="border-t border-primary px-10 py-8" style={{ backgroundColor: "hsl(var(--primary) / 0.05)" }}>
        <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-3">
          [RESULT]
        </span>
        <p className="text-foreground font-semibold text-base leading-relaxed">{result}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
