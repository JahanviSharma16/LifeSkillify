import { Link } from "react-router-dom";
import homeData from "../../data/home.json";

const CallToAction = () => {
  const { cta } = homeData;

  return (
    <section className="relative overflow-hidden px-4 md:px-12 lg:px-32 py-24 md:py-32">
      <div className="absolute inset-0 bg-cta-gradient" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
          {cta.title}
        </h2>
        <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {cta.description}
        </p>
        <Link
          to={cta.buttonLink}
          className="inline-flex items-center justify-center px-10 py-4 bg-accent text-white font-bold rounded-2xl shadow-gold hover:bg-accentDark transition-all duration-300 hover:-translate-y-0.5 text-lg"
        >
          {cta.buttonText}
        </Link>
        <p className="mt-6 text-sm text-stone-400">{cta.secondaryText}</p>
      </div>
    </section>
  );
};

export default CallToAction;
