import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLocation } from "react-router-dom";

const ConsultationConfirmation = () => {
  const location = useLocation();
  const name = (location.state as { name?: string })?.name;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Consultation Requested — Gallag Works"
        description="Your consultation request has been received."
        path="/consultation/confirmed"
      />
      <Navigation />

      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block">
              [CONFIRMED]
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-6">
              {name ? `Thanks, ${name}.` : "Thanks."} I'll be in touch.
            </h1>
            <p className="text-foreground/70 font-light leading-relaxed mb-6 max-w-lg">
              Your consultation request has been received. I'll review your assessment results and reach out within 24 hours to arrange a conversation.
            </p>
            <p className="text-foreground/70 font-light leading-relaxed max-w-lg">
              In the meantime, if you have any questions, feel free to email{" "}
              <a
                href="mailto:hello@gallag.works"
                className="text-primary hover:underline"
              >
                hello@gallag.works
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer hideCTA />
    </div>
  );
};

export default ConsultationConfirmation;
