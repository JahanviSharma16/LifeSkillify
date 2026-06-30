import TodaysSkillCard from "../components/TodaySkill/TodaysSkillCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TodaySkill = () => {
  return (
    <div className="bg-Background text-text min-h-screen">
      <Navbar />
      <TodaysSkillCard />
      <Footer />
    </div>
  );
};

export default TodaySkill;
