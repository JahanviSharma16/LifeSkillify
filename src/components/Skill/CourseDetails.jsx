import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import courses from "../../helper/courses";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div className="text-white text-center py-10">Course not found.</div>;
  }

  return (
    <div className="bg-Background min-h-screen text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-primary underline mb-6 inline-block">
          ← Back to Courses
        </Link>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h1 className="text-3xl font-bold mt-6">{course.title}</h1>
        <p className="text-gray-300 mt-2">{course.details.intro}</p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {course.details.questions.map((qna, index) => (
              <div key={index} className="bg-darkshade p-4 rounded-lg">
                <h3 className="font-semibold text-lg text-primary">
                  Q: {qna.question}
                </h3>
                <p className="text-gray-300 mt-1">A: {qna.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
