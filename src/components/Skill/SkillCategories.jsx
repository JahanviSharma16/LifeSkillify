import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import courses from "../../helper/courses";

// Dummy category list
const categories = [
  { title: "Communication" },
  { title: "Time Management" },
  { title: "Personal Finance" },
  { title: "Mental Wellness" },
  { title: "Critical Thinking" },
  { title: "Productivity" },
  { title: "Self Discipline" },
  { title: "Emotional Intelligence" },
];

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
   <section className="py-20 px-6 bg-Background text-primary">
  <div>
    <h2 className="text-3xl font-bold text-center mb-10">
      Explore by Category
    </h2>

    {/* Category Buttons */}
    <div className="flex items-center justify-center space-x-4 max-w-screen-lg mx-auto">
      <button
        onClick={() => handleArrowClick("left")}
        disabled={startIndex === 0}
        aria-label="Scroll categories left"
        className="p-2 rounded-full border border-Borders hover:bg-Accent hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaArrowLeftLong />
      </button>

      <div className="flex gap-4 overflow-x-auto no-scrollbar" role="list">
        {visibleCategories.map((category) => (
          <button
            key={category.title}
            onClick={() =>
              setSelectedCategory(
                selectedCategory === category.title ? null : category.title
              )
            }
            className={`min-w-[150px] md:py-3 py-1 md:px-6 px-2 rounded-lg border transition duration-300 ${
              selectedCategory === category.title
                ? "bg-Accent text-white border-Accent"
                : "bg-Highlight text-primary border-Borders hover:bg-Accent hover:text-white"
            }`}
            aria-pressed={selectedCategory === category.title}
            role="listitem"
          >
            {category.title}
          </button>
        ))}
      </div>

      <button
        onClick={() => handleArrowClick("right")}
        disabled={startIndex + categoriesPerPage >= categories.length}
        aria-label="Scroll categories right"
        className="p-2 rounded-full border border-Borders hover:bg-Accent hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaArrowRightLong />
      </button>
    </div>
  </div>

  {/* Courses Grid */}
  <div className="max-w-7xl mx-auto pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-6 md:px-0">
    {filteredCourses.length > 0 ? (
      filteredCourses.map((course) => (
        <article
          key={course.id}
          className="bg-white text-primary rounded-lg shadow-md flex flex-col overflow-hidden border border-Borders"
        >
          <img
            src={course.image}
            alt={`Cover image for ${course.title}`}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
            <div>
              <span className="text-xs text-secondary">{course.category}</span>
              <h3 className="text-lg font-bold mt-1">{course.title}</h3>
              <p className="text-sm text-secondary mt-2">
                {course.description.length > 100
                  ? course.description.substring(0, 100) + "..."
                  : course.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-secondary">
                👤 {course.users} users
              </span>
              <Link
                to={`/course-details/${course.id}`}
                className="text-Accent font-bold underline underline-offset-8 flex items-center"
                aria-label={`Read more about ${course.title}`}
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      ))
    ) : (
      <p className="text-secondary text-center col-span-full">
        No courses found for this category.
      </p>
    )}
  </div>
</section>

  );
};

export default SkillCategories;
