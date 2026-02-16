import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const metrics = [
  {
    label: "Reclaimed Capacity",
    detail: "Hours returned to margin-positive growth.",
  },
  {
    label: "Protected Margins",
    detail: "Reducing avoidable rework and errors.",
  },
  {
    label: "High-Volume Adoption",
    detail: "Building systems humans actually want to use.",
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
            className={`text-3xl md:text-4xl font-bold text-foreground mb-16 scroll-fade-in ${isVisible ? "visible" : ""}`}
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
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {item.label}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
