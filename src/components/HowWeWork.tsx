const steps = [
  {
    id: "01",
    title: "Map",
    description:
      "Document every manual touchpoint, handoff, and reconciliation loop across the workflow.",
  },
  {
    id: "02",
    title: "Measure",
    description:
      "Quantify time, cost, and error rates at each friction point.",
  },
  {
    id: "03",
    title: "Architect",
    description:
      "Design the operational infrastructure to eliminate Human Middleware.",
  },
  {
    id: "04",
    title: "Build",
    description:
      "Engineer production-ready systems, not strategy decks.",
  },
  {
    id: "05",
    title: "Govern",
    description:
      "Embed exception handling, audit trails, and human oversight into every automated workflow.",
  },
];

const methodologyNote =
  "Some engagements follow this full sequence. Others start with a specific agent requirement — a known problem that needs an intelligent, autonomous solution. The methodology adapts to where you are.";

const HowWeWork = () => {
  return (
    <section className="py-16 lg:py-36">
      <div className="container mx-auto px-6 lg:px-12">
        <span className="font-mono text-xs text-primary uppercase tracking-widest mb-6 block">
          [HOW I WORK]
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">
          From diagnosis to deployed system.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-charcoal-mid border border-white/[0.08] rounded-xl p-8 transition-colors duration-300 hover:border-primary/30"
            >
              <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-3">
                [{step.id}]
              </span>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
