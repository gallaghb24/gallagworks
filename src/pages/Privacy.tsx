import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Gallag Works";
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
                Privacy Policy
              </h1>

              <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">1. Who we are</h2>
                  <p>
                    Gallag Works Ltd is registered in England and Wales (Company No. 17033965). 
                    For any privacy-related enquiries, contact us at{" "}
                    <a href="mailto:hello@gallag.works" className="text-primary hover:text-primary/80 transition-colors">
                      hello@gallag.works
                    </a>.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">2. What data we collect</h2>
                  <p className="mb-4">
                    When you submit our contact form, we collect your name, email address, company name (optional), and message content. This data is stored securely and used solely to respond to your enquiry.
                  </p>
                  <p>
                    We use cookieless, anonymous analytics (PostHog) to understand how visitors use our site. No personal data is collected or stored by the analytics tool – no cookies, no fingerprinting, no cross-site tracking.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">3. How we use your data</h2>
                  <p>
                    Contact form submissions are used exclusively to respond to your enquiry and, where appropriate, to schedule a consultation. We do not sell, share, or transfer your data to third parties for marketing purposes.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">4. Data retention</h2>
                  <p>
                    Contact form data is retained for the duration of any ongoing business relationship and for a reasonable period thereafter. You may request deletion of your data at any time by emailing us.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">5. Your rights</h2>
                  <p>
                    Under UK GDPR, you have the right to access, rectify, or erase your personal data. To exercise any of these rights, contact{" "}
                    <a href="mailto:hello@gallag.works" className="text-primary hover:text-primary/80 transition-colors">
                      hello@gallag.works
                    </a>.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">6. Changes to this policy</h2>
                  <p>
                    We may update this policy from time to time. Any changes will be posted on this page.
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

export default Privacy;
