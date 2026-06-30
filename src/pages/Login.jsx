import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div className="bg-Background text-primary pt-16">
      <Navbar />
      <div className="max-w-md mx-auto bg-darkshade p-8 rounded-lg shadow-lg mt-10">
        <h2 className="text-3xl font-bold mb-6 text-primary text-center">
          Welcome Back
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-background border border-gray-600 text-white focus:outline-none focus:border-primary"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 rounded bg-background border border-gray-600 text-white focus:outline-none focus:border-primary"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-indigo-700 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
