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
                Cookie Policy.
              </h1>
              <p className="font-mono text-xs text-muted-foreground/50 mb-8">
                Effective date: 16 February 2026
              </p>

              <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">1. Our Approach.</h2>
                  <p>
                    At Gallag Works, we believe in operational integrity. This website is engineered to function efficiently without the use of non-essential cookies.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">2. Why you don't see a consent banner.</h2>
                  <p>
                    Under the UK GDPR and PECR, consent banners are required for "non-essential" cookies (such as those used for invasive tracking or advertising). Because we respect your privacy and have configured our site to avoid these technologies, a disruptive consent banner is not required.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">3. Analytics (PostHog Cookieless).</h2>
                  <p>
                    We use PostHog to understand site traffic. This is configured in memory-only mode with cookies disabled. We do not track you across other websites, and we do not store persistent identifiers on your device. This allows us to maintain your privacy while improving our operational content.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">4. Essential Cookies.</h2>
                  <p>
                    We may occasionally use strictly necessary cookies for security (such as CSRF protection) or to ensure our consultation form functions correctly. These cookies do not track your behaviour and are deleted when you close your browser.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">5. Managing your preferences.</h2>
                  <p>
                    While we do not use tracking cookies, you can choose to block all cookies via your browser settings. Please note that doing so may prevent certain technical features of the website (like form submissions) from working correctly.
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
