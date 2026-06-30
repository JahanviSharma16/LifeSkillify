import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/todayskill", label: "Today's Skill" },
  { to: "/skill", label: "Skills" },
  { to: "/challenge", label: "Challenges" },
  { to: "/community", label: "Community" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full px-6 md:px-16 lg:px-32 py-4 flex justify-between items-center bg-surface/90 backdrop-blur-md border-b border-grayLight text-text shadow-soft fixed top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-text tracking-tight">
        Life<span className="text-accent">Skillify</span>
      </Link>

      <div className="hidden md:flex gap-1 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
              isActive(link.to)
                ? "bg-accentLight text-accentDark"
                : "text-grayDark hover:text-accent hover:bg-accentLight/60"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/todayskill"
          className="ml-4 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primaryDark transition duration-200 shadow-card"
        >
          Start Learning
        </Link>
      </div>

      <div className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} className="text-text" /> : <Menu size={24} className="text-text" />}
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface border-b border-grayLight shadow-elevated flex flex-col gap-1 px-6 py-4 md:hidden z-40">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg font-medium ${
                isActive(link.to) ? "bg-accentLight text-accentDark" : "text-grayDark"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/todayskill" onClick={() => setMenuOpen(false)}>
            <button className="w-full mt-2 px-4 py-3 bg-primary text-white rounded-lg font-medium">
              Start Learning
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
