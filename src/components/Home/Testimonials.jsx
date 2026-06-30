import homeData from "../../data/home.json";

const Testimonials = () => {
  const { testimonials } = homeData;

  return (
    <section id="testimonials" className="px-4 md:px-12 lg:px-32 py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">
            {testimonials.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            {testimonials.title}
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="absolute -inset-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent rounded-3xl" />
          <blockquote className="relative bg-white rounded-3xl p-10 md:p-14 border border-grayLight shadow-elevated text-center">
            <div className="text-accent text-4xl font-serif leading-none mb-4">&ldquo;</div>
            <p className="text-xl md:text-2xl text-text leading-relaxed font-medium mb-8">
              {testimonials.featured.quote}
            </p>
            <footer className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm ring-2 ring-accent/30">
                {testimonials.featured.avatar}
              </div>
              <div>
                <cite className="not-italic font-bold text-text">{testimonials.featured.name}</cite>
                <p className="text-sm text-grayMid">{testimonials.featured.role}</p>
              </div>
              <span className="mt-2 inline-block text-xs font-semibold text-accentDark bg-accentLight px-3 py-1 rounded-full border border-accent/10">
                {testimonials.featured.metric}
              </span>
            </footer>
          </blockquote>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between py-6 px-2 border-t md:border-t-0 md:border-l border-grayLight md:pl-8 first:md:pl-0 first:md:border-l-0"
            >
              <p className="text-grayDark leading-relaxed mb-6 text-sm md:text-base">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accentLight border border-accent/10 text-accentDark font-bold text-xs flex items-center justify-center">
                  {item.avatar}
                </div>
                <div>
                  <div className="font-semibold text-text text-sm">{item.name}</div>
                  <div className="text-xs text-grayMid">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
