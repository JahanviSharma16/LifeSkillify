import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import courses from "../../data/courses.json";
import categories from "../../data/categories.json";

const SkillCategories = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoriesPerPage = 5;

  const visibleCategories = categories.slice(
    startIndex,
    startIndex + categoriesPerPage
  );

  const handleArrowClick = (direction) => {
    if (direction === "left" && startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else if (
      direction === "right" &&
      startIndex + categoriesPerPage < categories.length
    ) {
      setStartIndex(startIndex + 1);
    }
  };

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : courses;

  return (
    <section id="categories" className="py-20 px-6 md:px-12 lg:px-32 bg-Background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3 text-text">
          Explore by Category
        </h2>
        <div className="section-divider mb-10 mx-auto" />

        <div className="flex items-center justify-center space-x-4 max-w-screen-lg mx-auto">
          <button
            onClick={() => handleArrowClick("left")}
            disabled={startIndex === 0}
            className="p-2.5 rounded-full border border-grayLight text-grayDark hover:bg-accentLight hover:border-accent/30 disabled:opacity-30 transition"
          >
            <FaArrowLeftLong />
          </button>

          <div className="flex gap-3 overflow-x-auto scrollbar-none">
            {visibleCategories.map((category, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category.title ? null : category.title
                  )
                }
                className={`min-w-[140px] py-2.5 px-5 rounded-xl border text-sm font-medium transition duration-300 ${
                  selectedCategory === category.title
                    ? "bg-primary text-white border-primary shadow-card"
                    : "bg-surface text-grayDark border-grayLight hover:border-accent/40 hover:text-accentDark"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleArrowClick("right")}
            disabled={startIndex + categoriesPerPage >= categories.length}
            className="p-2.5 rounded-full border border-grayLight text-grayDark hover:bg-accentLight hover:border-accent/30 disabled:opacity-30 transition"
          >
            <FaArrowRightLong />
          </button>
        </div>

        <div className="pt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-surface rounded-2xl shadow-card border border-grayLight flex flex-col overflow-hidden hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-accentDark bg-accentLight border border-accent/10 px-2.5 py-0.5 rounded-full">
                      {course.category}
                    </span>
                    <span className="text-xs text-grayMid">{course.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-text">{course.title}</h3>
                  <p className="text-sm text-grayMid mt-2 leading-relaxed flex-grow">
                    {course.description.length > 100
                      ? course.description.substring(0, 100) + "..."
                      : course.description}
                  </p>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-grayLight">
                    <span className="text-sm text-grayMid">
                      {course.users.toLocaleString()} learners
                    </span>
                    <Link
                      to={`/course-details/${course.id}`}
                      className="text-accentDark font-semibold text-sm hover:text-accent transition flex items-center gap-1.5"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-grayMid text-center col-span-full py-12">
              No courses found for this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillCategories;
