import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We map how work actually flows. Not the org chart version – the real one, with the workarounds and the spreadsheets.",
  },
  {
    number: "02",
    title: "Redesign",
    description:
      "We simplify before we automate. Remove duplication, clarify ownership, fix the data. Technology comes after the thinking.",
  },
  {
    number: "03",
    title: "Build & embed",
    description:
      "We deliver working automation with adoption planning and governance baked in. Not strategy decks that gather dust.",
  },
];

const HowWeWork = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-28 border-t border-border" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-4 block scroll-fade-in ${
              isVisible ? "visible" : ""
            }`}
          >
            [METHOD]
          </span>
          <h2
            className={`font-display text-3xl md:text-4xl font-bold text-foreground mb-12 scroll-fade-in ${
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
                    {/* Desktop horizontal line */}
                    <div className="hidden md:block absolute top-1/2 -right-[1px] w-8 h-px bg-primary z-10" style={{ right: "-16px" }} />
                    {/* Mobile vertical line */}
                    <div className="md:hidden absolute bottom-0 left-8 w-px h-8 bg-primary translate-y-full z-10" />
                  </>
                )}

                <div
                  className={`border border-border p-8 ${
                    i < steps.length - 1 ? "mb-8 md:mb-0 md:mr-8" : ""
                  }`}
                >
                  <span className="font-mono text-2xl font-bold text-primary block mb-3">
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
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
