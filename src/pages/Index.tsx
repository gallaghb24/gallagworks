import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProofPoints from "@/components/ProofPoints";
import ServicesSummary from "@/components/ServicesSummary";
import HowWeWork from "@/components/HowWeWork";
import AboutTeaser from "@/components/AboutTeaser";
import SectionDivider from "@/components/SectionDivider";
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
        <SectionDivider />
        <AboutTeaser />
        <SectionDivider />
        <ProofPoints />
        <CTABand headline={<>Ready to <span className="text-primary">reclaim time</span> from day-to-day operations?</>} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
