import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Philosophy from "@/components/Philosophy";
import ServicesSummary from "@/components/ServicesSummary";
import Principal from "@/components/Principal";
import ProofPoints from "@/components/ProofPoints";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <Philosophy />
        <ServicesSummary />
        <Principal />
        <ProofPoints />
        <CTABand />
        <section className="-mt-8 pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <p className="text-muted-foreground text-sm font-mono">
              Or email{" "}
              <a href="mailto:hello@gallag.works" className="text-primary hover:underline">
                hello@gallag.works
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
