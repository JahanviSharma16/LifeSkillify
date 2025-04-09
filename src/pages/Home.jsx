import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThreeDMarqueeDemo } from "../helper/marque";
import { second, third } from "../helper/images";
import First from "../components/Home/First";

const Home = () => {
  return (
    <div className="bg-black text-white ">
      <Navbar />

      <First />

      {/* Section 2 */}
      <section className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-center gap-12 px-6">
        <img src={second} alt="Purpose" className="w-full md:w-1/2" />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-amber">
            What is LifeSkillify?
          </h2>
          <p className="text-lg text-grayMid">
            LifeSkillify delivers daily micro-lessons to help you grow
            personally and professionally. Learn, improve, and build better
            habits without overwhelming your day.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6">
        <img src={third} alt="Benefits" className="w-full md:w-1/2" />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-accent">
            Built for Busy Lives
          </h2>
          <p className="text-lg text-grayMid">
            Whether you're a student or a working professional, our bite-sized
            lessons make it easy to stay consistent and develop crucial soft &
            real-life skills.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-center gap-12 px-6">
        <img src="/vector4.svg" alt="Growth" className="w-full md:w-1/2" />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-info">
            Daily Wins, Real Results
          </h2>
          <p className="text-lg text-grayMid">
            With LifeSkillify, you gain confidence, clarity, and capability—one
            lesson at a time. Join the movement of learners growing smarter,
            calmer, and stronger every day.
          </p>
        </div>
      </section>

      <ThreeDMarqueeDemo />

      <Footer />
    </div>
  );
};

export default Home;
