import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer className="py-16 bg-footer text-footer-foreground border-t border-border" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`max-w-5xl scroll-fade-in ${isVisible ? "visible" : ""}`}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
            <div>
              <div className="text-lg font-bold mb-2 text-foreground">
                GALLAG WORKS
              </div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
                Operational Engineering
              </span>
              <a
                href="mailto:hello@gallag.works"
                className="text-footer-foreground/70 hover:text-footer-foreground transition-colors text-sm font-mono"
              >
                hello@gallag.works
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <nav className="flex gap-6">
                <Link to="/services" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">Services</Link>
                <Link to="/about" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">The Principal</Link>
                <Link to="/case-studies" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">Case Studies</Link>
                <Link to="/contact" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">Contact</Link>
              </nav>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <p className="font-mono text-xs text-footer-foreground/50">
              © {currentYear} Gallag Works. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
