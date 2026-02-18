import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gallagWordmark from "@/assets/gallag-wordmark.png";
import gallagWordmarkFooter from "@/assets/gallag-wordmark-footer.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FooterProps {
  hideCTA?: boolean;
}

const Footer = ({ hideCTA = false }: FooterProps) => {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <footer className="bg-footer text-footer-foreground">
      {/* CTA Section */}
      {!hideCTA && (
        <div className="border-t border-border" ref={ctaRef}>
          <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-40">
            <div className={`max-w-2xl clip-reveal ${ctaVisible ? "visible" : ""}`}>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                Stop the leakage. <span className="text-primary">Start the Engineering.</span>
              </h2>
              <p className="text-foreground/70 font-light mb-8 max-w-[720px]">
                Request an Operational X-Ray to quantify your margin recovery opportunity.
              </p>
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
      )}

      {/* Footer Grid */}
      <div className="border-t border-border" ref={gridRef}>
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className={`scroll-fade-in ${gridVisible ? "visible" : ""}`}>
            <div className="mb-12">
              <img src={gallagWordmarkFooter} alt="Gallag Works – Operational Engineering" className="h-8 object-contain" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

              {/* Column 2: Nav */}
              <div>
                <span className="font-mono text-xs text-footer-foreground/50 tracking-widest uppercase block mb-4">
                  [NAV]
                </span>
                <nav className="flex flex-col gap-3">
                  <Link to="/services" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">Services</Link>
                  <Link to="/about" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">The Principal</Link>
                  <Link to="/insights" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">Insights</Link>
                  <Link to="/contact" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">Contact</Link>
                </nav>
              </div>

              {/* Column 3: Connect */}
              <div>
                <span className="font-mono text-xs text-footer-foreground/50 tracking-widest uppercase block mb-4">
                  [CONNECT]
                </span>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:hello@gallag.works"
                    className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors"
                  >
                    hello@gallag.works
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bengallagher/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Column 4: Legal */}
              <div>
                <span className="font-mono text-xs text-footer-foreground/50 tracking-widest uppercase block mb-4">
                  [LEGAL]
                </span>
                <nav className="flex flex-col gap-3">
                  <Link to="/privacy" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">Privacy Policy</Link>
                  <Link to="/cookies" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">Cookie Policy</Link>
                  <Link to="/glossary" className="text-sm text-footer-foreground/70 hover:text-primary transition-colors">Glossary</Link>
                </nav>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-border pt-6">
              <p className="font-mono text-xs text-footer-foreground/50">
                © 2026 Gallag Works Ltd. Registered in England &amp; Wales: 17033965.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
