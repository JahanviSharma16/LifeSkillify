const SkillMatter = () => {
  return (
    <section className="px-4 md:px-12 lg:px-32 py-20 min-h-screen bg-Background text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary">
          Why Life Skills Matter
        </h2>

        {/* Animated Gradient Line */}
        <div className="h-1 w-32 md:w-40 mb-6 mx-auto bg-gradient-to-r from-Background via-white to-Background animate-gradient" />

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 px-4">
          In today’s fast-paced world, academic knowledge alone isn’t enough.
          Life skills like emotional intelligence, communication, resilience,
          and personal finance are the real tools that empower you to lead a
          balanced, successful, and fulfilling life.
        </p>

        {/* Skill Icons Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {[
            { title: "Communication", icon: "🗣️" },
            { title: "Emotional Intelligence", icon: "🧠" },
            { title: "Personal Finance", icon: "💰" },
            { title: "Productivity", icon: "📈" },
          ].map((skill, idx) => (
            <div
              key={idx}
              className="bg-darkshade border border-gray-700 rounded-xl p-6 flex flex-col items-center shadow-md hover:scale-105 transition-transform duration-300"
            >
              <span className="text-4xl mb-3">{skill.icon}</span>
              <p className="text-lg font-semibold text-white">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillMatter;
