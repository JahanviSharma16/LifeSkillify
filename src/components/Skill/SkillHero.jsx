import { grow } from "../../helper/images";

const SkillHero = () => {
  return (
  <section className="relative min-h-screen w-full bg-Background text-primary overflow-hidden">
  {/* Background Image */}
  <img
    src="https://img.freepik.com/free-photo/hands-working-digital-device-network-graphic-overlay_53876-132150.jpg?semt=ais_hybrid&w=740"
    alt="" // Consider adding alt text if image conveys meaning
    className="w-full h-full object-cover absolute top-0 left-0 z-0"
  />

  {/* Gradient Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-Background to-primary opacity-90 z-10" />

  {/* Text Content */}
  <div className="absolute bottom-24 left-0 z-20 p-6 md:p-12 max-w-4xl px-6 md:px-32">
    <h1 className="text-2xl md:text-5xl font-bold text-primary mb-4">
      Choose Your Path to Growth
    </h1>
    <p className="text-sm md:text-lg text-secondary mb-6 max-w-lg">
      Discover skills that elevate your daily life. Whether you're into
      communication, productivity, or personal finance — find your path and
      start learning in minutes.
    </p>
    <button className="px-6 py-3 border-2 border-Accent bg-Accent text-white rounded-full hover:bg-Accent/90 transition duration-300">
      Explore Categories
    </button>
  </div>
</section>

  );
};

export default SkillHero;
