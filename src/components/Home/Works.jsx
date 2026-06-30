import homeData from "../../data/home.json";

const Works = () => {
  const { howItWorks } = homeData;

  return (
    <section id="how-it-works" className="px-4 md:px-12 lg:px-32 py-24 md:py-32 bg-Background">
      <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">
          {howItWorks.eyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-5">
          {howItWorks.title}
        </h2>
        <p className="text-lg text-grayMid">{howItWorks.description}</p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden md:block" />

        <div className="space-y-12 md:space-y-16">
          {howItWorks.steps.map((step, idx) => (
            <div key={idx} className="relative flex gap-8 md:gap-12 items-start">
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-sm md:text-base shadow-card z-10 ring-2 ring-accent/20">
                {step.number}
              </div>
              <div className="flex-grow pt-1 md:pt-2">
                <h3 className="text-xl md:text-2xl font-bold text-text mb-3">
                  {step.title}
                </h3>
                <p className="text-grayMid leading-relaxed mb-3 max-w-xl">
                  {step.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accentDark">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
