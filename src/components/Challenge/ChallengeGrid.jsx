import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import challengesData from "../../data/challenges.json";

const STORAGE_KEY = "lifeskillify_joined_challenges";

const statusStyles = {
  active: "bg-accentLight text-accentDark border-accent/20",
  featured: "bg-amber-50 text-amber-800 border-amber-200/60",
  upcoming: "bg-stone-100 text-stone-600 border-stone-200",
};

const difficultyColors = {
  Easy: "text-accentDark",
  Medium: "text-amber-600",
  Hard: "text-red-600",
};

function loadJoinedChallenges() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

const ChallengeGrid = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [joinedIds, setJoinedIds] = useState(loadJoinedChallenges);
  const [toast, setToast] = useState(null);
  const { challenges } = challengesData;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(joinedIds));
  }, [joinedIds]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleJoin = (challenge) => {
    if (challenge.status === "upcoming") return;

    if (joinedIds.includes(challenge.id)) {
      setToast({ type: "info", message: `You're already in "${challenge.title}".` });
      return;
    }

    setJoinedIds((prev) => [...prev, challenge.id]);
    setToast({
      type: "success",
      message: `You've joined "${challenge.title}"! Start with Day 1 below.`,
    });
  };

  const isJoined = (id) => joinedIds.includes(id);

  return (
    <section className="px-6 md:px-12 lg:px-32 py-16">
      <div className="max-w-7xl mx-auto">
        {toast && (
          <div
            className={`mb-6 px-5 py-4 rounded-2xl border text-sm font-medium flex items-center justify-between gap-4 ${
              toast.type === "success"
                ? "bg-accentLight border-accent/20 text-accentDark"
                : "bg-stone-100 border-stone-200 text-grayDark"
            }`}
          >
            <span>{toast.message}</span>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="text-grayMid hover:text-text shrink-0"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        )}

        {joinedIds.length > 0 && (
          <div className="mb-8 p-5 bg-surface border border-grayLight rounded-2xl shadow-card">
            <h3 className="text-sm font-semibold text-text mb-1">
              Your Active Challenges ({joinedIds.length})
            </h3>
            <p className="text-sm text-grayMid mb-3">
              Keep going — complete daily tasks to earn your badge.
            </p>
            <div className="flex flex-wrap gap-2">
              {challenges
                .filter((c) => joinedIds.includes(c.id))
                .map((c) => (
                  <span
                    key={c.id}
                    className="text-xs font-medium text-accentDark bg-accentLight border border-accent/10 px-3 py-1.5 rounded-full"
                  >
                    ✓ {c.title}
                  </span>
                ))}
            </div>
          </div>
        )}

        <h2 className="text-2xl font-bold text-text mb-8">All Challenges</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => {
            const joined = isJoined(challenge.id);
            const isUpcoming = challenge.status === "upcoming";

            return (
              <div
                key={challenge.id}
                className="bg-surface rounded-2xl border border-grayLight shadow-card overflow-hidden hover:shadow-elevated transition-all duration-300 flex flex-col"
              >
                <div className="relative h-44">
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    className="w-full h-full object-cover"
                  />
                  <span
                    className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full border capitalize ${statusStyles[challenge.status]}`}
                  >
                    {joined ? "joined" : challenge.status}
                  </span>
                  {joined && (
                    <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary text-white">
                      ✓ Enrolled
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-accentDark bg-accentLight border border-accent/10 px-2.5 py-0.5 rounded-full">
                      {challenge.category}
                    </span>
                    <span className="text-xs text-grayMid">{challenge.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-text">{challenge.title}</h3>
                  <p className="text-sm text-grayMid mt-2 leading-relaxed flex-grow">
                    {challenge.description}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-grayLight">
                    <div className="text-sm text-grayMid">
                      <span className={difficultyColors[challenge.difficulty]}>
                        {challenge.difficulty}
                      </span>
                      <span className="mx-1.5">•</span>
                      {(challenge.participants + (joined ? 1 : 0)).toLocaleString()} joined
                    </div>
                    <span className="text-xs font-medium text-accentDark">🏆 {challenge.reward}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setExpandedId(expandedId === challenge.id ? null : challenge.id)
                    }
                    className="mt-4 w-full py-2.5 text-sm font-semibold text-accentDark border border-accent/25 rounded-xl hover:bg-accentLight transition"
                  >
                    {expandedId === challenge.id ? "Hide Tasks" : "View Tasks"}
                  </button>

                  {expandedId === challenge.id && (
                    <div className="mt-4 bg-Background rounded-xl p-4 border border-grayLight">
                      <h4 className="text-sm font-semibold text-text mb-3">Daily Tasks</h4>
                      <ul className="space-y-2">
                        {challenge.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-grayDark">
                            <span className="text-accent font-bold mt-0.5">{i + 1}.</span>
                            {task}
                          </li>
                        ))}
                      </ul>

                      {isUpcoming ? (
                        <button
                          type="button"
                          disabled
                          className="mt-4 w-full py-2.5 bg-stone-100 text-stone-400 text-sm font-semibold rounded-xl cursor-not-allowed"
                        >
                          Coming Soon
                        </button>
                      ) : joined ? (
                        <div className="mt-4 space-y-2">
                          <button
                            type="button"
                            disabled
                            className="w-full py-2.5 bg-accentLight text-accentDark border border-accent/20 text-sm font-semibold rounded-xl cursor-default"
                          >
                            ✓ You're In!
                          </button>
                          <Link
                            to="/todayskill"
                            className="block w-full py-2.5 text-center bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primaryDark transition"
                          >
                            Start Today's Lesson →
                          </Link>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleJoin(challenge)}
                          className="mt-4 w-full py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primaryDark transition"
                        >
                          Join Challenge
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChallengeGrid;
