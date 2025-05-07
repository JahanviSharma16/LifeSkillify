const Categories = () => {
  return (
    <section className="min-h-screen px-4 md:px-12 lg:px-32 py-16 bg-Background text-white flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary text-center">
        Skill Categories
      </h2>
      <div className="h-1 w-32 md:w-40 mb-6 mx-auto bg-gradient-to-r from-Background via-white to-Background animate-gradient" />
      <p className="text-grayMid text-lg max-w-2xl text-center mb-12">
        Explore the key areas where you’ll build habits, strengthen your
        mindset, and grow daily.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {/* Card 1 */}
        <div className="bg-white/5 border border-primary/30 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-primary transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-primary">Communication</h3>
          <p className="text-grayMid">
            Sharpen how you speak, listen, and express with confidence in every
            conversation.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/5 border border-primary/30 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-primary transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-primary">Productivity</h3>
          <p className="text-grayMid">
            Learn how to manage your time, focus better, and get things done
            without burnout.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 border border-primary/30 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-primary transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-primary">
            Mental Resilience
          </h3>
          <p className="text-grayMid">
            Build inner strength to stay calm, bounce back, and handle stress
            with clarity.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white/5 border border-primary/30 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-primary transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-primary">
            Habits & Discipline
          </h3>
          <p className="text-grayMid">
            Create lasting habits and take consistent actions toward your
            personal goals.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white/5 border border-primary/30 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-primary transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-primary">
            Self-Awareness
          </h3>
          <p className="text-grayMid">
            Understand yourself better to improve decision-making, focus, and
            relationships.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white/5 border border-primary/30 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-primary transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-primary">
            Finance Basics
          </h3>
          <p className="text-grayMid">
            Learn simple and essential money management skills to handle your
            finances wisely.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
