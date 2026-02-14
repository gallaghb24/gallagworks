const steps = [
  {
    number: "01",
    title: "Understand",
    description: "We map how work actually flows. Not the org chart version — the real one, with the workarounds and the spreadsheets.",
  },
  {
    number: "02",
    title: "Redesign",
    description: "We simplify before we automate. Remove duplication, clarify ownership, fix the data. Technology comes after the thinking.",
  },
  {
    number: "03",
    title: "Build and embed",
    description: "We implement working automation and stay until it's adopted. No handover documents that gather dust.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
            How we work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-primary font-display text-sm font-semibold tracking-wide">{step.number}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
