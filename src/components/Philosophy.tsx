const Philosophy = () => {
  return (
    <section className="py-16 lg:py-32 bg-warm-stone">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-primary uppercase tracking-widest mb-6 block">
            [PHILOSOPHY]
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-light mb-10 leading-tight tracking-tight">
            Automating a broken process just creates a faster mess.
          </h2>
          <div className="space-y-6 max-w-[600px]">
            <p className="text-lg text-on-light/70 leading-relaxed">
              Process before technology. You cannot scale a business on brute-force human effort, but you also cannot fix bad logic with shiny technology. I simplify the workflow first, kill the redundant steps, and build the automation second.
            </p>
            <p className="text-lg text-on-light/70 leading-relaxed">
              Adoption is the product. The best system in the world is worthless if nobody uses it. I design for the people who have to live inside these workflows every day — and I stay until it sticks.
            </p>
            <p className="text-lg text-on-light/70 leading-relaxed">
              Show the working. I don't hide behind proprietary frameworks or black-box methodologies. You understand exactly what I'm building, why, and how to run it without me. The goal is independence, not dependency.
            </p>
          </div>
          <p className="text-lg text-primary font-bold leading-relaxed max-w-[600px] mt-8">
            Everyone is buying AI tools. No one is designing how work should move through them. I do the latter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
