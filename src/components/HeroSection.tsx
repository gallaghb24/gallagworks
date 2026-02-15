import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const terminalLines = [
  "> running operational x-ray...",
  "> scanning data glue: manual re-keying detected",
  "> mapping spreadsheet handoffs...",
  "> friction identified: 4 handoff points",
  "> engineering decision inbox...",
  "> routing exceptions to human judgement",
  "> deploying automation pipeline...",
  "> data glue eliminated: 3 processes",
  "> decision inbox live: ops team",
  "> capacity released: 12h/week",
];

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
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 animate-fade-in-up">
              Operational Engineering{" "}
              <span className="text-primary">for the AI Era.</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              We use AI as an Operational X-Ray to expose the Data Glue – the manual re-keying and spreadsheet handoffs – then engineer Decision Inboxes so your team moves from managing tasks to making decisions.
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
                  Book a discovery call
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column – Terminal */}
          <div
            className="animate-fade-in-up hidden lg:block"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="border border-border rounded-sm overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  operational-x-ray.sh
                </span>
              </div>
              {/* Terminal body */}
              <div className="bg-background p-6 h-80 overflow-hidden relative">
                <div className="terminal-scroll">
                  {[...terminalLines, ...terminalLines].map((line, i) => (
                    <p
                      key={i}
                      className={`font-mono text-sm leading-7 ${
                        line.includes("live") || line.includes("released")
                          ? "text-primary"
                          : line.includes("detected") || line.includes("friction")
                          ? "text-primary/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
                {/* Fade overlays */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
