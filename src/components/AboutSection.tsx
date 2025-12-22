const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground">
              About us
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Intelligent Transformation Studio was founded on a simple observation: 
                too many organisations invest in technology before truly understanding how their work flows.
              </p>
              <p>
                We bring together deep expertise in operations, process design, and emerging technology 
                to help ambitious organisations work smarter—not just faster.
              </p>
              <p>
                Our team combines consulting rigour with hands-on technical capability, 
                enabling us to move seamlessly from strategy to implementation.
              </p>
              <p>
                We work with organisations across industries, from professional services 
                to media and beyond, united by a shared ambition to transform how work gets done.
              </p>
            </div>
          </div>

          {/* Abstract illustration placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 via-cream to-primary/5 rounded-3xl flex items-center justify-center">
              <div className="relative w-3/4 h-3/4">
                {/* Abstract shapes */}
                <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-primary/20 blur-xl" />
                <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-primary/15 blur-2xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/30" />
                
                {/* Decorative lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    opacity="0.2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
