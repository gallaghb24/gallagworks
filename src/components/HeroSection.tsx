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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 animate-fade-in-up">
              Operational Engineering for the <span className="text-primary">AI Era.</span>
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

          {/* Right column – Technical Schematic Diagram */}
          <div
            className="lg:col-span-7 animate-fade-in-up hidden lg:flex items-center justify-center"
            style={{ animationDelay: "0.4s" }}
          >
            <svg viewBox="0 0 680 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              {/* === LEFT SIDE: Unstructured Inputs === */}
              <text x="10" y="18" fill="hsl(var(--muted-foreground))" fontSize="7" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.1em">UNSTRUCTURED INPUTS &amp; MANUAL FRICTION</text>

              {/* Input Source: Email */}
              <rect x="10" y="50" width="70" height="44" rx="2" stroke="hsl(var(--muted-foreground))" strokeWidth="0.75" fill="none" opacity="0.6" />
              <rect x="22" y="58" width="14" height="10" rx="1" stroke="hsl(var(--foreground))" strokeWidth="0.75" fill="none" />
              <path d="M22 58 L29 64 L36 58" stroke="hsl(var(--foreground))" strokeWidth="0.75" fill="none" />
              <text x="45" y="70" fill="hsl(var(--muted-foreground))" fontSize="7" fontFamily="'JetBrains Mono', monospace">EMAIL</text>

              {/* Input Source: Spreadsheet */}
              <rect x="10" y="120" width="70" height="44" rx="2" stroke="hsl(var(--muted-foreground))" strokeWidth="0.75" fill="none" opacity="0.6" />
              <rect x="22" y="128" width="14" height="12" rx="1" stroke="hsl(var(--foreground))" strokeWidth="0.75" fill="none" />
              <line x1="22" y1="132" x2="36" y2="132" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
              <line x1="22" y1="136" x2="36" y2="136" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
              <line x1="29" y1="128" x2="29" y2="140" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
              <text x="45" y="142" fill="hsl(var(--muted-foreground))" fontSize="7" fontFamily="'JetBrains Mono', monospace">SHEETS</text>

              {/* Input Source: Database */}
              <rect x="10" y="190" width="70" height="44" rx="2" stroke="hsl(var(--muted-foreground))" strokeWidth="0.75" fill="none" opacity="0.6" />
              <ellipse cx="29" cy="202" rx="8" ry="4" stroke="hsl(var(--foreground))" strokeWidth="0.75" fill="none" />
              <path d="M21 202 L21 214 C21 217 29 220 29 220 C29 220 37 217 37 214 L37 202" stroke="hsl(var(--foreground))" strokeWidth="0.75" fill="none" />
              <text x="45" y="214" fill="hsl(var(--muted-foreground))" fontSize="7" fontFamily="'JetBrains Mono', monospace">LEGACY DB</text>

              {/* Input Source: Chat/Slack */}
              <rect x="10" y="260" width="70" height="44" rx="2" stroke="hsl(var(--muted-foreground))" strokeWidth="0.75" fill="none" opacity="0.6" />
              <rect x="22" y="268" width="14" height="10" rx="3" stroke="hsl(var(--foreground))" strokeWidth="0.75" fill="none" />
              <circle cx="27" cy="273" r="1" fill="hsl(var(--foreground))" />
              <circle cx="33" cy="273" r="1" fill="hsl(var(--foreground))" />
              <text x="45" y="282" fill="hsl(var(--muted-foreground))" fontSize="7" fontFamily="'JetBrains Mono', monospace">CHAT</text>

              {/* Tangled lines from inputs to center */}
              <path d="M80 72 C120 90, 100 160, 140 130 C160 115, 180 140, 220 170" stroke="hsl(var(--muted-foreground))" strokeWidth="0.75" opacity="0.35" />
              <path d="M80 72 C130 50, 160 120, 200 100 C220 92, 210 160, 220 180" stroke="hsl(var(--muted-foreground))" strokeWidth="0.75" opacity="0.3" />
              <path d="M80 142 C120 180, 90 100, 140 120 C165 110, 190 170, 220 190" stroke="hsl(var(--muted-foreground))" strokeWidth="0.75" opacity="0.35" />
              <path d="M80 142 C110 130, 150 200, 180 160 C200 140, 210 180, 220 200" stroke="hsl(var(--muted-foreground))" strokeWidth="0.75" opacity="0.3" />
              <path d="M80 212 C120 240, 130 170, 160 190 C180 200, 200 210, 220 210" stroke="hsl(var(--muted-foreground))" strokeWidth="0.75" opacity="0.35" />
              <path d="M80 212 C100 190, 150 250, 180 220 C200 205, 215 230, 220 220" stroke="hsl(var(--muted-foreground))" strokeWidth="0.75" opacity="0.3" />
              <path d="M80 282 C120 260, 110 220, 150 240 C175 250, 200 230, 220 230" stroke="hsl(var(--muted-foreground))" strokeWidth="0.75" opacity="0.35" />
              <path d="M80 282 C100 300, 150 260, 180 270 C200 275, 210 250, 220 240" stroke="hsl(var(--muted-foreground))" strokeWidth="0.75" opacity="0.3" />

              {/* === CENTRE: Operational Engineering Core === */}
              <rect x="220" y="120" width="200" height="170" rx="3" stroke="hsl(var(--foreground))" strokeWidth="1.5" fill="none" />

              {/* Core labels */}
              <text x="320" y="142" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600" letterSpacing="0.08em">OPERATIONAL ENGINEERING CORE</text>
              <text x="320" y="280" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6.5" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.06em">Simplify. Standardise. Validate.</text>

              {/* Funnel at entry */}
              <path d="M230 170 L260 170 L250 195 L240 195 Z" stroke="hsl(var(--foreground))" strokeWidth="1" fill="none" />
              <line x1="245" y1="195" x2="245" y2="210" stroke="hsl(var(--foreground))" strokeWidth="1" />

              {/* Decision diamonds */}
              <polygon points="290,200 310,215 290,230 270,215" stroke="hsl(var(--foreground))" strokeWidth="1" fill="none" />
              <text x="290" y="218" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="5.5" fontFamily="'JetBrains Mono', monospace">D1</text>

              <polygon points="345,175 365,190 345,205 325,190" stroke="hsl(var(--foreground))" strokeWidth="1" fill="none" />
              <text x="345" y="193" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="5.5" fontFamily="'JetBrains Mono', monospace">D2</text>

              <polygon points="370,230 390,245 370,260 350,245" stroke="hsl(var(--foreground))" strokeWidth="1" fill="none" />
              <text x="370" y="248" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="5.5" fontFamily="'JetBrains Mono', monospace">D3</text>

              {/* Internal connecting lines */}
              <line x1="245" y1="210" x2="270" y2="215" stroke="hsl(var(--foreground))" strokeWidth="0.75" />
              <line x1="310" y1="215" x2="325" y2="190" stroke="hsl(var(--foreground))" strokeWidth="0.75" />
              <line x1="310" y1="215" x2="350" y2="245" stroke="hsl(var(--foreground))" strokeWidth="0.75" />
              <line x1="365" y1="190" x2="420" y2="180" stroke="hsl(var(--foreground))" strokeWidth="0.75" />
              <line x1="390" y1="245" x2="420" y2="245" stroke="hsl(var(--foreground))" strokeWidth="0.75" />
              <line x1="290" y1="200" x2="290" y2="180" stroke="hsl(var(--foreground))" strokeWidth="0.75" />
              <line x1="290" y1="180" x2="325" y2="190" stroke="hsl(var(--foreground))" strokeWidth="0.75" />

              {/* Exit point from core box */}
              <line x1="420" y1="180" x2="440" y2="180" stroke="hsl(var(--foreground))" strokeWidth="1" />
              <line x1="420" y1="205" x2="440" y2="205" stroke="hsl(var(--foreground))" strokeWidth="1" />
              <line x1="420" y1="245" x2="440" y2="245" stroke="hsl(var(--foreground))" strokeWidth="1" />

              {/* === RIGHT SIDE: Clean Output Streams === */}
              <text x="460" y="142" fill="hsl(var(--muted-foreground))" fontSize="7" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.1em">OUTPUT STREAMS</text>

              {/* Stream 1: Structured Decisions – Orange */}
              <line x1="440" y1="180" x2="480" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <circle cx="490" cy="180" r="5" fill="hsl(var(--primary))" />
              <text x="502" y="178" fill="hsl(var(--foreground))" fontSize="7.5" fontFamily="Inter, sans-serif" fontWeight="500">Structured Decisions</text>
              <text x="502" y="189" fill="hsl(var(--muted-foreground))" fontSize="6" fontFamily="'JetBrains Mono', monospace">(Human-in-the-Loop)</text>

              {/* Stream 2: Autonomous Workflows – Orange */}
              <line x1="440" y1="205" x2="480" y2="230" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <circle cx="490" cy="230" r="5" fill="hsl(var(--primary))" />
              <text x="502" y="228" fill="hsl(var(--foreground))" fontSize="7.5" fontFamily="Inter, sans-serif" fontWeight="500">Autonomous Workflows</text>
              <text x="502" y="239" fill="hsl(var(--muted-foreground))" fontSize="6" fontFamily="'JetBrains Mono', monospace">(AI &amp; Automation)</text>

              {/* Stream 3: Exception Handling – Grey */}
              <line x1="440" y1="245" x2="480" y2="280" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              <circle cx="490" cy="280" r="5" fill="hsl(var(--muted-foreground))" opacity="0.6" />
              <text x="502" y="278" fill="hsl(var(--muted-foreground))" fontSize="7.5" fontFamily="Inter, sans-serif" fontWeight="500">Exception Handling</text>
              <text x="502" y="289" fill="hsl(var(--muted-foreground))" fontSize="6" fontFamily="'JetBrains Mono', monospace">(Routed for Review)</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
