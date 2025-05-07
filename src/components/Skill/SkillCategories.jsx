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
    <section className="py-20 px-6 bg-Background text-white">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore by Category
        </h2>

        {/* Category Buttons */}
        <div className="flex items-center justify-center space-x-4 max-w-screen-lg mx-auto">
          <button
            onClick={() => handleArrowClick("left")}
            disabled={startIndex === 0}
            className="p-2 rounded-full border border-white hover:bg-white hover:text-Background transition"
          >
            <FaArrowLeftLong />
          </button>

          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {visibleCategories.map((category, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category.title ? null : category.title
                  )
                }
                className={`min-w-[150px] md:py-3 py-1 md:px-6 px-2 rounded-lg border transition duration-300 ${
                  selectedCategory === category.title
                    ? "bg-white text-Background"
                    : "bg-darkshade text-white border-white hover:bg-primary"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleArrowClick("right")}
            disabled={startIndex + categoriesPerPage >= categories.length}
            className="p-2 rounded-full border border-white hover:bg-white hover:text-Background transition"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-6 md:px-0">
    {filteredCourses.length > 0 ? (
      filteredCourses.map((course, index) => (
        <div
          key={index}
          className="bg-[#1a1a1a] text-white rounded-lg shadow-md flex flex-col overflow-hidden"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
            <div>
              <span className="text-xs text-gray-400">{course.category}</span>
              <h3 className="text-lg font-bold mt-1">{course.title}</h3>
              <p className="text-sm text-gray-300 mt-2">
                {course.description.length > 100
                  ? course.description.substring(0, 100) + "..."
                  : course.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-400">
                👤 {course.users} users
              </span>
              <div className="flex items-center">
                <Link
                  to={`/course-details/${course.id}`}
                  key={course.id}
                  className="text-white font-bold underline underline-offset-8"
                >
                  Read More
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p className="text-white text-center col-span-full">
        No courses found for this category.
      </p>
    )}
  </div>
    </section>
  );
};

export default SkillCategories;
