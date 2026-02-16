import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tiers = [
  {
    number: "01",
    title: "Operational Audit & X-Ray",
    sublabel: "2–3 Weeks | Fixed Scope",
    description:
      "A surgical deep dive into the 'as-is' state. We expose the Data Glue – the manual re-keying and spreadsheet handoffs – hiding in plain sight. We identify the 20% of 'Data Glue' causing 80% of your operational friction. You receive a logic schematic of where your margin is leaking.",
  },
  {
    number: "02",
    title: "Structural Prototype",
    sublabel: "4–8 Weeks | Proof of Value",
    description:
      "We re-engineer one high-friction workflow end-to-end via engineered Decision Inboxes – AI aggregates the context, but your experts retain the final sign-off. We don't just 'test' AI; we build working infrastructure that proves the ROI and protects the P&L before you commit to scaling.",
  },
  {
    number: "03",
    title: "Enterprise Integration",
    sublabel: "Retainer or Phase-Based",
    description:
      "Transformation at scale. We focus on Governance and Exception Engineering – human-in-the-loop safety rails that ensure your team stays in control. Combined with champion-led adoption, the system actually sticks across teams and geographies.",
  },
];

const EngagementTypes = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-36 bg-[#1A1C1E] border-draw" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${isVisible ? "visible" : ""}`}
          >
            [ENGAGEMENT TIERS]
          </span>
          <h2
            className={`text-3xl md:text-4xl font-extrabold text-foreground mb-6 clip-reveal ${isVisible ? "visible" : ""}`}
          >
            Three tiers. One methodology.
          </h2>
          <p
            className={`text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] mb-16 clip-reveal ${isVisible ? "visible" : ""}`}
          >
            We de-risk transformation through a phased, results-first approach. By starting with a sharp, fixed-scope diagnostic, we identify high-value targets for automation before committing to long-term builds. This ensures every engineered hour delivers a measurable return on margin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={tier.number}
                className={`bg-[#1A1C1E] border border-[#2F3133] p-8 clip-reveal-down ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block">
                  [{tier.number}]
                </span>
                <h3 className="text-xl font-extrabold text-foreground mb-2">
                  {tier.title}
                </h3>
                <p className="font-mono text-xs text-primary/80 uppercase tracking-wider mb-6">
                  {tier.sublabel}
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementTypes;
