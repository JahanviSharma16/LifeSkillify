const CallToAction = () => {
  return (
    <section className="bg-[#F9FAFB] text-[#111827] px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
        Ready to Transform Your Life?
      </h2>
      <div className="h-1 w-32 md:w-40 mb-6 mx-auto bg-gradient-to-r from-[#F9FAFB] via-[#3B82F6] to-[#F9FAFB] animate-gradient" />
      <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto mb-10">
        Join thousands of learners building strong, confident, and consistent
        habits—one daily lesson at a time.
      </p>
      <button className="px-6 py-3 border-2 border-[#3B82F6] bg-[#3B82F6] text-white rounded-full hover:brightness-110 transition duration-300">
        Start Your Journey Today 🚀
      </button>
    </section>
  );
};

export default CallToAction;
