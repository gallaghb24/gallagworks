import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const engagements = [
  {
    id: "01",
    title: "Operational X-Ray",
    duration: "2–3 weeks · Fixed scope",
    description:
      "A Pareto-driven diagnostic that maps every manual touchpoint across your workflows. I quantify the capacity loss and produce a prioritised transformation roadmap with projected ROI. This is the starting point for every engagement.",
    deliverables: [
      "Complete workflow mapping with friction quantification",
      "Capacity loss analysis (hours, cost, error rates)",
      "Prioritised transformation roadmap with projected margin recovery",
    ],
  },
  {
    id: "02",
    title: "Workflow Engineering",
    duration: "4–8 weeks · Proof of value",
    description:
      "I re-engineer your highest-friction workflows into production-ready systems. AI handles the predictable majority — the routine data processing, formatting, and routing — while your experts retain governance over the genuine exceptions that require human judgement.",
    deliverables: [
      "Production-ready automated workflows replacing manual processes",
      "Exception routing with human-in-the-loop escalation",
      "Measurable before/after metrics on capacity and throughput",
    ],
  },
  {
    id: "03",
    title: "Build & Deploy",
    duration: "Retainer or phase-based",
    description:
      "Governance and exception management at scale. I embed human-in-the-loop safety rails ensuring system control and champion-led adoption across teams. This is where the transformation moves from proof-of-value to enterprise-wide operation.",
    deliverables: [
      "Enterprise-wide rollout with change management",
      "Exception handling frameworks and audit trails",
      "Champion training and self-service adoption tooling",
    ],
  },
];

const EngagementTypes = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-36 bg-slate" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <span
          className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${isVisible ? "visible" : ""}`}
        >
          [ENGAGEMENT TYPES]
        </span>

        <div className="space-y-6">
          {engagements.map((eng, index) => (
            <div
              key={eng.id}
              className={`border border-border p-8 md:p-10 clip-reveal-down ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                <div>
                  <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-2">
                    [{eng.id}]
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {eng.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground/70 uppercase tracking-widest shrink-0">
                  {eng.duration}
                </span>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mb-6 max-w-[720px]">
                {eng.description}
              </p>
              <div>
                <span className="font-mono text-xs text-primary/80 tracking-widest block mb-3">
                  [DELIVERABLES]
                </span>
                <ul className="space-y-2">
                  {eng.deliverables.map((d, i) => (
                    <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-primary/60 mt-0.5 flex-shrink-0">→</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementTypes;
