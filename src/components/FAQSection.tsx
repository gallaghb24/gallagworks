import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "What does Gallag Works actually do?",
    answer:
      "I identify and eliminate 'Human Middleware' — the invisible manual processes that consume enterprise capacity and erode margins. Think: copy-pasting between systems, spreadsheet-based coordination, email-chain approvals, and skilled people trapped in procedural work. I map the friction, quantify the cost, and engineer it out.",
  },
  {
    question: "What is 'Human Middleware'?",
    answer:
      "Human Middleware is the connective tissue of manual processes holding enterprise operations together: copy-paste routines, spreadsheet reconciliation, email-based approvals, and coordination overhead. It is the single largest source of hidden operational cost in enterprise environments. Most organisations don't see it because it's embedded in 'how things are done.' I make it visible, then I engineer it out.",
  },
  {
    question: "Do you replace existing systems?",
    answer:
      "No. I am tool-agnostic and work within your existing technology stack. I re-engineer the operational architecture around your current systems rather than replacing them, eliminating the manual workarounds that have grown up between them.",
  },
  {
    question: "What does 'Founder-led' actually mean?",
    answer:
      "It means you work directly with me — Ben Gallagher — on every engagement. I personally architect every system, conduct every diagnostic, and design every workflow. No junior handoffs. No 50-page strategy decks. You get 15+ years of enterprise operational experience applied directly to your problem.",
  },
  {
    question: "How is this different from hiring a consulting firm?",
    answer:
      "Consulting firms sell you a strategy deck and leave. I build production-ready systems that ship. Every engagement is measured by capacity reclaimed and margin recovered, not hours billed. I engineer working solutions, not recommendations.",
  },
  {
    question: "Is data kept secure during an engagement?",
    answer:
      "Yes. All engagements are InfoSec-aligned with enterprise-grade data handling protocols. I work within your existing security frameworks and never require data to leave your controlled environment.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-36 bg-slate" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${isVisible ? "visible" : ""}`}
          >
            [FAQ]
          </span>
          <h2
            className={`text-3xl md:text-4xl font-extrabold text-foreground mb-12 clip-reveal ${isVisible ? "visible" : ""}`}
          >
            Common questions.
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className={`border border-border px-6 clip-reveal-down ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <AccordionTrigger className="text-foreground font-semibold text-left hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
