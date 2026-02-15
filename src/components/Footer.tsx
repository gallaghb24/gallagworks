import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer className="py-16 bg-footer text-footer-foreground" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`max-w-4xl mx-auto scroll-fade-in ${isVisible ? "visible" : ""}`}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
            <div>
              <div className="font-display text-lg font-semibold mb-4 text-primary">
                Intelligent Transformation Studio
              </div>
              <a
                href="mailto:hello@intelligenttransformation.studio"
                className="text-footer-foreground/70 hover:text-footer-foreground transition-colors text-sm"
              >
                hello@intelligenttransformation.studio
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <nav className="flex gap-6">
                <Link to="/services" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">Services</Link>
                <Link to="/about" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">Who we are</Link>
                <Link to="/case-studies" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">Case Studies</Link>
                <Link to="/contact" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">Contact</Link>
              </nav>
            </div>
          </div>

          <div className="border-t border-footer-foreground/10 pt-6">
            <p className="text-xs text-footer-foreground/50">
              © {currentYear} Intelligent Transformation Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
