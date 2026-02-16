import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "How do you handle data security?",
    a: "Data integrity and security are foundational to operational engineering. I bring enterprise-level governance experience to every project. We work within your existing InfoSec frameworks, follow least-privilege access protocols, and execute under NDA as standard. We don't 'move' your data; we engineer the systems that handle it safely.",
  },
  {
    q: "What tools do you use?",
    a: "We are tool-agnostic. My goal is to maximise your existing stack (M365, Google Workspace, specialised ERPs/CRMs) before suggesting new infrastructure. When we do build, we use enterprise-grade AI and orchestration tools that your team can actually own and maintain. We don't build black boxes.",
  },
  {
    q: "Do you build software?",
    a: "We build Operational Infrastructure. Sometimes that looks like a custom dashboard or a lightweight internal tool; other times it's a series of automated 'Decision Inboxes' connecting your existing apps. We start with the workflow architecture – software is simply the delivery mechanism for that logic.",
  },
  {
    q: "What do you need from us?",
    a: "Executive sponsorship and operational transparency. I need access to the people in the trenches – the ones currently acting as the 'Data Glue' – and a clear owner for commercial decisions. Transformation fails in a vacuum; it succeeds when the leaders are ready to kill redundant processes.",
  },
  {
    q: "How long does an engagement take?",
    a: "A Diagnostic (The X-Ray) is a sharp, 2-week engagement. A Build phase typically runs between 6 and 12 weeks. While I only lead 3–4 full-scale transformations per year to ensure direct Principal involvement, the initial X-Ray is the fastest way to determine if we are a fit.",
  },
  {
    q: "What industries do you work with?",
    a: "I specialise in knowledge-intensive environments where high-volume handoffs and data friction create avoidable costs. My background is rooted in the high-velocity worlds of multichannel retail, marketing operations, and commercial delivery. If your team spends more time 'managing the process' than 'doing the work,' the methodology applies.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-36 bg-[#1A1C1E]" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className={`font-mono text-xs text-primary uppercase tracking-widest mb-4 block scroll-fade-in ${isVisible ? "visible" : ""}`}>
            [FAQ]
          </span>
          <h2 className={`font-display text-3xl md:text-4xl font-extrabold text-foreground mb-12 scroll-fade-in ${isVisible ? "visible" : ""}`}>
            Common questions
          </h2>

          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border-b border-[#2F3133] py-6 scroll-fade-in ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${(i + 1) * 0.06}s` }}
              >
                <h3 className="text-lg font-extrabold text-foreground mb-3">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed max-w-[720px]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;