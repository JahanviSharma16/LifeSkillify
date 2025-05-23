const Categories = () => {
  return (
    <section className="min-h-screen px-4 md:px-12 lg:px-32 py-16 bg-[#F9FAFB] text-[#111827] flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#111827] text-center">
        Skill Categories
      </h2>
      <div className="h-1 w-32 md:w-40 mb-6 mx-auto bg-gradient-to-r from-[#F9FAFB] via-[#3B82F6] to-[#F9FAFB] animate-gradient" />
      <p className="text-[#6B7280] text-lg max-w-2xl text-center mb-12">
        Explore the key areas where you’ll build habits, strengthen your
        mindset, and grow daily.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {[
          {
            title: "Communication",
            text: "Sharpen how you speak, listen, and express with confidence in every conversation.",
          },
          {
            title: "Productivity",
            text: "Learn how to manage your time, focus better, and get things done without burnout.",
          },
          {
            title: "Mental Resilience",
            text: "Build inner strength to stay calm, bounce back, and handle stress with clarity.",
          },
          {
            title: "Habits & Discipline",
            text: "Create lasting habits and take consistent actions toward your personal goals.",
          },
          {
            title: "Self-Awareness",
            text: "Understand yourself better to improve decision-making, focus, and relationships.",
          },
          {
            title: "Finance Basics",
            text: "Learn simple and essential money management skills to handle your finances wisely.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow hover:shadow-md transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-[#111827]">
              {card.title}
            </h3>
            <p className="text-[#6B7280]">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
