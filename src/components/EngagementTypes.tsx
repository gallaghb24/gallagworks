import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const tiers = [
  {
    number: "00",
    title: "AI Readiness Diagnostic",
    sublabel: "5 Minutes | Self-Serve | Free",
    description:
      "Before you invest in transformation, understand where you stand. Our self-serve diagnostic scores your organisation across six dimensions of AI readiness – Data Foundation, Process Maturity, Governance, Skills, Tooling, and Strategic Clarity. You get a full report with detailed recommendations and a prioritised action plan. No cost, no obligation.",
  },
  {
    number: "01",
    title: "Operational Audit & X-Ray",
    sublabel: "2–3 Weeks | Fixed Scope",
    description:
      "A surgical deep dive into the 'as-is' state. I expose the Data Glue – the manual re-keying and spreadsheet handoffs – hiding in plain sight. I identify the 20% of 'Data Glue' causing 80% of your operational friction. You receive a logic schematic of where your margin is leaking.",
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
    <section className="py-16 lg:py-36 bg-slate border-draw" ref={ref}>
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
            Four tiers. One methodology.
          </h2>
          <p
            className={`text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] mb-16 clip-reveal ${isVisible ? "visible" : ""}`}
          >
            We de-risk transformation through a phased, results-first approach. Start with the free AI Readiness Diagnostic to understand where you stand. If the results surface something worth exploring, we move into a fixed-scope Operational X-Ray, then prototype, then scale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiers.map((tier, index) => {
              const card = (
                <div
                  key={tier.number}
                  className={`bg-slate border border-border p-6 md:p-8 clip-reveal-down ${isVisible ? "visible" : ""} ${index === 0 ? "hover:border-primary transition-colors cursor-pointer" : ""}`}
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
              );

              if (index === 0) {
                return (
                  <Link key={tier.number} to="/diagnostic" className="block">
                    {card}
                  </Link>
                );
              }

              return card;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementTypes;
