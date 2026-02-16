import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Philosophy = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 bg-slate" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${isVisible ? "visible" : ""}`}
          >
            [PHILOSOPHY]
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-tight clip-reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.08s" }}
          >
            Automating a broken process just creates a faster mess.
          </h2>
          <p
            className={`text-lg text-muted-foreground leading-relaxed max-w-[600px] clip-reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.16s" }}
          >
            You cannot scale a business on brute-force human effort, but you also can't fix bad logic with shiny technology. At Gallag Works, we start with the operational reality. We understand margin, SLAs, and adoption. We simplify the workflow first, kill the redundant steps, and build the automation second.
          </p>
          <p
            className={`text-lg text-primary font-bold leading-relaxed max-w-[600px] mt-8 clip-reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.24s" }}
          >
            Everyone is buying AI tools. No one is engineering the logic to make them work. We do the latter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
