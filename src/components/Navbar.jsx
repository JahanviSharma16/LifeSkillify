
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = false; // Replace with actual auth logic

  return (
    <nav className="w-[90%] mx-12 px-6 py-4 flex justify-between items-center bg-black text-white shadow-md fixed top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-primary">LifeSkillify</Link>
      <div className="flex gap-6 items-center">
        <Link to="/dashboard" className="hover:text-primary font-medium">Dashboard</Link>
        <Link to="/skill" className="hover:text-primary font-medium">Skill</Link>
        <Link to="/challenge" className="hover:text-primary font-medium">Challenge</Link>
        <Link to="/community" className="hover:text-primary font-medium">Community</Link>

        {isLoggedIn ? (
          <Link to="/profile">
            <img src="/user-icon.svg" alt="Profile" className="w-8 h-8 rounded-full border border-grayLight" />
          </Link>
        ) : (
          <Link to="/login">
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-600 transition duration-300">Login / Signup</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
