const steps = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Map how work actually flows",
    description: "We immerse ourselves in your operations, documenting every process, handoff, and bottleneck to build a complete picture of how work really gets done.",
  },
  {
    number: "02",
    title: "Simplify",
    subtitle: "Remove duplication, clarify ownership",
    description: "We identify and eliminate redundant processes, clarify roles and responsibilities, and streamline workflows before introducing any technology.",
  },
  {
    number: "03",
    title: "Evolve",
    subtitle: "Embed intelligent automation and AI",
    description: "We design and implement bespoke solutions that automate routine work and augment human judgment, releasing capacity for high-value activities.",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-6">
            Our approach
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A proven methodology that puts understanding before technology, 
            ensuring solutions that truly fit your organisation.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-12 h-0.5 bg-border -translate-y-1/2" />
              )}
              
              <div className="space-y-4">
                <span className="inline-block font-display text-5xl text-primary/30">
                  {step.number}
                </span>
                <h3 className="font-display text-2xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="text-primary font-medium">
                  {step.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
