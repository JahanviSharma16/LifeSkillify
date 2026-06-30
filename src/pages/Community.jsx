import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CommunityHero from "../components/Community/CommunityHero";
import CommunityFeed from "../components/Community/CommunityFeed";
import CommunitySidebar from "../components/Community/CommunitySidebar";

const Community = () => {
  return (
    <div className="bg-Background text-text min-h-screen">
      <Navbar />
      <CommunityHero />
      <div className="px-6 md:px-12 lg:px-32 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CommunityFeed />
          </div>
          <div>
            <CommunitySidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
