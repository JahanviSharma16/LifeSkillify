import { Link } from "react-router-dom";
import homeData from "../../data/home.json";

const Hero = () => {
  const { hero } = homeData;

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pb-28">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-3xl" />

      <div className="relative px-4 md:px-12 lg:px-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accentLight/80 backdrop-blur border border-accent/20 text-accentDark text-sm font-medium rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {hero.eyebrow}
            </span>

            <h1 className="text-[2.75rem] md:text-5xl lg:text-[3.5rem] font-bold text-text leading-[1.1] tracking-tight mb-6">
              {hero.title}{" "}
              <span className="text-accent">{hero.titleHighlight}</span>
            </h1>

            <p className="text-lg text-grayMid leading-relaxed max-w-lg mb-10">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to={hero.ctaLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl shadow-elevated hover:bg-primaryDark transition-all duration-300 hover:-translate-y-0.5"
              >
                {hero.ctaText}
              </Link>
              <Link
                to={hero.secondaryLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-grayDark font-semibold rounded-2xl border border-grayLight hover:border-accent hover:text-accentDark transition-all duration-300"
              >
                {hero.secondaryCta}
              </Link>
            </div>

            <div className="flex gap-8 pt-8 border-t border-grayLight/80">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-text">{stat.value}</div>
                  <div className="text-sm text-grayMid mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-transparent rounded-[2rem] blur-2xl" />
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-elevated border border-grayLight overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60" />
              <div className="px-6 py-4 border-b border-grayLight bg-surfaceAlt/50 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-grayMid">
                  {hero.preview.label}
                </span>
                <span className="text-xs font-medium text-accentDark bg-accentLight px-2.5 py-1 rounded-full">
                  {hero.preview.duration}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-accent uppercase tracking-wide">{hero.preview.category}</span>
                <h3 className="text-xl font-bold text-text mt-2 leading-snug">
                  {hero.preview.title}
                </h3>
                <div className="mt-6 h-1 bg-grayLight rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-accent rounded-full" />
                </div>
                <p className="text-xs text-grayMid mt-2">Ready to start</p>
                <Link
                  to={hero.ctaLink}
                  className="mt-6 w-full flex items-center justify-center py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primaryDark transition"
                >
                  Begin Lesson →
                </Link>
              </div>
              <div className="px-6 py-4 bg-accentLight/30 border-t border-grayLight flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["AM", "RS", "PK"].map((a) => (
                    <div
                      key={a}
                      className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-2 border-white"
                    >
                      {a}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-grayMid">847 learners completed today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
