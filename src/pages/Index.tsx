import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import StatsSection from "@/components/StatsSection";
import ApproachSection from "@/components/ApproachSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <StatsSection />
        <ApproachSection />
        <CapabilitiesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
