import { Link } from "react-router-dom";
import homeData from "../../data/home.json";

const Categories = () => {
  const { categories } = homeData;

  return (
    <section id="skills" className="px-4 md:px-12 lg:px-32 py-24 md:py-32 bg-Background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">
              {categories.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              {categories.title}
            </h2>
            <p className="text-grayMid text-lg">{categories.description}</p>
          </div>
          <Link
            to="/skill"
            className="inline-flex items-center gap-2 text-accentDark font-semibold hover:text-accent transition shrink-0"
          >
            View all skills →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {categories.items.map((cat, idx) => (
            <Link
              key={cat.id}
              to="/skill"
              className={`group relative overflow-hidden rounded-2xl border border-grayLight bg-white p-5 md:p-6 transition-all duration-300 hover:shadow-elevated hover:border-accent/25 hover:-translate-y-1 ${
                idx === 0 ? "md:col-span-2 md:row-span-2 md:p-8 bg-card-gradient" : ""
              }`}
            >
              {idx === 0 && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
              )}
              <span className={`block mb-3 ${idx === 0 ? "text-4xl" : "text-2xl"}`}>
                {cat.icon}
              </span>
              <h3
                className={`font-bold text-text group-hover:text-accentDark transition ${
                  idx === 0 ? "text-xl md:text-2xl mb-2" : "text-sm md:text-base mb-1"
                }`}
              >
                {cat.title}
              </h3>
              <p
                className={`text-grayMid leading-snug ${
                  idx === 0 ? "text-sm md:text-base" : "text-xs md:text-sm"
                }`}
              >
                {cat.description}
              </p>
              <span className="absolute bottom-4 right-4 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                {cat.lessonCount} lessons
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
