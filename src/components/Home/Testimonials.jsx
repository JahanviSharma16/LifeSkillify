const Testimonials = () => {
  return (
  <section className="bg-[#F9FAFB] text-[#111827] min-h-screen px-4 md:px-12 lg:px-32 py-20">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-[#111827]">
    What Our Learners Say
  </h2>
  <div className="h-1 w-32 md:w-40 mb-6 mx-auto bg-gradient-to-r from-[#F9FAFB] via-[#3B82F6] to-[#F9FAFB] animate-gradient" />
  <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
    Real experiences from people who’ve leveled up their life through LifeSkillify.
  </p>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {/* Testimonial 1 */}
    <div className="bg-white border border-[#E5E7EB] p-6 rounded-xl shadow hover:shadow-md transition">
      <p className="text-[#374151] italic mb-4">
        “LifeSkillify helped me get out of a rut and build strong habits again. The daily lessons feel personal and actionable.”
      </p>
      <div className="font-bold text-[#3B82F6]">— Ananya M., Student</div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white border border-[#E5E7EB] p-6 rounded-xl shadow hover:shadow-md transition">
      <p className="text-[#374151] italic mb-4">
        “The micro-lessons fit perfectly into my busy work schedule. I’ve become more mindful and confident at work.”
      </p>
      <div className="font-bold text-[#3B82F6]">— Rohan S., Marketing Exec</div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white border border-[#E5E7EB] p-6 rounded-xl shadow hover:shadow-md transition">
      <p className="text-[#374151] italic mb-4">
        “The mental resilience tips helped me a lot during tough times. I feel more in control of my emotions.”
      </p>
      <div className="font-bold text-[#3B82F6]">— Priya K., Freelancer</div>
    </div>
  </div>
</section>

  );
};

export default Testimonials;
