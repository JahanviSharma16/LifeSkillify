import { useState } from "react";
import skills from "../../helper/skillsData";

const TodaysSkillCard = () => {
  const [started, setStarted] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(skills[0]);
  const [imgIndex, setImgIndex] = useState(0);

  const handleStart = () => {
    setStarted(true);
  };

  const showAnotherSkill = () => {
    let randomSkill;
    do {
      randomSkill = skills[Math.floor(Math.random() * skills.length)];
    } while (randomSkill.id === currentSkill.id); // Avoid same skill
    setCurrentSkill(randomSkill);
    setImgIndex(0); // reset image index when changing skill
  };

  const nextImage = () => {
    setImgIndex((prev) =>
      prev === currentSkill.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setImgIndex((prev) =>
      prev === 0 ? currentSkill.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-Background text-white pt-32 px-4 md:px-10 lg:px-20 pb-10 shadow-lg min-h-screen">
      {!started ? (
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
            Ready to grow today?
          </h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg max-w-xl">
            Click the button below to start your micro-lesson and build your daily life skills. Stay consistent and track your progress!
          </p>
          <button
            onClick={handleStart}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Start Today’s Skill
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full md:w-[70%] mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">{currentSkill.title}</h2>
            <p className="mb-4 text-grayDark text-sm md:text-base">{currentSkill.description}</p>

            <div className="relative mb-6 w-full h-56 md:h-72 lg:h-96">
              <img
                src={currentSkill.images[imgIndex]}
                alt={`Skill step ${imgIndex + 1}`}
                className="w-full h-full object-cover rounded"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full px-3 py-1 shadow"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full px-3 py-1 shadow"
              >
                ▶
              </button>
            </div>

            {currentSkill.content?.map((section, index) => (
              <div key={index} className="mb-6 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-accent mb-2">{section.heading}</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="mb-2 font-medium text-base md:text-lg">Want to learn more today?</p>
            <button
              onClick={showAnotherSkill}
              className="bg-amber text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300"
            >
              Show Me Another Skill
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodaysSkillCard;
