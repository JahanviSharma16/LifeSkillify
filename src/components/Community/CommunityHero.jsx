import communityData from "../../data/community.json";

const CommunityHero = () => {
  const { hero, stats } = communityData;

  return (
    <section className="pt-28 pb-10 px-6 md:px-12 lg:px-32 bg-hero-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 bg-accentLight text-accentDark text-sm font-medium rounded-full mb-6 border border-accent/10">
          {stats.members.toLocaleString()}+ members worldwide
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-text mb-5">{hero.title}</h1>
        <div className="section-divider mb-6 mx-auto" />
        <p className="text-grayMid text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {hero.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { label: "Members", value: stats.members },
            { label: "Discussions", value: stats.discussions },
            { label: "Skills Shared", value: stats.skillsShared },
            { label: "Countries", value: stats.countries },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface rounded-2xl p-4 shadow-card border border-grayLight">
              <div className="text-xl font-bold text-accentDark">
                {stat.value.toLocaleString()}
              </div>
              <div className="text-xs text-grayMid mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;
