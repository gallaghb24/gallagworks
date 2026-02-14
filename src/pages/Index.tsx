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
        <ServicesSummary />
        <HowWeWork />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
