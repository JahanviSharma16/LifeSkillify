const MicroPreview = () => {
  return (
    <section className="py-16 bg-Background text-white text-center px-6">
      <h2 className="text-3xl font-bold mb-6">Learn in Micro Bites</h2>
      <p className="max-w-xl mx-auto text-gray-300 mb-10">
        Every skill is taught through quick, daily lessons—each under 7 minutes.
        Built for busy lives, designed for real growth.
      </p>
      <video
        controls
        className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        poster="/images/micro-preview.jpg"
        aria-label="Preview of a micro lesson video"
      >
        <source src="/videos/micro-lesson.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default MicroPreview;
