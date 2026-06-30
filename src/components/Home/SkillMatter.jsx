import homeData from "../../data/home.json";

const SkillMatter = () => {
  const { whyItMatters } = homeData;

  return (
    <section id="about" className="px-4 md:px-12 lg:px-32 py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="lg:sticky lg:top-32">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">
            {whyItMatters.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text leading-tight mb-6">
            {whyItMatters.title}
          </h2>
          <p className="text-lg text-grayMid leading-relaxed">
            {whyItMatters.description}
          </p>
        </div>

        <div className="space-y-0">
          {whyItMatters.points.map((point, idx) => (
            <div
              key={idx}
              className="group flex gap-6 py-8 border-b border-grayLight last:border-0 hover:pl-2 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accentLight border border-accent/10 flex items-center justify-center text-2xl group-hover:border-accent/30 transition-colors">
                {point.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-text mb-2">{point.title}</h3>
                <p className="text-grayMid leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillMatter;
