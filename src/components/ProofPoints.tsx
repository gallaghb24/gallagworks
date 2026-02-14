import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const points = [
  "Workflow redesign across operations, finance, marketing, and client delivery.",
  "Automation deployed into day-to-day use – not left in a slide deck.",
  "Exceptions surfaced to humans, routine work handled by systems.",
  "Capacity released for the work that requires human judgement.",
];

const ProofPoints = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-28" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className={`block text-primary text-xs font-semibold uppercase tracking-[0.15em] text-center mb-4 scroll-fade-in ${isVisible ? "visible" : ""}`}>
            CREDIBILITY
          </span>
          <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center scroll-fade-in ${isVisible ? "visible" : ""}`}>
            How this helps in practice
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((point, i) => (
              <div
                key={i}
                className={`border border-border border-l-4 border-l-primary rounded-lg p-6 card-hover scroll-fade-in ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <p className="text-foreground font-medium leading-relaxed text-base md:text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofPoints;
