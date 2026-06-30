import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import courses from "../../data/courses.json";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="bg-Background min-h-screen">
        <Navbar />
        <div className="text-center py-32 pt-28">
          <h1 className="text-2xl font-bold text-text mb-4">Course not found</h1>
          <Link to="/skill" className="text-accentDark hover:text-accent transition">
            ← Back to Skills
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { details } = course;

  return (
    <div className="bg-Background min-h-screen text-text">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-28">
        <Link to="/skill" className="text-accentDark font-medium hover:text-accent mb-8 inline-flex items-center gap-2">
          ← Back to Skills
        </Link>

        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-elevated"
        />

        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm font-medium text-accentDark bg-accentLight border border-accent/10 px-3 py-1 rounded-full">
              {course.category}
            </span>
            <span className="text-sm text-grayMid">{course.duration}</span>
            <span className="text-sm text-grayMid">•</span>
            <span className="text-sm text-grayMid">{course.difficulty}</span>
            <span className="text-sm text-grayMid">•</span>
            <span className="text-sm text-grayMid">{course.lessons} lessons</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-text">{course.title}</h1>
          <p className="text-grayMid mt-4 text-lg leading-relaxed">{details.intro}</p>
          <p className="text-sm text-grayMid mt-3">{course.users.toLocaleString()} learners enrolled</p>
        </div>

        <div className="mt-10 bg-surface rounded-2xl border border-grayLight p-8 shadow-card">
          <h2 className="text-xl font-bold mb-5 text-text">What You&apos;ll Learn</h2>
          <ul className="space-y-3">
            {details.learningOutcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-3 text-grayDark">
                <span className="text-accent mt-0.5">✓</span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        {details.lessons && (
          <div className="mt-8 bg-surface rounded-2xl border border-grayLight p-8 shadow-card">
            <h2 className="text-xl font-bold mb-5 text-text">Course Curriculum</h2>
            <div className="space-y-3">
              {details.lessons.map((lesson, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3 px-4 rounded-xl bg-Background border border-grayLight"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-accentLight text-accentDark text-sm font-bold flex items-center justify-center border border-accent/10">
                      {i + 1}
                    </span>
                    <span className="text-grayDark font-medium">{lesson.title}</span>
                  </div>
                  <span className="text-sm text-grayMid">{lesson.duration}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-5 text-text">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {details.questions.map((qna, index) => (
              <div key={index} className="bg-surface border border-grayLight p-6 rounded-2xl shadow-card">
                <h3 className="font-semibold text-text mb-2">{qna.question}</h3>
                <p className="text-grayMid leading-relaxed">{qna.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/todayskill"
            className="inline-block px-8 py-3.5 bg-primary text-white font-semibold rounded-xl shadow-card hover:bg-primaryDark transition"
          >
            Start Learning Today
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;
