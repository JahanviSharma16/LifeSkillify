import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Hamburger and Close icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = false; // Replace with actual auth logic

  return (
   <nav className="w-full px-6 md:px-32 py-4 flex justify-between items-center bg-[#F9FAFB] text-[#111827] shadow-md fixed top-0 z-50 border-b border-[#E5E7EB]">
  <Link to="/" className="text-2xl font-bold text-[#3B82F6]">LifeSkillify</Link>

  {/* Desktop Links */}
  <div className="hidden md:flex gap-6 items-center">
    <Link to="/todayskill" className="hover:text-[#3B82F6] font-medium text-[#111827]">Today's Skill</Link>
    <Link to="/skill" className="hover:text-[#3B82F6] font-medium text-[#111827]">Skill</Link>
    <Link to="/challenge" className="hover:text-[#3B82F6] font-medium text-[#111827]">Challenge</Link>
    <Link to="/community" className="hover:text-[#3B82F6] font-medium text-[#111827]">Community</Link>

    {isLoggedIn ? (
      <Link to="/profile">
        <img src="/user-icon.svg" alt="Profile" className="w-8 h-8 rounded-full border border-[#E5E7EB]" />
      </Link>
    ) : (
      <Link to="/sign-up">
        <button className="px-4 py-2 border-2 border-[#3B82F6] bg-[#EFF6FF] text-[#111827] rounded-lg hover:bg-[#3B82F6] hover:text-white transition duration-300">
          Login / Signup
        </button>
      </Link>
    )}
  </div>

  {/* Hamburger Icon */}
  <div className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? <X size={28} /> : <Menu size={28} />}
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="absolute top-16 left-0 w-full bg-[#F9FAFB] text-[#111827] flex flex-col gap-4 px-6 py-4 md:hidden z-40 border-t border-[#E5E7EB]">
      <Link to="/todayskill" onClick={() => setMenuOpen(false)} className="hover:text-[#3B82F6] font-medium">Today's Skill</Link>
      <Link to="/skill" onClick={() => setMenuOpen(false)} className="hover:text-[#3B82F6] font-medium">Skill</Link>
      <Link to="/challenge" onClick={() => setMenuOpen(false)} className="hover:text-[#3B82F6] font-medium">Challenge</Link>
      <Link to="/community" onClick={() => setMenuOpen(false)} className="hover:text-[#3B82F6] font-medium">Community</Link>

      {isLoggedIn ? (
        <Link to="/profile" onClick={() => setMenuOpen(false)}>
          <img src="/user-icon.svg" alt="Profile" className="w-8 h-8 rounded-full border border-[#E5E7EB]" />
        </Link>
      ) : (
        <Link to="/sign-up" onClick={() => setMenuOpen(false)}>
          <button className="w-full px-4 py-2 border-2 border-[#3B82F6] bg-[#EFF6FF] text-[#111827] rounded-lg hover:bg-[#3B82F6] hover:text-white transition duration-300">
            Login / Signup
          </button>
        </Link>
      )}
    </div>
  )}
</nav>

  );
};

export default Navbar;
