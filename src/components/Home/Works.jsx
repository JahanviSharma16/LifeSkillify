const Works = () => {
  return (
    <section className="min-h-screen px-4 md:px-12 lg:px-32 py-16  bg-Background text-white flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary text-center">
        How It Works
      </h2>
      <div className="h-1 w-32 md:w-40 mb-6 mx-auto bg-gradient-to-r from-Background via-white to-Background animate-gradient" />
      <p className="text-grayMid text-lg max-w-2xl text-center mb-12">
        LifeSkillify simplifies growth with three simple steps that fit into
        your daily life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* Step 1 */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-[#00FFFF22] to-[#00000088] shadow-lg border border-[#00FFFF33] transition-transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2 text-primary">
            1. Get Your Daily Lesson
          </h3>
          <p className="text-grayMid">
            Receive a new, bite-sized life skill lesson every day – delivered
            straight to your dashboard.
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-[#32CD3222] to-[#00000088] shadow-lg border border-[#BF00FF33] transition-transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2 text-primary">
            2. Practice & Reflect
          </h3>
          <p className="text-grayMid">
            Take a minute to reflect and apply it through engaging
            micro-practices and challenges.
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-[#00FFFF22] to-[#00000088] shadow-lg border border-[#32CD3233] transition-transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2 text-primary">
            3. Track Your Growth
          </h3>
          <p className="text-grayMid">
            Watch your growth unfold with weekly insights and achievements to
            keep you motivated.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
