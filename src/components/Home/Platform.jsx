import { Link } from "react-router-dom";
import homeData from "../../data/home.json";

const accentMap = {
  gold: "hover:border-accent/30 group-hover:bg-accentLight/40",
  slate: "hover:border-stone-300 group-hover:bg-stone-50/80",
  sand: "hover:border-amber-200/60 group-hover:bg-amber-50/30",
  blush: "hover:border-rose-200/60 group-hover:bg-rose-50/30",
};

const dotMap = {
  gold: "bg-accent",
  slate: "bg-stone-600",
  sand: "bg-amber-600/70",
  blush: "bg-rose-400/80",
};

const Platform = () => {
  const { platform } = homeData;

  return (
    <section className="px-4 md:px-12 lg:px-32 py-24 md:py-32 bg-surface border-y border-grayLight">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">
            {platform.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            {platform.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {platform.features.map((feature, idx) => (
            <Link
              key={idx}
              to={feature.link}
              className={`group relative p-8 md:p-10 rounded-3xl border border-grayLight bg-white transition-all duration-300 hover:shadow-elevated ${accentMap[feature.accent]}`}
            >
              <div className={`w-2 h-2 rounded-full ${dotMap[feature.accent]} mb-6`} />
              <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-accentDark transition-colors">
                {feature.title}
              </h3>
              <p className="text-grayMid leading-relaxed mb-6 max-w-sm">
                {feature.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accentDark">
                {feature.linkText}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;
