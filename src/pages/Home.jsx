import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Home/Testimonials";
import CallToAction from "../components/Home/CallToAction";
import Hero from "../components/Home/Hero";
import SkillMatter from "../components/Home/SkillMatter";
import Works from "../components/Home/Works";
import Platform from "../components/Home/Platform";
import Categories from "../components/Home/Categories";

const Home = () => {
  return (
    <div className="bg-Background text-text">
      <Navbar />
      <Hero />
      <SkillMatter />
      <Works />
      <Platform />
      <Categories />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
