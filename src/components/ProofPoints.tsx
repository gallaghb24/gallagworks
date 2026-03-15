import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const ProofPoints = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stat1 = useCountUp({ target: 1200, suffix: "+", formatValue: (n) => n.toLocaleString() });
  const stat2 = useCountUp({ target: 98, suffix: "%" });
  const stat3 = useCountUp({ target: 50, suffix: "%+" });

  const points = [
    {
      counter: stat1,
      label: "Hours Reclaimed Annually",
      detail: "Capacity recovered from manual Human Middleware across enterprise engagements.",
    },
    {
      counter: stat2,
      label: "Manual Effort Reduction",
      detail: "Enterprise reporting pipelines reduced from 30 hours to 10 minutes.",
    },
    {
      counter: stat3,
      label: "Lead Time Reduction",
      detail: "Brief-to-production turnaround times slashed through automated ingestion.",
    },
  ];

  return (
    <section className="py-16 lg:py-36 bg-slate" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <span
          className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${isVisible ? "visible" : ""}`}
        >
          [PROOF POINTS]
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <div
              key={point.label}
              className={`bg-charcoal-mid border border-white/[0.08] rounded-xl p-8 transition-colors duration-300 hover:border-primary/30 clip-reveal-down ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <p
                ref={point.counter.ref}
                className="font-mono text-3xl md:text-4xl font-extrabold text-primary mb-3"
              >
                {point.counter.display}
              </p>
              <p className="font-display text-lg font-extrabold text-foreground mb-3 tracking-tight">
                {point.label}
              </p>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                {point.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofPoints;
