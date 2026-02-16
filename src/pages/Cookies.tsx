import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Cookies = () => {
  useEffect(() => {
    document.title = "Cookie Policy | Gallag Works";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="pt-32 pb-20 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-[720px]">
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
                LEGAL
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8">
                Cookie Policy
              </h1>

              <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">We don't use cookies</h2>
                  <p>
                    This website does not set any cookies – first-party or third-party. There is nothing to accept, reject, or manage.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">Analytics</h2>
                  <p>
                    We use PostHog configured in strict cookieless mode. All analytics data is held in-memory only for the duration of your visit and is fully anonymous. No identifiers persist between sessions or across sites.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">Why no consent banner?</h2>
                  <p>
                    Because we don't use cookies or equivalent tracking technologies, no consent banner is required under UK GDPR or the Privacy and Electronic Communications Regulations (PECR).
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">Questions</h2>
                  <p>
                    If you have any questions about this policy, contact us at{" "}
                    <a href="mailto:hello@gallag.works" className="text-primary hover:text-primary/80 transition-colors">
                      hello@gallag.works
                    </a>.
                  </p>
                  <p className="mt-4 font-mono text-xs text-muted-foreground/50">
                    Last updated: February 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
