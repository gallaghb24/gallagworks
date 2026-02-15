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
  return (
    <div className="border border-border">
      {/* Header */}
      <div className="border-b border-border px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <span className="font-mono text-xs text-primary font-semibold tracking-widest">
            {projectId}
          </span>
          <h3 className="font-display text-xl font-bold text-foreground mt-1">{title}</h3>
        </div>
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
          {sector}
        </span>
      </div>

      {/* Friction / Engineering two-column */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 border-b md:border-b-0 md:border-r border-border bg-primary/5">
          <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-4">
            [FRICTION]
          </span>
          <ul className="space-y-2">
            {friction.map((item, i) => (
              <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                <span className="text-primary/60 mt-1 flex-shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8">
          <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-4">
            [ENGINEERING]
          </span>
          <ul className="space-y-2">
            {engineering.map((item, i) => (
              <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                <span className="text-primary/60 mt-1 flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Human Layer */}
      <div className="border-t border-border px-8 py-5">
        <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-2">
          [HUMAN LAYER]
        </span>
        <p className="text-muted-foreground text-sm leading-relaxed">{humanLayer}</p>
      </div>

      {/* Result */}
      <div className="border-t border-border px-8 py-5 bg-primary/5">
        <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-2">
          [RESULT]
        </span>
        <p className="text-foreground font-medium leading-relaxed">{result}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
