import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "20 Years", label: "in Operations" },
  { value: "£15m+", label: "Contract Oversight" },
  { value: "4,000+", label: "User Platform Adoptions" },
  { value: "30+", label: "Person Team Leadership" },
];

const About = () => {
  useEffect(() => {
    document.title = "The Principal | Gallag Works";
    window.scrollTo(0, 0);
  }, []);

  const method = useScrollAnimation();
  const exp = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block animate-fade-in">
                [THE PRINCIPAL]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 animate-fade-in-up">
                Operator-Led Transformation.
              </h1>
              <p
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Gallag Works is an independent studio, not a high-volume agency. You work directly with the Principal. I bring nearly two decades of experience directing enterprise delivery and managing £15m+ multichannel contracts for major UK retailers to every project.
              </p>
            </div>
          </div>
        </section>

        {/* The Methodology */}
        <section className="py-24 lg:py-36 bg-slate" ref={method.ref}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl">
              <span
                className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block scroll-fade-in ${method.isVisible ? "visible" : ""}`}
              >
                [THE METHODOLOGY]
              </span>
              <h2
                className={`text-3xl md:text-4xl font-extrabold text-foreground mb-8 scroll-fade-in ${method.isVisible ? "visible" : ""}`}
              >
                Engineering the problem, not the symptom.
              </h2>
              <p
                className={`text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] scroll-fade-in ${method.isVisible ? "visible" : ""}`}
              >
                Most organizations don't have an AI problem. They have a 'How things work' problem. I engineer the 'Data Glue' out of the system so your people go back to making decisions, not managing tasks. I lead engagements directly, ensuring that what we build is technically sound, commercially viable, and actually adopted.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Block */}
        <section className="py-24 lg:py-36" ref={exp.ref}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl">
              <span
                className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block scroll-fade-in ${exp.isVisible ? "visible" : ""}`}
              >
                [EXPERIENCE]
              </span>
              <h2
                className={`text-3xl md:text-4xl font-extrabold text-foreground mb-12 scroll-fade-in ${exp.isVisible ? "visible" : ""}`}
              >
                The track record.
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`bg-[#1A1C1E] border border-[#2F3133] p-6 scroll-fade-in ${exp.isVisible ? "visible" : ""}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <p className="font-mono text-2xl md:text-3xl font-extrabold text-foreground mb-2">
                      {stat.value}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className={`text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] scroll-fade-in ${exp.isVisible ? "visible" : ""}`}
              >
                Nearly two decades directing enterprise client delivery and managing £15m+ multichannel marketing and retail accounts taught a hard truth: efficiency protects the P&L. Managing high-stakes, 30+ person teams required a ruthless focus on operations. Gallag Works was founded to bring that exact 'efficiency-first' methodology to leaders across industries who are drowning in manual workarounds and ready to build scalable systems.
              </p>
            </div>
          </div>
        </section>

        <CTABand headline="Have a workflow in mind? Let's look at it together." />
      </main>
      <Footer />
    </div>
  );
};

export default About;
