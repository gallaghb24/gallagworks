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
        description="Founder-led AI transformation for high-volume, handoff-heavy operations. Eliminating 'Human Middleware' and manual friction to recover enterprise margins. Proven results: 1,200+ hours reclaimed, up to 98% manual effort reduction."
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
          headline={<>Stop losing capacity to manual friction. <span className="text-primary whitespace-nowrap">Start the transformation.</span></>}
          subcopy="Start with the free AI Readiness Diagnostic or request a consultation to discuss your operational challenges."
          secondaryCTA={{ label: "Take the AI Readiness Diagnostic", to: "/diagnostic" }}
        />
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default Index;
