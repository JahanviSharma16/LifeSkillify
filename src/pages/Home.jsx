import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThreeDMarqueeDemo } from "../helper/marque";
import Testimonials from "../components/Home/Testimonials";
import CallToAction from "../components/Home/CallToAction";
import Hero from "../components/Home/Hero";
import SkillMatter from "../components/Home/SkillMatter";
import Works from "../components/Home/Works";
import Categories from "../components/Home/Categories";

const Home = () => {
  return (
    <div className="bg-Background text-white">
      <Navbar />
      <Hero />
      <SkillMatter />
      <Works />
      <Categories />
      <Testimonials />

      <div className="bg-Background py-16">
        <h2 className="text-3xl font-bold text-center text-gray-300 mb-8">
          A Glimpse into LifeSkillify
        </h2>
        <div className="h-1 w-32 md:w-40 mb-6 mx-auto bg-gradient-to-r from-Background via-white to-Background animate-gradient" />
        <ThreeDMarqueeDemo />
      </div>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
