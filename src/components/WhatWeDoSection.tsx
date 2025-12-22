import { Map, Shuffle, Cpu, Sparkles } from "lucide-react";

const services = [
  {
    icon: Map,
    title: "Map and simplify complex operational flows",
    description: "We untangle the complexity of how work actually gets done, revealing inefficiencies and opportunities for improvement.",
  },
  {
    icon: Shuffle,
    title: "Re-engineer workflows to eliminate low-value effort",
    description: "We redesign processes to remove duplication, clarify ownership, and streamline operations.",
  },
  {
    icon: Cpu,
    title: "Build intelligent automation and AI-enabled tools",
    description: "We create bespoke solutions that automate routine tasks and augment human decision-making.",
  },
  {
    icon: Sparkles,
    title: "Redeploy time into creativity, strategy and client value",
    description: "We help you reclaim capacity for the work that truly differentiates your organisation.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-6">
            Intelligent transformation, not just automation.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We take a holistic approach to operational improvement, combining deep process understanding 
            with cutting-edge technology to deliver lasting change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-7 w-7" />
                </div>
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
