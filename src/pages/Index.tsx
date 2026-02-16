import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Philosophy from "@/components/Philosophy";
import ServicesSummary from "@/components/ServicesSummary";
import Principal from "@/components/Principal";
import ProofPoints from "@/components/ProofPoints";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero background image – sits behind nav and hero */}
      <div className="absolute top-0 -right-[200px] h-[85vh] w-[60%] lg:w-[55%] z-0 hidden lg:block overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="object-cover object-right h-full w-full"
        />
        <div className="absolute -left-[150px] top-0 right-0 bottom-0 bg-[linear-gradient(to_right,hsl(var(--background))_0%,hsl(var(--background)/0.85)_15%,hsl(var(--background)/0.5)_35%,hsl(var(--background)/0.2)_55%,transparent_80%)]" />
      </div>

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
