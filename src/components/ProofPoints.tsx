const points = [
  "Workflow redesign across operations, finance, marketing, and client delivery.",
  "Automation deployed into day-to-day use — not left in a slide deck.",
  "Exceptions surfaced to humans, routine work handled by systems.",
  "Capacity released for the work that requires human judgement.",
];

const ProofPoints = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((point, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p className="text-foreground font-medium leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofPoints;
