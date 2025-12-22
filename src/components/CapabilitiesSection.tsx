import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    title: "Workflow and systems design",
    description: "End-to-end process architecture that aligns technology with how your teams actually work.",
  },
  {
    title: "Intelligent automation and AI-powered tooling",
    description: "Bespoke solutions that automate repetitive tasks and augment human decision-making.",
  },
  {
    title: "Bespoke solution development",
    description: "Custom-built applications and integrations tailored to your unique operational needs.",
  },
  {
    title: "Operational redesign and change enablement",
    description: "Comprehensive transformation programmes that embed new ways of working.",
  },
  {
    title: "Efficiency measurement and optimisation",
    description: "Data-driven approaches to identify, measure and continuously improve operational performance.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-6">
            What we deliver
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive capabilities designed to transform how your organisation works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-display text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                {capability.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {capability.description}
              </p>
              <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
