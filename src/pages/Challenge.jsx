import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChallengeHero from "../components/Challenge/ChallengeHero";
import ChallengeGrid from "../components/Challenge/ChallengeGrid";

const Challenge = () => {
  return (
    <div className="bg-Background text-text min-h-screen">
      <Navbar />
      <ChallengeHero />
      <ChallengeGrid />
      <Footer />
    </div>
  );
};

export default Challenge;
