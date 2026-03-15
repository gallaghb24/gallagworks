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
        {/* Dark header */}
        <section className="pt-32 pb-16 bg-[#111113]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-[720px]">
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
                LEGAL
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
                Privacy Policy.
              </h1>
              <p className="font-mono text-xs text-white/50">
                Effective date: 16 February 2026
              </p>
            </div>
          </div>
        </section>

        {/* Light content */}
        <section className="py-16 lg:py-24 bg-warm-stone">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-[720px]">
              <p className="font-light leading-relaxed mb-8" style={{ color: '#333' }}>
                Gallag Works Ltd ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This policy explains how we handle information when you use gallag.works, submit our consultation form, or engage our services.
              </p>

              <div className="space-y-8 font-light leading-relaxed" style={{ color: '#333' }}>
                <div className="border-t border-black/[0.08] pt-8">
                  <h2 className="text-lg font-bold mb-4" style={{ color: '#111113' }}>1. Who we are.</h2>
                  <p className="mb-2">Data controller: Gallag Works Ltd</p>
                  <p className="mb-2">
                    Email:{" "}
                    <a href="mailto:hello@gallag.works" className="text-primary hover:text-primary/80 transition-colors">
                      hello@gallag.works
                    </a>
                  </p>
                  <p className="mb-2">Registered office: 1 Carpenters Arms Lane, Thornwood, Epping CM16 6LR</p>
                  <p>Company number: 17033965</p>
                </div>

                <div className="border-t border-black/[0.08] pt-8">
                  <h2 className="text-lg font-bold mb-4" style={{ color: '#111113' }}>2. Personal data we collect.</h2>
                  <p className="mb-4">
                    <span className="font-bold" style={{ color: '#111113' }}>A. Enquiries:</span> Identity and contact details (name, email, company, job title) and project requirements provided via our consultation form.
                  </p>
                  <p className="mb-4">
                    <span className="font-bold" style={{ color: '#111113' }}>B. Client Delivery:</span> Business contact details and operational information required to fulfill our contractual obligations.
                  </p>
                  <p>
                    <span className="font-bold" style={{ color: '#111113' }}>C. Website Usage (Anonymous):</span> We use PostHog for analytics. In our "cookieless" configuration, we do not store persistent identifiers or personal data in cookies. We collect truncated IP addresses and browser metadata to understand aggregate site performance without identifying individuals.
                  </p>
                </div>

                <div className="border-t border-black/[0.08] pt-8">
                  <h2 className="text-lg font-bold mb-4" style={{ color: '#111113' }}>3. Why we use your data.</h2>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>To respond to enquiries and take steps at your request before entering a contract (Lawful basis: Legitimate interests).</li>
                    <li>To provide and manage our services (Lawful basis: Contract).</li>
                    <li>For legal, accounting, and compliance purposes (Lawful basis: Legal obligation).</li>
                  </ul>
                </div>

                <div className="border-t border-black/[0.08] pt-8">
                  <h2 className="text-lg font-bold mb-4" style={{ color: '#111113' }}>4. International transfers &amp; Security.</h2>
                  <p>
                    We use trusted infrastructure providers (e.g., website hosting, email, and PostHog analytics). Where data is processed outside the UK, we ensure appropriate safeguards (such as UK-approved contractual protections) are in place. We maintain suitable technical measures to protect all personal data against unauthorized access.
                  </p>
                </div>

                <div className="border-t border-black/[0.08] pt-8">
                  <h2 className="text-lg font-bold mb-4" style={{ color: '#111113' }}>5. Data retention.</h2>
                  <ul className="space-y-3 list-disc list-inside">
                    <li><span className="font-bold" style={{ color: '#111113' }}>Enquiries:</span> Typically 18 months from last contact.</li>
                    <li><span className="font-bold" style={{ color: '#111113' }}>Client Records:</span> Typically 6 years after the end of the engagement for tax and legal reasons.</li>
                    <li><span className="font-bold" style={{ color: '#111113' }}>Analytics:</span> Anonymous aggregate data is retained for 1 year.</li>
                  </ul>
                </div>

                <div className="border-t border-black/[0.08] pt-8">
                  <h2 className="text-lg font-bold mb-4" style={{ color: '#111113' }}>6. Your rights.</h2>
                  <p>
                    You have the right to access, correct, or delete your personal data, and to object to processing based on legitimate interests. To exercise these rights, please contact us at the email address above. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO).
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
