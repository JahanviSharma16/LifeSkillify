import challengesData from "../../data/challenges.json";

const ChallengeHero = () => {
  const { hero, stats } = challengesData;

  return (
    <section className="pt-28 pb-12 px-6 md:px-12 lg:px-32 bg-hero-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 bg-accentLight text-accentDark text-sm font-medium rounded-full mb-6 border border-accent/10">
          Push your limits
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-text mb-5">{hero.title}</h1>
        <div className="section-divider mb-6 mx-auto" />
        <p className="text-grayMid text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {hero.description}
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          <div className="bg-surface rounded-2xl p-5 shadow-card border border-grayLight">
            <div className="text-2xl font-bold text-accentDark">{stats.activeChallenges}</div>
            <div className="text-xs text-grayMid mt-1">Active</div>
          </div>
          <div className="bg-surface rounded-2xl p-5 shadow-card border border-grayLight">
            <div className="text-2xl font-bold text-accentDark">{stats.participants.toLocaleString()}</div>
            <div className="text-xs text-grayMid mt-1">Participants</div>
          </div>
          <div className="bg-surface rounded-2xl p-5 shadow-card border border-grayLight">
            <div className="text-2xl font-bold text-accentDark">{stats.completedThisWeek}</div>
            <div className="text-xs text-grayMid mt-1">Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeHero;
