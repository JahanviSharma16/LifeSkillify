import TodaysSkillCard from "../components/TodaySkill/TodaysSkillCard";
import ProgressTracker from "../components/TodaySkill/ProgressTracker";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TodaySkill = () => {
  return (
    <div className="bg-Background text-white">
      <Navbar />
      <section className="bg-Background text-white h-full">
        <TodaysSkillCard />
        {/* <ProgressTracker /> */}
      </section>
      <Footer />
    </div>
  );
};

export default TodaySkill;
