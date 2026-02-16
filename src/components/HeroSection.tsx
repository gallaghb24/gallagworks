import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative z-10 min-h-[85vh] flex items-center pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-8 animate-fade-in-up">
            Operational Engineering for<br className="hidden lg:inline" /> the <span className="text-primary">AI Era.</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground font-light max-w-[550px] mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            We help operations and commercial leaders untangle the 'Data Glue' – the manual re-keying, spreadsheets, and workarounds that erode margin and burn out your best people. We transform your operations from a manual cost center into a scalable engine – using AI to automate the routine so your experts can focus on growth.
          </p>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8 py-6 text-lg font-medium group"
            >
              <Link to="/contact">
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
