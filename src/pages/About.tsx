import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, Target, Wrench, Users, Shield, Settings, BarChart3, Megaphone, BookOpen, Mail } from "lucide-react";

const expectItems = [
  { icon: Clock, text: "Fast clarity on where time and rework are accumulating" },
  { icon: Target, text: "Scope that is specific enough to deliver, not vague 'transformation'" },
  { icon: Wrench, text: "Working automation in your real tools and environments" },
  { icon: Users, text: "Adoption support: roles, decision points, exception handling" },
  { icon: Shield, text: "InfoSec-aligned delivery under NDA, least-privilege access" },
];

const fitItems = [
  { icon: Settings, text: "Operations and delivery teams" },
  { icon: BarChart3, text: "Finance and reporting workflows" },
  { icon: Megaphone, text: "Marketing operations and campaign delivery" },
  { icon: BookOpen, text: "Knowledge-heavy support functions" },
  { icon: Mail, text: "Teams with spreadsheet and email-based handoffs" },
];

const About = () => {
  useEffect(() => {
    document.title = "Who we are | Gallag Works";
    window.scrollTo(0, 0);
  }, []);

  const hero = useScrollAnimation();
  const approach = useScrollAnimation();
  const expect = useScrollAnimation();
  const fit = useScrollAnimation();
  const background = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16" ref={hero.ref}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className={`font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 scroll-fade-in ${hero.isVisible ? "visible" : ""}`}>
                Who we are
              </h1>
              <p className={`text-lg text-foreground/70 leading-relaxed scroll-fade-in ${hero.isVisible ? "visible" : ""}`} style={{ animationDelay: "0.1s" }}>
                Operator-led workflow transformation. Implementation-first automation that teams actually adopt.
              </p>
            </div>
          </div>
        </section>

        {/* Point of view */}
        <section className="py-16 lg:py-28" ref={approach.ref}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className={`block text-primary text-xs font-semibold uppercase tracking-[0.15em] mb-4 scroll-fade-in ${approach.isVisible ? "visible" : ""}`}>
                POINT OF VIEW
              </span>
              <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground mb-10 scroll-fade-in ${approach.isVisible ? "visible" : ""}`}>
                The approach
              </h2>
              <div className={`space-y-6 scroll-fade-in ${approach.isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
                <p className="text-foreground/70 leading-relaxed text-base">
                  Most organisations do not have an AI problem. They have a workflow problem.
                </p>
                <p className="text-foreground/70 leading-relaxed text-base">
                  We start by making the work explicit: inputs, handoffs, decisions, checks, and failure modes.
                </p>
                <p className="text-foreground/70 leading-relaxed text-base">
                  Then we simplify, clarify ownership, fix the data, and automate the repeatable parts.
                </p>
                <p className="text-foreground/70 leading-relaxed text-base">
                  Implementation-first: working automation, adoption planning, and governance – not just strategy decks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What you can expect */}
        <section className="py-16 lg:py-28" ref={expect.ref}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className={`block text-primary text-xs font-semibold uppercase tracking-[0.15em] text-center mb-4 scroll-fade-in ${expect.isVisible ? "visible" : ""}`}>
                WORKING TOGETHER
              </span>
              <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center scroll-fade-in ${expect.isVisible ? "visible" : ""}`}>
                What you can expect
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {expectItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className={`border border-border border-l-4 border-l-primary rounded-lg p-6 card-hover scroll-fade-in ${expect.isVisible ? "visible" : ""}`}
                      style={{ transitionDelay: `${i * 0.1}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                        <p className="text-foreground font-medium leading-relaxed text-base md:text-sm">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Where this helps most */}
        <section className="py-16 lg:py-28" ref={fit.ref}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className={`block text-primary text-xs font-semibold uppercase tracking-[0.15em] text-center mb-4 scroll-fade-in ${fit.isVisible ? "visible" : ""}`}>
                FIT
              </span>
              <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 text-center scroll-fade-in ${fit.isVisible ? "visible" : ""}`}>
                Where this helps most
              </h2>
              <p className={`text-foreground/70 leading-relaxed text-base mb-8 text-center scroll-fade-in ${fit.isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
                This approach works best with teams that already know something is broken – they just need a structured way to fix it.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {fitItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className={`border border-border border-l-4 border-l-primary rounded-lg p-6 card-hover scroll-fade-in ${fit.isVisible ? "visible" : ""}`}
                      style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                        <p className="text-foreground font-medium leading-relaxed text-base md:text-sm">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="py-16 lg:py-28" ref={background.ref}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className={`block text-primary text-xs font-semibold uppercase tracking-[0.15em] mb-4 scroll-fade-in ${background.isVisible ? "visible" : ""}`}>
                BACKGROUND
              </span>
              <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground mb-10 scroll-fade-in ${background.isVisible ? "visible" : ""}`}>
                Experience and working style
              </h2>
              <div className={`space-y-6 scroll-fade-in ${background.isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
                <p className="text-foreground/70 leading-relaxed text-base">
                  I've spent close to 20 years working at the intersection of operations, delivery, and technology – building and running efficient teams, and putting in place the systems and ways of working that keep them effective as scale and complexity increase.
                </p>
                <p className="text-foreground/70 leading-relaxed text-base">
                  That experience has covered workflow redesign and implementation across operations, finance, marketing, and client delivery. Most of the time the issues are not dramatic, they are cumulative: handoffs, spreadsheets, manual checks, unclear ownership, and rework that quietly become "how things work".
                </p>
                <p className="text-foreground/70 leading-relaxed text-base">
                  I focus on making the work explicit, reducing avoidable variation, clarifying responsibility, and building automation that people actually use day to day.
                </p>
                <p className="text-foreground/70 leading-relaxed text-base">
                  I lead engagements directly. When specialist build resource is needed – integrations, data pipelines, or lightweight internal tools – I bring trusted engineers who deliver against the operational design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABand headline="Want to talk it through?" />
        <section className="-mt-12 pb-16">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <p className="text-foreground/50 text-sm">
              Or email{" "}
              <a href="mailto:hello@intelligenttransformation.studio" className="text-primary hover:underline">
                hello@intelligenttransformation.studio
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
