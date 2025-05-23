const Works = () => {
  return (
   <section className="min-h-screen px-4 md:px-12 lg:px-32 py-16 bg-[#F9FAFB] text-[#111827] flex flex-col items-center">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#111827] text-center">
    How It Works
  </h2>
  <div className="h-1 w-32 md:w-40 mb-6 mx-auto bg-gradient-to-r from-[#F9FAFB] via-[#3B82F6] to-[#F9FAFB] animate-gradient" />
  <p className="text-[#6B7280] text-lg max-w-2xl text-center mb-12">
    LifeSkillify simplifies growth with three simple steps that fit into your daily life.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
    {/* Step 1 */}
    <div className="p-6 rounded-xl bg-gradient-to-br from-[#EFF6FF] to-white shadow-md border border-[#E5E7EB] transition-transform hover:-translate-y-2">
      <h3 className="text-xl font-bold mb-2 text-[#111827]">
        1. Get Your Daily Lesson
      </h3>
      <p className="text-[#6B7280]">
        Receive a new, bite-sized life skill lesson every day – delivered straight to your dashboard.
      </p>
    </div>

    {/* Step 2 */}
    <div className="p-6 rounded-xl bg-gradient-to-br from-[#F0FDF4] to-white shadow-md border border-[#E5E7EB] transition-transform hover:-translate-y-2">
      <h3 className="text-xl font-bold mb-2 text-[#111827]">
        2. Practice & Reflect
      </h3>
      <p className="text-[#6B7280]">
        Take a minute to reflect and apply it through engaging micro-practices and challenges.
      </p>
    </div>

    {/* Step 3 */}
    <div className="p-6 rounded-xl bg-gradient-to-br from-[#FEF9F5] to-white shadow-md border border-[#E5E7EB] transition-transform hover:-translate-y-2">
      <h3 className="text-xl font-bold mb-2 text-[#111827]">
        3. Track Your Growth
      </h3>
      <p className="text-[#6B7280]">
        Watch your growth unfold with weekly insights and achievements to keep you motivated.
      </p>
    </div>
  </div>
</section>

  );
};

export default Works;
