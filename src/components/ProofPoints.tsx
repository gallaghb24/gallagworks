import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const ProofPoints = () => {
  const { ref, isVisible } = useScrollAnimation();

  const counter1 = useCountUp({ target: 150, prefix: "£", suffix: "k+" });
  const counter2 = useCountUp({ target: 98, suffix: "%" });
  const counter3 = useCountUp({ target: 50, suffix: "%" });

  const metrics = [
    {
      counter: counter1,
      label: "Quantified Margin Recovery",
      detail:
        "Identifying and engineering out £150k+ in annual operational leakage per account by eradicating avoidable rework and manual data friction.",
    },
    {
      counter: counter2,
      label: "Manual Effort Reduction",
      detail:
        "Up to 98% reduction in repetitive data entry across core workflows – eradicating the 'Data Glue' and reallocating thousands of hours toward strategic growth.",
    },
    {
      counter: counter3,
      label: "Accelerated Speed-to-Market",
      detail:
        "Slashing turnaround times by 50%+ by engineering validation and logic checks upstream, removing late-stage bottlenecks in high-stakes environments.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 border-draw" ref={ref}>
      <div className={`container mx-auto px-6 lg:px-12 ${isVisible ? "" : ""}`}>
        <div className="max-w-5xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${isVisible ? "visible" : ""}`}
          >
            [OUTCOMES]
          </span>
          <h2
            className={`text-3xl md:text-4xl font-extrabold text-foreground mb-16 clip-reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.08s" }}
          >
            What changes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {metrics.map((item, i) => (
              <div
                key={i}
                className={`clip-reveal-down ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
              >
                <p
                  ref={item.counter.ref}
                  className="font-mono text-4xl md:text-5xl font-extrabold text-primary mb-3"
                >
                  {item.counter.display}
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
