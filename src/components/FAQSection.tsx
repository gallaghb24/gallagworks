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
      "I identify and eliminate Human Middleware — the invisible manual processes that consume capacity and erode margins. Think: copy-pasting between systems, spreadsheet-based coordination, email-chain approvals, and skilled people trapped in procedural work. I map the friction, quantify the cost, and engineer it out.",
  },
  {
    question: "What is Human Middleware?",
    answer:
      "Human Middleware is the connective tissue of manual processes holding operations together: copy-paste routines, spreadsheet reconciliation, email-based approvals, and coordination overhead. It is the single largest source of hidden operational cost in most businesses. Most organisations don't see it because it's embedded in how things are done. I make it visible, then I engineer it out.",
  },
  {
    question: "Who is this for?",
    answer:
      "Businesses with operational complexity, significant headcount, and no dedicated AI function. The sweet spot is organisations where the work is people-heavy, process-driven, and under margin pressure — businesses outgrowing manual processes but without the in-house AI leadership to drive the transformation. I've led AI transformation across a 2,100-person agency group in marketing services, but the problems are universal. Any business where skilled people are spending their time routing data between systems instead of making decisions is losing capacity I can recover.",
  },
  {
    question: "How is this different from hiring a consulting firm?",
    answer:
      "Most operators in this space fall into one of three buckets. Strategy firms produce the roadmap but don't build anything — the deck gets delivered, the client doesn't know what to do next. Tool builders ship the app but don't understand the commercial reality, the team dynamics, or why the last three transformation projects stalled. Generalist AI freelancers know the tools but haven't operated inside complex, multi-stakeholder businesses where adoption is the real challenge. I sit across all three: strategy, build, and adoption — led by someone who's done it at scale, not theorised about it.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "It depends on the scope. An Operational X-Ray is 2–3 weeks. Solution Design and Proof typically runs 4–8 weeks. A full Scan-to-Scale engagement might be 3–6 months. Fractional AI Leadership is a retained arrangement — usually a minimum of three months. Every engagement starts with a clear scope and timeline before any work begins.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "The Operational X-Ray is fixed-price. Solution Design & Proof is fixed-price. Production Delivery is project-based with a defined scope and cost agreed upfront. Fractional AI Leadership is a retained monthly arrangement. I don't bill by the hour and I don't run open-ended engagements. You know exactly what you're paying for before we start.",
  },
  {
    question: "What happens after an engagement — can my team run this without you?",
    answer:
      "Yes — that's the entire point. Every engagement is designed to build your team's capability, not create dependency. You understand exactly what I've built, why it works, and how to operate it. The goal is that you don't need me anymore. If you want ongoing support or fractional leadership, that's available — but it's never a requirement.",
  },
  {
    question: "What does Founder-led actually mean?",
    answer:
      "It means you work directly with me — Ben Gallagher — on every engagement. I personally architect every solution, conduct every diagnostic, and design every workflow. When an engagement moves to production build, I bring in the right specialists — but I govern the architecture and the quality. No junior handoffs. No 50-page strategy decks. You get 15+ years of enterprise operational experience applied directly to your problem.",
  },
];

const FAQSection = () => {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 lg:py-36 bg-warm-stone">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.span
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease }}
            className="font-mono text-xs text-primary uppercase tracking-widest mb-6 block"
          >
            [FAQ]
          </motion.span>
          <motion.h2
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="text-3xl md:text-4xl font-extrabold text-on-light mb-12 tracking-tight"
          >
            Common questions.
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
            }}
          >
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                  }}
                >
                  <AccordionItem
                    value={`faq-${index}`}
                    className="bg-off-white border border-black/[0.08] rounded-xl px-6 transition-colors duration-300 hover:border-primary/30"
                  >
                    <AccordionTrigger className="text-on-light font-semibold text-left hover:text-primary py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-on-light/60 font-light leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
