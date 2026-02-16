import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Philosophy = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 bg-slate" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block scroll-fade-in ${isVisible ? "visible" : ""}`}
          >
            [PHILOSOPHY]
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-tight scroll-fade-in ${isVisible ? "visible" : ""}`}
          >
            Automating a broken process just creates a faster mess.
          </h2>
          <p
            className={`text-lg text-muted-foreground leading-relaxed max-w-[600px] scroll-fade-in ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            You cannot scale a business on brute-force human effort, but you also can't fix bad logic with shiny technology. At Gallag Works, we start with the operational reality. We understand margin, SLAs, and adoption. We simplify the workflow first, kill the redundant steps, and build the automation second.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
