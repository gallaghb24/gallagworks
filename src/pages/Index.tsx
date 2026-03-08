import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Philosophy from "@/components/Philosophy";
import ServicesSummary from "@/components/ServicesSummary";
import Principal from "@/components/Principal";
import ProofPoints from "@/components/ProofPoints";
import LeakageEstimator from "@/components/LeakageEstimator";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title=""
        description="Principal-led operational engineering for Tier-1 multichannel retail. Eradicating 'Data Glue' and manual friction to recover enterprise margins. Proven results in 1,200-hour capacity reclamation and £1.5M+ annual leakage recovery."
        path="/"
      />
      <Navigation />
      <main>
        <HeroSection />
        <Philosophy />
        <ServicesSummary />
        <Principal />
        <ProofPoints />
        <LeakageEstimator />
        <CTABand
          headline={<>Ready to build <span className="text-primary">scalable operations?</span></>}
          subcopy="Start with the free AI Readiness Diagnostic or request a consultation to discuss your operational challenges."
          secondaryCTA={{ label: "Take the AI Readiness Diagnostic", to: "/diagnostic" }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
