import { grow } from "../../helper/images";

const SkillHero = () => {
  return (
    <section className="relative min-h-[70vh] w-full bg-hero-gradient overflow-hidden pt-20">
      <img
        src={grow}
        alt="Growth"
        className="w-full h-full object-cover absolute top-0 left-0 z-0 opacity-20"
      />

      <div className="relative z-10 flex flex-col justify-center min-h-[60vh] p-6 md:p-12 lg:px-32 max-w-4xl">
        <span className="inline-block w-fit px-4 py-1.5 bg-accentLight text-accentDark text-sm font-medium rounded-full mb-6 border border-accent/10">
          8+ skill tracks available
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-text mb-5 leading-tight">
          Choose Your Path to Growth
        </h1>
        <p className="text-base md:text-lg text-grayMid mb-8 leading-relaxed max-w-2xl">
          Discover skills that elevate your daily life. Whether you&apos;re into communication,
          productivity, or personal finance — find your path and start learning in minutes.
        </p>
        <a
          href="#categories"
          className="w-fit px-8 py-3.5 bg-primary text-white font-semibold rounded-xl shadow-card hover:bg-primaryDark transition duration-300"
        >
          Explore Categories
        </a>
      </div>
    </section>
  );
};

export default SkillHero;
