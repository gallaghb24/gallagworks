import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-primary uppercase tracking-widest mb-6 block animate-fade-in">
              [OPERATIONAL ENGINEERING]
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-8 animate-fade-in-up">
              Operational Engineering for the <span className="text-primary">AI Era.</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground font-light max-w-[720px] mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              We help operations and commercial leaders untangle the 'Data Glue' – the manual re-keying, spreadsheets, and workarounds that kill capacity. We simplify the logic, then build the AI infrastructure to run it.
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

          {/* Right column – Technical Schematic Diagram */}
          <div
            className="lg:col-span-7 animate-fade-in-up hidden lg:flex items-center justify-center"
            style={{ animationDelay: "0.4s" }}
          >
            <svg viewBox="0 0 680 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              {/* === LEFT: The Tangle === */}
              <path d="M0 80 C40 120, 80 60, 140 140 C180 190, 200 160, 300 200" stroke="#2F3133" strokeWidth="0.5" opacity="0.4" />
              <path d="M0 120 C60 80, 100 180, 160 150 C200 130, 240 170, 300 190" stroke="#2F3133" strokeWidth="0.5" opacity="0.3" />
              <path d="M0 160 C50 200, 90 100, 150 180 C190 210, 230 160, 300 200" stroke="#2F3133" strokeWidth="0.5" opacity="0.45" />
              <path d="M0 200 C70 160, 110 240, 170 190 C210 170, 250 210, 300 210" stroke="#2F3133" strokeWidth="0.5" opacity="0.25" />
              <path d="M0 240 C40 280, 100 200, 160 250 C200 270, 240 220, 300 220" stroke="#2F3133" strokeWidth="0.5" opacity="0.35" />
              <path d="M0 280 C60 240, 120 300, 180 260 C220 240, 260 260, 300 210" stroke="#2F3133" strokeWidth="0.5" opacity="0.2" />
              <path d="M0 320 C50 280, 90 340, 150 290 C190 260, 230 280, 300 220" stroke="#2F3133" strokeWidth="0.5" opacity="0.4" />
              <path d="M20 60 C80 100, 60 180, 130 160 C170 150, 220 190, 300 200" stroke="#2F3133" strokeWidth="0.5" opacity="0.15" />
              <path d="M10 300 C70 260, 130 320, 190 280 C230 260, 260 240, 300 210" stroke="#2F3133" strokeWidth="0.5" opacity="0.3" />
              <path d="M0 140 C80 180, 60 100, 140 170 C180 200, 250 180, 300 200" stroke="#2F3133" strokeWidth="0.5" opacity="0.35" />
              <path d="M30 100 C90 140, 70 200, 150 170 C200 155, 240 190, 300 195" stroke="#2F3133" strokeWidth="0.5" opacity="0.2" />
              <path d="M0 220 C60 180, 110 260, 170 220 C210 200, 250 230, 300 215" stroke="#2F3133" strokeWidth="0.5" opacity="0.4" />
              <path d="M10 180 C70 220, 100 140, 160 200 C200 220, 240 200, 300 205" stroke="#2F3133" strokeWidth="0.5" opacity="0.25" />
              <path d="M0 260 C50 220, 120 280, 180 240 C220 220, 260 250, 300 210" stroke="#2F3133" strokeWidth="0.5" opacity="0.3" />

              {/* === CENTRE: The Filter (sharp square) === */}
              <rect x="300" y="160" width="80" height="80" stroke="#F5F5F5" strokeWidth="1.5" fill="none" />

              {/* === RIGHT: The Order (three clean parallel lines) === */}
              <line x1="380" y1="185" x2="700" y2="185" stroke="#F5F5F5" strokeWidth="0.75" />
              <line x1="380" y1="200" x2="700" y2="200" stroke="#FF5F1F" strokeWidth="1" />
              <line x1="380" y1="215" x2="700" y2="215" stroke="#F5F5F5" strokeWidth="0.75" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
