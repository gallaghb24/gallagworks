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

  const c1 = useCountUp({ target: 15, suffix: "+ Years" });
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
        title="The Founder"
        description="15+ years directing enterprise delivery across retail, financial services, and professional services. Independent AI transformation practice — strategy, build, and adoption."
        path="/about"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block opacity-0 animate-fade-in">
                [THE FOUNDER]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 opacity-0 animate-fade-in-up">
                AI Transformation, led from the inside.
              </h1>
              <p
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Gallag Works is an independent AI transformation practice. I don't advise from the sidelines — I embed in your team, set the strategy, build the tools, and drive adoption. You work directly with me across every engagement. My background: 15+ years as operational lead inside a 2,100-person content production agency, managing £15M+ annual contracts, before building the company's AI transformation function from scratch.
              </p>
              <a
                href="https://www.linkedin.com/in/bengallagher/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors mt-6 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </section>

        {/* The Methodology — Light surface */}
        <section className="py-16 lg:py-36 bg-warm-stone" ref={method.ref}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl">
              <span
                className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${method.isVisible ? "visible" : ""}`}
              >
                [THE METHODOLOGY]
              </span>
              <h2
                className={`text-3xl md:text-4xl font-extrabold text-on-light mb-8 clip-reveal ${method.isVisible ? "visible" : ""}`}
              >
                Engineering the problem, not the symptom.
              </h2>
              <p className="text-lg text-on-light/70 font-light leading-relaxed max-w-[720px]">
                Most organisations don't have an AI problem. They have a process problem that AI can't fix on its own. I find the Human Middleware — the senior people acting as manual routers between systems — and engineer it out, so your team goes back to making decisions instead of managing tasks. I architect every system personally. No junior handoffs. Every logic flow is built against the reality of your specific commercial constraints.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Block — Dark */}
        <section className="py-16 lg:py-36" ref={exp.ref}>
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10 md:mb-16">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`bg-slate border border-border p-6 clip-reveal-down ${exp.isVisible ? "visible" : ""}`}
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

              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px]">
                15 years directing enterprise client delivery and managing £15M+ contracts inside a 2,100-person agency taught me where businesses actually bleed time and money: not in the big strategic decisions, but in the thousands of small manual handoffs that nobody questions anymore. The last two years building an AI transformation function — governance, production tools, training programmes, adoption across the business — showed me that most companies need someone who can do all of it, not just advise on parts of it. That's what Gallag Works is.
              </p>
            </div>
          </div>
        </section>

        <CTABand
          headline={<>AI transformation, led by someone who's built it at scale.</>}
          subcopy="Work directly with me to move your business from AI ambition to AI execution."
        />
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default About;
