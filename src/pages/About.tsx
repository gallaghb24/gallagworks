import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import SEOHead from "@/components/SEOHead";

const commaFormat = (n: number) => n.toLocaleString();

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const method = useScrollAnimation();
  const exp = useScrollAnimation();

  const c1 = useCountUp({ target: 20, suffix: " Years" });
  const c2 = useCountUp({ target: 15, prefix: "£", suffix: "m+" });
  const c3 = useCountUp({ target: 4000, suffix: "+", formatValue: commaFormat });
  const c4 = useCountUp({ target: 30, suffix: "+" });

  const stats = [
    { counter: c1, label: "in Operations" },
    { counter: c2, label: "Contract Oversight" },
    { counter: c3, label: "Users Transitioned to New Systems" },
    { counter: c4, label: "Person Team Leadership" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="The Principal"
        description="20 years directing enterprise delivery for Tier-1 retailers and FTSE 100 entities. Principal-led operational transformation managing £15M+ multichannel contracts."
        path="/about"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block opacity-0 animate-fade-in">
                [THE PRINCIPAL]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 opacity-0 animate-fade-in-up">
                Operator-Led Transformation.
              </h1>
              <p
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Gallag Works is a low-volume, high-conviction operational engineering studio. I don't sell 'creative hours'; I engineer P&L protection. You work directly with the Principal – I led operational transformation for Tier-1 retailers and FTSE 100 entities, managing £15M+ annual multichannel contracts.
              </p>
            </div>
          </div>
        </section>

        {/* The Methodology */}
        <section className="py-24 lg:py-36 bg-slate" ref={method.ref}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl">
              <span
                className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${method.isVisible ? "visible" : ""}`}
              >
                [THE METHODOLOGY]
              </span>
              <h2
                className={`text-3xl md:text-4xl font-extrabold text-foreground mb-8 clip-reveal ${method.isVisible ? "visible" : ""}`}
              >
                Engineering the problem, not the symptom.
              </h2>
              <p
                className={`text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] clip-reveal ${method.isVisible ? "visible" : ""}`}
              >
                Most organisations don't have an AI problem. They have a Structural Workflow problem. I engineer the 'Data Glue' out of the system so your people go back to making decisions, not managing tasks. I architect every system personally – no junior handoffs. Every logic flow is built against the reality of your specific commercial constraints.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Block */}
        <section className="py-24 lg:py-36" ref={exp.ref}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl">
              <span
                className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${exp.isVisible ? "visible" : ""}`}
              >
                [EXPERIENCE]
              </span>
              <h2
                className={`text-3xl md:text-4xl font-extrabold text-foreground mb-12 clip-reveal ${exp.isVisible ? "visible" : ""}`}
              >
                The track record.
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`bg-[#1A1C1E] border border-[#2F3133] p-6 clip-reveal-down ${exp.isVisible ? "visible" : ""}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <p
                      ref={stat.counter.ref}
                      className="font-mono text-2xl md:text-3xl font-extrabold text-primary mb-2"
                    >
                      {stat.counter.display}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className={`text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] clip-reveal ${exp.isVisible ? "visible" : ""}`}
              >
                Nearly two decades directing enterprise client delivery and managing £15M+ multichannel contracts for Tier-1 retailers and FTSE 100 entities taught a hard truth: efficiency protects the P&L. Managing high-stakes, 30+ person teams required a ruthless focus on operations. Gallag Works was founded to bring that exact 'efficiency-first' methodology to leaders across industries who are drowning in manual workarounds and ready to build scalable systems.
              </p>
            </div>
          </div>
        </section>

        <CTABand headline={<>High-conviction engineering. <span className="text-primary">Zero-leakage operations.</span></>} subcopy="Work directly with the Principal to transform your manual cost centres into scalable engines." />
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default About;
