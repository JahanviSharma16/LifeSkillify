import communityData from "../../data/community.json";

const CommunitySidebar = () => {
  const { featuredMembers, trendingTopics } = communityData;

  return (
    <div className="space-y-6">
      <div className="bg-surface border border-grayLight rounded-2xl p-6 shadow-card">
        <h3 className="text-lg font-bold text-text mb-4">Top Contributors</h3>
        <div className="space-y-4">
          {featuredMembers.map((member) => (
            <div key={member.id} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-accentLight text-accentDark flex items-center justify-center font-bold text-sm flex-shrink-0 border border-accent/10">
                {member.avatar}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-text text-sm">{member.name}</div>
                <div className="text-xs text-grayMid">{member.role}</div>
                <p className="text-xs text-grayMid mt-1 leading-relaxed">{member.bio}</p>
                <div className="flex gap-3 mt-1.5 text-xs text-accentDark">
                  <span>🔥 {member.streak}d streak</span>
                  <span>📚 {member.skillsCompleted} skills</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface border border-grayLight rounded-2xl p-6 shadow-card">
        <h3 className="text-lg font-bold text-text mb-4">Trending Topics</h3>
        <div className="space-y-3">
          {trendingTopics.map((topic) => (
            <div
              key={topic.name}
              className="flex items-center justify-between py-2 border-b border-grayLight last:border-0"
            >
              <span className="text-sm text-grayDark font-medium">#{topic.name}</span>
              <span className="text-xs text-grayMid">{topic.posts} posts</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary rounded-2xl p-6 text-center border border-accent/20">
        <h3 className="text-lg font-bold text-white mb-2">Share Your Story</h3>
        <p className="text-stone-400 text-sm mb-4">
          Inspire others by sharing how LifeSkillify helped you grow.
        </p>
        <button className="w-full py-2.5 bg-accent text-white font-semibold rounded-xl hover:bg-accentDark transition text-sm shadow-gold">
          Start a Discussion
        </button>
      </div>
    </div>
  );
};

export default CommunitySidebar;
