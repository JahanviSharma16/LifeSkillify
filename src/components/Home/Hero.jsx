import { CardStackDemo } from "./Cards";

const Hero = () => {
  return (
    <section className="px-4 md:px-12 lg:px-32 py-12 min-h-screen bg-[#F9FAFB] flex flex-col lg:grid lg:grid-cols-2 items-center gap-12">
      {/* Text Content */}
      <div className="px-4 py-6 rounded-lg text-[#111827] text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#111827]">
          LifeSkillify
        </h1>

        {/* 🟢 Animated Line */}
        <div className="h-1 w-32 md:w-40 mb-6 mx-auto lg:mx-0 bg-gradient-to-r from-[#F9FAFB] via-[#3B82F6] to-[#F9FAFB] animate-gradient" />

        <p className="text-base md:text-lg text-[#6B7280] max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-[#111827]">LifeSkillify</span> —
          your daily destination for mastering essential life skills. Whether
          it's improving your communication, building better habits, managing
          personal finance, or staying mentally resilient, we deliver one
          focused lesson every day to help you grow consistently and confidently
          in your everyday life. 🌱
        </p>

        {/* 🌱 CTA Button */}
        <button className="mt-8 px-6 py-3 border-2 border-[#3B82F6] bg-[#EFF6FF] text-[#111827] font-semibold rounded-full shadow-md hover:bg-[#3B82F6] hover:text-white transition duration-300">
          Start Growing Today
        </button>
      </div>

      {/* Card Stack */}
      <div className="w-full flex justify-center">
        <CardStackDemo />
      </div>
    </section>
  );
};

export default Hero;
