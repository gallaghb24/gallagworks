import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "How do you handle data security?",
    a: "We align to your InfoSec requirements. We follow least-privilege access, work under NDA as standard, and agree data handling and access upfront.",
  },
  {
    q: "What tools do you use?",
    a: "It depends on the problem. We work with your existing stack, workflow automation platforms, and modern build tools when needed (for example Lovable, Supabase, and web frameworks). We're tool-agnostic.",
  },
  {
    q: "Do you build software?",
    a: "When it's the right solution, yes. But we start with the workflow, not the technology. Sometimes the answer is a better process, not a new app.",
  },
  {
    q: "What do you need from us?",
    a: "Access to the people who do the work, not just the people who manage it. A clear owner for decisions. And willingness to look honestly at current processes.",
  },
  {
    q: "How long does an engagement take?",
    a: "A diagnostic is typically 2–4 weeks. A pilot runs 4–8 weeks. Scale and advisory engagements are ongoing. We'll scope it properly before anything starts.",
  },
  {
    q: "What industries do you work with?",
    a: "I've worked across agency, media, professional services, and operational teams. The common thread is knowledge-intensive work where handoffs, variation, and data friction create avoidable cost.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center scroll-fade-in ${isVisible ? "visible" : ""}`}>
            Common questions
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`scroll-fade-in ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${(i + 1) * 0.06}s` }}
              >
                <AccordionItem value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
