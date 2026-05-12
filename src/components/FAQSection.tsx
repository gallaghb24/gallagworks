import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

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
    question: "Who is this for?",
    answer:
      "Businesses with operational complexity, significant headcount, and no dedicated AI function. The sweet spot is organisations where the work is people-heavy, process-driven, and under margin pressure — typically mid-market businesses (£10M–£250M revenue) outgrowing manual processes but too small for a full-time Head of AI. Marketing services is home turf — I've led AI transformation across a 2,100-person agency group — but the problems are universal. PE-backed businesses where efficiency gains flow straight to EBITDA are a natural fit.",
  },
  {
    question: "How is this different from hiring a consulting firm?",
    answer:
      "Most operators in this space fall into one of three buckets. Strategy firms produce the roadmap but don't build anything — the deck gets delivered, the client doesn't know what to do next. Tool builders ship the app but don't understand the commercial reality, the team dynamics, or why the last three 'transformation' projects stalled. Generalist AI freelancers know the tools but haven't operated inside complex, multi-stakeholder businesses where adoption is the real challenge. I sit across all three: strategy, build, and adoption — led by someone who's done it at scale, not theorised about it.",
  },
  {
    question: "Do you replace existing systems?",
    answer:
      "No. I am tool-agnostic and work within your existing technology stack. I re-engineer the operational architecture around your current systems rather than replacing them, eliminating the manual workarounds that have grown up between them.",
  },
  {
    question: "Will I understand what you're building?",
    answer:
      "Yes — that's non-negotiable. I don't hide behind proprietary frameworks or black-box methodologies. You understand exactly what I'm building, why it works, and how to run it without me. Every engagement is designed to build your team's capability, not create dependency. The goal is that you don't need me anymore.",
  },
  {
    question: "What does 'Founder-led' actually mean?",
    answer:
      "It means you work directly with me — Ben Gallagher — on every engagement. I personally architect every system, conduct every diagnostic, and design every workflow. No junior handoffs. No 50-page strategy decks. You get 15+ years of enterprise operational experience applied directly to your problem.",
  },
  {
    question: "Is data kept secure during an engagement?",
    answer:
      "Yes. All engagements are InfoSec-aligned with enterprise-grade data handling protocols. I work within your existing security frameworks and never require data to leave your controlled environment.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 lg:py-36 bg-warm-stone">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-primary uppercase tracking-widest mb-6 block">
            [FAQ]
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-light mb-12">
            Common questions.
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-off-white border border-black/[0.08] rounded-xl px-6"
              >
                <AccordionTrigger className="text-on-light font-semibold text-left hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-on-light/60 font-light leading-relaxed pb-5">
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
