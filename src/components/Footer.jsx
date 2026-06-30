import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-stone-400 px-6 md:px-16 lg:px-32 py-14">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-4">
            Life<span className="text-accent">Skillify</span>
          </h2>
          <p className="text-sm leading-relaxed text-stone-400">
            Helping you grow one micro-lesson at a time. Build better habits, improve life skills, and unlock your full potential.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-stone-300 uppercase tracking-wider mb-4">Explore</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/todayskill" className="hover:text-accent transition">Today's Skill</Link></li>
            <li><Link to="/skill" className="hover:text-accent transition">All Skills</Link></li>
            <li><Link to="/challenge" className="hover:text-accent transition">Challenges</Link></li>
            <li><Link to="/community" className="hover:text-accent transition">Community</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-stone-300 uppercase tracking-wider mb-4">Learn More</h3>
          <ul className="space-y-2.5 text-sm">
            <li><a href="/#about" className="hover:text-accent transition">Why Life Skills Matter</a></li>
            <li><a href="/#how-it-works" className="hover:text-accent transition">How It Works</a></li>
            <li><a href="/#skills" className="hover:text-accent transition">Skill Categories</a></li>
            <li><a href="/#testimonials" className="hover:text-accent transition">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-stone-300 uppercase tracking-wider mb-4">Get in Touch</h3>
          <p className="text-sm mb-3">Have questions? Reach out anytime:</p>
          <a href="mailto:contact@lifeskillify.com" className="text-accent text-sm font-medium hover:text-accentLight transition">
            contact@lifeskillify.com
          </a>
        </div>
      </div>

      <div className="border-t border-stone-800 mt-12 pt-6 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} LifeSkillify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
