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
        <ProofPoints />

        {/* Implementation-first operating principle */}
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <div className="max-w-4xl mx-auto">
            <p className="border-l-4 border-l-primary pl-6 text-foreground/80 text-lg leading-relaxed font-medium">
              Implementation-first: working automation, adoption planning, and governance – not just strategy decks.
            </p>
          </div>
        </div>

        <ServicesSummary />
        <HowWeWork />
        <CTABand headline="Ready to reclaim time from day-to-day operations?" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
