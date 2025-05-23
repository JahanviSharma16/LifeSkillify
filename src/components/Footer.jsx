const Footer = () => {
  return (
    <footer className="bg-Background text-gray-700 px-6 md:px-12 lg:px-32 py-12 border-t border-Borders">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">LifeSkillify</h2>
          <p className="text-secondary text-sm">
            Helping you grow one micro-lesson at a time. Build better habits,
            improve life skills, and unlock your full potential.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-secondary">
            <li>
              <a href="#about" className="hover:text-Accent transition">
                Why Life Skills Matter
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-Accent transition">
                How It Works
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-Accent transition">
                Skill Categories
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-Accent transition">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">
            Get in Touch
          </h3>
          <p className="text-secondary text-sm mb-4">
            Have questions? Reach out anytime:
          </p>
          <a
            href="mailto:contact@lifeskillify.com"
            className="text-Accent text-sm hover:underline"
          >
            contact@lifeskillify.com
          </a>

          {/* Socials */}
          <div className="flex gap-4 mt-6 text-secondary">
            <a href="#" className="hover:text-Accent transition">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="hover:text-Accent transition">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="hover:text-Accent transition">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-Borders mt-12 pt-6 text-center text-sm text-secondary">
        © {new Date().getFullYear()} LifeSkillify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
