const CallToAction = () => {
  return (
    <section className="bg-Background text-white px-6 py-20 text-center ">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        Ready to Transform Your Life?
      </h2>
      <div className="h-1 w-32 md:w-40 mb-6 mx-auto bg-gradient-to-r from-Background via-white to-Background animate-gradient" />
      <p className="text-lg md:text-xl text-grayMid max-w-2xl mx-auto mb-10">
        Join thousands of learners building strong, confident, and consistent
        habits—one daily lesson at a time.
      </p>
      <button className="px-4 py-2 border-2 border-primary bg-gradient-to-t from-darkshade to-black text-white rounded-full hover:bg-primary transition duration-300">
        Start Your Journey Today 🚀
      </button>
    </section>
  );
};

export default CallToAction;
