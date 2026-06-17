import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SoundLikeYou from "@/components/SoundLikeYou";
import Philosophy from "@/components/Philosophy";
import ServicesSummary from "@/components/ServicesSummary";
import Principal from "@/components/Principal";
import ProofPoints from "@/components/ProofPoints";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import WhyDifferent from "@/components/WhyDifferent";
import LeakageEstimator from "@/components/LeakageEstimator";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      <SEOHead
        title=""
        description="Founder-led AI transformation that eliminates 'Human Middleware' in handoff-heavy operations. 1,200+ hours reclaimed, up to 98% manual effort cut."
        path="/"
      />
      <Navigation />
      <main>
        <HeroSection />
        <SoundLikeYou />
        <ProofPoints />
        <FeaturedCaseStudies />
        <Philosophy />
        <WhyDifferent />
        <ServicesSummary />
        <LeakageEstimator />
        <Principal />
        <CTABand
          headline={<>Stop losing capacity to manual friction. <span className="text-primary">Start the transformation.</span></>}
          subcopy="Start with the free AI Readiness Diagnostic or request a consultation to discuss your operational challenges."
          secondaryCTA={{ label: "Take the AI Readiness Diagnostic", to: "/diagnostic" }}
        />
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default Index;
