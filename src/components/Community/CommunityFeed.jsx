import communityData from "../../data/community.json";

const CommunityFeed = () => {
  const { discussions } = communityData;

  return (
    <div>
      <h2 className="text-xl font-bold text-text mb-6">Recent Discussions</h2>
      <div className="space-y-4">
        {discussions.map((post) => (
          <article
            key={post.id}
            className="bg-surface border border-grayLight rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accentLight text-accentDark flex items-center justify-center font-bold text-sm flex-shrink-0 border border-accent/10">
                {post.avatar}
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-semibold text-text text-sm">{post.author}</span>
                  <span className="text-xs text-grayMid">•</span>
                  <span className="text-xs text-grayMid">{post.timeAgo}</span>
                  <span className="text-xs font-medium text-accentDark bg-accentLight px-2 py-0.5 rounded-full border border-accent/10">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-base font-bold text-text mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-grayMid leading-relaxed">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-grayMid bg-Background px-2.5 py-0.5 rounded-full border border-grayLight"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-4 pt-3 border-t border-grayLight">
                  <button className="text-sm text-grayMid hover:text-accentDark transition flex items-center gap-1.5">
                    ❤️ {post.likes}
                  </button>
                  <button className="text-sm text-grayMid hover:text-accentDark transition flex items-center gap-1.5">
                    💬 {post.replies} replies
                  </button>
                  <button className="text-sm text-accentDark font-medium hover:text-accent transition ml-auto">
                    Read more →
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CommunityFeed;
