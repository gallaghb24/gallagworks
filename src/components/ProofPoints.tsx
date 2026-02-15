import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const metrics = [
  {
    metric: "Capacity Released",
    detail: "Routine work handled by systems, freeing teams for judgement-led tasks.",
  },
  {
    metric: "Rework Eliminated",
    detail: "Handoff errors and manual checks removed from core workflows.",
  },
  {
    metric: "Decisions Surfaced",
    detail: "Exceptions and decisions routed to humans, not buried in process.",
  },
  {
    metric: "Adoption Achieved",
    detail: "Automation deployed into day-to-day use – not left in a slide deck.",
  },
];

const ProofPoints = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-28 border-t border-border" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-4 block scroll-fade-in ${
              isVisible ? "visible" : ""
            }`}
          >
            [OUTCOMES]
          </span>
          <h2
            className={`font-display text-3xl md:text-4xl font-bold text-foreground mb-12 scroll-fade-in ${
              isVisible ? "visible" : ""
            }`}
          >
            What changes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((item, i) => (
              <div
                key={i}
                className={`border border-border p-6 scroll-fade-in ${
                  isVisible ? "visible" : ""
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {item.metric}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
