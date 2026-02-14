const engagements = [
  {
    title: "Diagnostic",
    scope: "Fixed scope",
    description: "A structured review of a specific workflow, process, or operational area. You get a clear picture of where time is lost, where errors creep in, and what's worth automating. Typically 2–4 weeks.",
  },
  {
    title: "Pilot",
    scope: "Time-boxed",
    description: "We take one workflow and redesign it end to end — mapping, simplifying, and building working automation. A concrete proof of value before committing further. Typically 4–8 weeks.",
  },
  {
    title: "Scale and rollout",
    scope: "",
    description: "Extending what worked in the pilot across teams, departments, or geographies. Includes change management, documentation, and training.",
  },
  {
    title: "Fractional advisory",
    scope: "Retainer",
    description: "Ongoing operational AI guidance embedded in your leadership rhythm. Strategy, vendor evaluation, governance, and prioritisation without a full-time hire.",
  },
  {
    title: "Build support",
    scope: "",
    description: "When you need specialist development resource — custom tooling, integrations, or data pipelines — we bring trusted developers who understand the operational context.",
  },
];

const EngagementTypes = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">
            Engagement types
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We structure work to match where you are — from initial assessment through to long-term advisory.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {engagements.map((e, i) => (
              <div
                key={i}
                className={`bg-card border border-border rounded-lg p-8 animate-fade-in-up ${
                  i === engagements.length - 1 && engagements.length % 2 !== 0 ? "md:col-span-2 md:max-w-[calc(50%-0.75rem)]" : ""
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">{e.title}</h3>
                  {e.scope && (
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{e.scope}</span>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementTypes;
