import { useState } from "react";
import skills from "../../data/skills.json";
import streakData from "../../data/streak.json";

function getTodaysSkill() {
  const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  return skills[day % skills.length];
}

const TodaysSkillCard = () => {
  const [started, setStarted] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(getTodaysSkill);
  const [imgIndex, setImgIndex] = useState(0);

  const handleStart = () => setStarted(true);

  const showAnotherSkill = () => {
    let randomSkill;
    do {
      randomSkill = skills[Math.floor(Math.random() * skills.length)];
    } while (randomSkill.id === currentSkill.id);
    setCurrentSkill(randomSkill);
    setImgIndex(0);
  };

  const nextImage = () => {
    setImgIndex((prev) => (prev === currentSkill.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setImgIndex((prev) => (prev === 0 ? currentSkill.images.length - 1 : prev - 1));
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="pt-28 px-4 md:px-10 lg:px-20 pb-16 min-h-screen">
      {!started ? (
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center py-16">
          <span className="inline-block px-4 py-1.5 bg-accentLight text-accentDark border border-accent/10 text-sm font-medium rounded-full mb-6">
            {today}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
            Ready to grow today?
          </h2>
          <p className="text-grayMid mb-8 text-base md:text-lg leading-relaxed">
            Your daily micro-lesson is ready. Build life skills in just 5 minutes — stay consistent and track your progress below.
          </p>

          <div className="bg-surface border border-grayLight rounded-2xl p-6 shadow-card w-full mb-8 text-left">
            <span className="text-xs font-medium text-accentDark bg-accentLight border border-accent/10 px-2.5 py-0.5 rounded-full">
              Today&apos;s Skill Preview
            </span>
            <h3 className="text-xl font-bold text-text mt-3">{currentSkill.title}</h3>
            <p className="text-grayMid text-sm mt-2">{currentSkill.description}</p>
            <div className="flex gap-4 mt-3 text-sm text-grayMid">
              <span>{currentSkill.duration}</span>
              <span>•</span>
              <span>{currentSkill.difficulty}</span>
              <span>•</span>
              <span>{currentSkill.category}</span>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="px-8 py-3.5 bg-primary text-white font-semibold rounded-xl shadow-card hover:bg-primaryDark transition duration-300"
          >
            Start Today&apos;s Skill
          </button>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-medium text-accentDark bg-accentLight border border-accent/10 px-2.5 py-0.5 rounded-full">
              {currentSkill.category}
            </span>
            <span className="text-sm text-grayMid">{currentSkill.duration}</span>
            <span className="text-sm text-grayMid">•</span>
            <span className="text-sm text-grayMid">{currentSkill.difficulty}</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-text">{currentSkill.title}</h2>
          <p className="mb-6 text-grayMid">{currentSkill.description}</p>

          <div className="relative mb-8 w-full h-56 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={currentSkill.images[imgIndex]}
              alt={`Skill step ${imgIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 text-text rounded-full w-10 h-10 flex items-center justify-center shadow-card hover:bg-white transition"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 text-text rounded-full w-10 h-10 flex items-center justify-center shadow-card hover:bg-white transition"
            >
              ▶
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {currentSkill.images.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === imgIndex ? "bg-accent" : "bg-white/60"}`}
                />
              ))}
            </div>
          </div>

          {currentSkill.content?.map((section, index) => (
            <div key={index} className="mb-6 bg-surface border border-grayLight rounded-2xl p-6 shadow-card">
              <h3 className="text-lg font-bold text-text mb-3">{section.heading}</h3>
              <ul className="space-y-2">
                {section.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-grayDark text-sm md:text-base">
                    <span className="text-accentDark mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-8 text-center bg-accentLight/50 rounded-2xl p-8">
            <p className="mb-4 font-medium text-text">Want to learn more today?</p>
            <button
              onClick={showAnotherSkill}
              className="px-6 py-3 bg-amber text-white font-semibold rounded-xl hover:bg-amber/90 transition duration-300"
            >
              Show Me Another Skill
            </button>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto mt-12 bg-surface border border-grayLight rounded-2xl p-8 shadow-card">
        <h2 className="text-xl font-bold mb-6 text-text">Your Progress</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-Background rounded-xl">
            <div className="text-2xl font-bold text-accentDark">{streakData.currentStreak}</div>
            <div className="text-sm text-grayMid mt-1">Day Streak</div>
          </div>
          <div className="text-center p-4 bg-Background rounded-xl">
            <div className="text-2xl font-bold text-accentDark">{streakData.longestStreak}</div>
            <div className="text-sm text-grayMid mt-1">Best Streak</div>
          </div>
          <div className="text-center p-4 bg-Background rounded-xl">
            <div className="text-2xl font-bold text-accentDark">{streakData.totalSkillsCompleted}</div>
            <div className="text-sm text-grayMid mt-1">Skills Done</div>
          </div>
        </div>
        <div className="space-y-2">
          {Object.entries(streakData.categoryCount).map(([category, count]) => (
            <div key={category} className="flex justify-between items-center py-2 border-b border-grayLight last:border-0">
              <span className="text-grayDark text-sm">{category}</span>
              <span className="text-sm text-grayMid">{count} skills</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodaysSkillCard;
