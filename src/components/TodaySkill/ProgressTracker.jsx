import streakData from "../../helper/streakData";

const ProgressTracker = () => {
  return (
    <div className="p-6 rounded-lg shadow-md bg-darkshade">
      <h2 className="text-2xl font-bold mb-4 text-primary">Progress Tracker</h2>
      <p className="mb-6 text-grayDark">
        Current Streak: <strong>{streakData.currentStreak} days</strong>
      </p>

      <div className="space-y-3">
        {Object.entries(streakData.categoryCount).map(([category, count]) => (
          <div
            key={category}
            className="flex justify-between border-b border-gray-700 pb-2"
          >
            <span>{category}</span>
            <span className="text-grayMid">{count} skills</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
