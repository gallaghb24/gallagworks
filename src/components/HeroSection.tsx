import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <span className="font-mono text-xs text-primary uppercase tracking-widest mb-6 block animate-fade-in">
              [OPERATIONAL ENGINEERING]
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 animate-fade-in-up">
              Operational Engineering for the AI Era.
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-in-up"
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium group"
              >
                <Link to="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column – Workflow Node Diagram */}
          <div
            className="animate-fade-in-up hidden lg:flex items-center justify-center"
            style={{ animationDelay: "0.4s" }}
          >
            <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
              {/* Tangled input lines (left side) */}
              <path d="M 40 40 C 100 80, 60 120, 120 100" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.4" />
              <path d="M 40 80 C 80 40, 140 140, 120 100" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.4" />
              <path d="M 40 120 C 100 160, 80 60, 120 100" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.4" />
              <path d="M 40 160 C 60 100, 110 180, 120 140" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.4" />
              <path d="M 40 200 C 100 240, 70 140, 120 180" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.4" />
              <path d="M 40 240 C 80 200, 130 260, 120 220" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.4" />
              <path d="M 40 280 C 100 240, 60 300, 120 260" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.4" />

              {/* Input dots */}
              {[40, 80, 120, 160, 200, 240, 280].map((y) => (
                <circle key={`in-${y}`} cx="40" cy={y} r="3" fill="hsl(var(--muted-foreground))" opacity="0.5" />
              ))}

              {/* Central processing node */}
              <rect x="150" y="110" width="100" height="100" rx="2" stroke="hsl(var(--foreground))" strokeWidth="1.5" fill="none" />
              <text x="200" y="155" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.05em">PROCESS</text>
              <text x="200" y="172" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9" fontFamily="Inter, sans-serif">ARCHITECTURE</text>

              {/* Clean output lines (right side) */}
              <line x1="250" y1="130" x2="340" y2="100" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
              <line x1="250" y1="160" x2="340" y2="160" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
              <line x1="250" y1="190" x2="340" y2="220" stroke="hsl(var(--foreground))" strokeWidth="1.5" />

              {/* Output dots */}
              <circle cx="340" cy="100" r="4" fill="hsl(var(--primary))" />
              <circle cx="340" cy="160" r="4" fill="hsl(var(--primary))" />
              <circle cx="340" cy="220" r="4" fill="hsl(var(--primary))" />

              {/* Output labels */}
              <text x="352" y="104" fill="hsl(var(--foreground))" fontSize="9" fontFamily="Inter, sans-serif">Decisions</text>
              <text x="352" y="164" fill="hsl(var(--foreground))" fontSize="9" fontFamily="Inter, sans-serif">Automation</text>
              <text x="352" y="224" fill="hsl(var(--foreground))" fontSize="9" fontFamily="Inter, sans-serif">Exceptions</text>

              {/* Labels */}
              <text x="40" y="30" fill="hsl(var(--muted-foreground))" fontSize="8" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.1em">DATA GLUE</text>
              <text x="340" y="80" fill="hsl(var(--muted-foreground))" fontSize="8" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.1em">STRUCTURED</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
