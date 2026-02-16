import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const metrics = [
  {
    stat: "£150k+",
    label: "Quantified Margin Recovery",
    detail:
      "Identifying and engineering out £150k+ in annual operational leakage per account by eradicating avoidable rework and manual data friction.",
  },
  {
    stat: "98%",
    label: "Manual Effort Reduction",
    detail:
      "Eradicating the 'Data Glue' from core workflows to cut manual effort by up to 98% on targeted tasks — reallocating thousands of hours toward strategic growth.",
  },
  {
    stat: "50%",
    label: "Accelerated Speed-to-Market",
    detail:
      "Slashing turnaround times by 50%+ by engineering validation and logic checks upstream, removing late-stage bottlenecks in high-stakes environments.",
  },
];

const ProofPoints = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 border-t border-border" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block scroll-fade-in ${isVisible ? "visible" : ""}`}
          >
            [OUTCOMES]
          </span>
          <h2
            className={`text-3xl md:text-4xl font-extrabold text-foreground mb-16 scroll-fade-in ${isVisible ? "visible" : ""}`}
          >
            What changes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {metrics.map((item, i) => (
              <div
                key={i}
                className={`scroll-fade-in ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <p className="font-mono text-4xl md:text-5xl font-extrabold text-primary mb-3">
                  {item.stat}
                </p>
                <h3 className="text-lg font-extrabold text-foreground mb-3">
                  {item.label}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofPoints;
