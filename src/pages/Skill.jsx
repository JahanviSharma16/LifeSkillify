import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillHero from "../components/Skill/SkillHero";
import SkillCategories from "../components/Skill/SkillCategories";

const Skill = () => {
  return (
    <div className="bg-Background text-text">
      <Navbar />
      <SkillHero />
      <SkillCategories />
      <Footer />
    </div>
  );
};

export default Skill;
