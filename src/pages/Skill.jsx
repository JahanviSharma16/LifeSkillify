import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillHero from "../components/Skill/SkillHero";
import SkillCategories from "../components/Skill/SkillCategories";
// import MicroPreview from "../components/Skill/MicroPreview";

const Skill = () => {
  return (
    <div className="bg-Background text-white">
      <Navbar />
      <SkillHero />
      <SkillCategories />
      {/* <MicroPreview /> */}
      <Footer />
    </div>
  );
};

export default Skill;
