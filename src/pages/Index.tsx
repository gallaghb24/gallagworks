import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProofPoints from "@/components/ProofPoints";
import ServicesSummary from "@/components/ServicesSummary";
import HowWeWork from "@/components/HowWeWork";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSummary />
        <HowWeWork />
        <ProofPoints />
        <CTABand headline={<>Ready to <span className="text-primary">reclaim time</span> from day-to-day operations?</>} />
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

export default Index;
