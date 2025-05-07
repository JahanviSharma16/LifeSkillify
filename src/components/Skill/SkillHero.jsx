import { grow } from "../../helper/images";

const SkillHero = () => {
  return (
    <section className="relative min-h-screen w-full bg-Background text-white overflow-hidden">
      {/* Background Image */}
      <img src={grow} alt="" className="w-full h-full object-cover absolute top-0 left-0 z-0 " />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-Background to-darkshade opacity-70 z-10" />

      {/* Text Content */}
      <div className="absolute bottom-24 left-0 z-20 p-6 md:p-12 max-w-4xl px-6 md:px-32">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-400 mb-4">
          Choose Your Path to Growth
        </h1>
        <p className="text-sm md:text-lg text-gray-300 mb-6">
          Discover skills that elevate your daily life. Whether you're into communication,
          productivity, or personal finance — find your path and start learning in minutes.
        </p>
        <button className="px-6 py-3 border-2 border-primary bg-gradient-to-r from-darkshade to-Background rounded-full hover:brightness-110 transition duration-300">
          Explore Categories
        </button>
      </div>
    </section>
  );
};

export default SkillHero;
