import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    title: "X-Ray",
    description:
      "Run the Operational X-Ray. Map every input, handoff, decision point, and failure mode. Find the Data Glue.",
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "Fix the Data Glue first. Eliminate re-keying, consolidate spreadsheet handoffs, clarify ownership. Build Decision Inboxes that surface only what needs human judgement.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Ship working automation with adoption planning and governance baked in. Monitor, iterate, and hand over.",
  },
];

const HowWeWork = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-36 border-t border-[#2F3133] blueprint-grid" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-4 block scroll-fade-in ${
              isVisible ? "visible" : ""
            }`}
          >
            [BLUEPRINT]
          </span>
          <h2
            className={`font-display text-3xl md:text-4xl font-extrabold text-foreground mb-12 scroll-fade-in ${
              isVisible ? "visible" : ""
            }`}
          >
            How we work
          </h2>

          {/* Horizontal flow on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative scroll-fade-in ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${(i + 1) * 0.12}s` }}
              >
                {/* Connecting line (between boxes) */}
                {i < steps.length - 1 && (
                  <>
                    {/* Desktop horizontal solid line */}
                    <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 items-center z-10" style={{ right: "-16px", width: "32px" }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <div className="flex-1 border-t border-[#2F3133]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    </div>
                    {/* Mobile vertical solid line */}
                    <div className="md:hidden flex flex-col items-center absolute bottom-0 left-8 translate-y-full z-10" style={{ height: "32px" }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <div className="flex-1 border-l border-[#2F3133]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    </div>
                  </>
                )}

                <div
                  className={`border border-[#2F3133] p-8 ${
                    i < steps.length - 1 ? "mb-8 md:mb-0 md:mr-8" : ""
                  }`}
                >
                  <span className="font-mono text-2xl font-bold text-primary block mb-3">
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
