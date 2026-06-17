import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import gallagWordmark from "@/assets/gallag-wordmark.png";

const ease = [0.16, 1, 0.3, 1] as const;

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);
      if (window.innerWidth < 768) {
        setIsHidden(currentY > lastScrollY.current && currentY > 80);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/services", label: "Services" },
    { to: "/diagnostic", label: "Diagnostic" },
    { to: "/about", label: "The Founder" },
    { to: "/insights", label: "Case Studies" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{
        y: isHidden && !isMobileMenuOpen ? -100 : 0,
        opacity: 1,
      }}
      transition={{ duration: 0.5, ease }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        isScrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border/60"
          : "bg-background/40 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center" aria-label="Gallag Works">
            <img
              src={gallagWordmark}
              alt="Gallag Works"
              className="h-8 transition-opacity duration-300 hover:opacity-80"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group relative px-4 py-2 text-sm font-medium"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      active
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-px origin-left bg-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              to="/contact"
              className="group relative ml-4 inline-flex h-10 items-center gap-2 overflow-hidden rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
                Request a Consultation
              </span>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              className="p-2 active:scale-90 transition-transform"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease }}
              className="md:hidden overflow-hidden bg-background border-t border-border"
            >
              <div className="flex flex-col gap-4 py-4">
                <div className="px-4">
                  <Link
                    to="/contact"
                    className="block w-full text-center rounded-lg bg-primary text-primary-foreground py-3 text-sm font-medium"
                  >
                    Request a Consultation
                  </Link>
                </div>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.05, ease }}
                  >
                    <Link
                      to={link.to}
                      className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
