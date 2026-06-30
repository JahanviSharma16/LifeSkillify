import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = () => {
    if (!name || !email || !password || emailError) {
      setErrorMessage("Please fill in all fields correctly.");
      return;
    }
  };

  return (
    <div className="bg-Background text-primary pt-16">
      <Navbar />
      <div className="max-w-[80%] mx-auto my-20">
        <h2 className="text-2xl 2xl:text-[2.5rem] lg:text-[2rem] font-bold mb-4">
          Sign Up
        </h2>
        <p className="text-secondary 2xl:text-xl lg:text-lg text-sm mb-8">
          Enter your details to create an account.
        </p>
        <div className="space-y-4 2xl:w-[90%] lg:w-[85%] w-full">
          {/* Name Field */}
          <div className="w-[50%]">
            <label className="block 2xl:text-[16px] lg:text-md text-sm font-bold text-secondary py-2">
              Name:
            </label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-Highlight text-primary rounded-md border-2 border-Borders focus:border-Accent focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="w-[50%]">
            <label className="block 2xl:text-[16px] lg:text-md text-sm font-bold text-secondary py-2">
              Email:
            </label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              className="mt-1 block w-full px-3 py-2 bg-Highlight text-primary rounded-md border-2 border-Borders focus:border-Accent focus:outline-none"
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>

          {/* Password Field */}
          <div className="w-[50%]">
            <label className="block 2xl:text-[16px] lg:text-md text-sm font-bold text-secondary py-2">
              Password:
            </label>
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-Highlight text-primary rounded-md border-2 border-Borders focus:border-Accent focus:outline-none"
            />
          </div>

          {errorMessage && <p className="text-red-500 pt-2">{errorMessage}</p>}
        </div>

        {/* Submit Button */}
        <div className="md:space-x-4 md:flex">
          <button
            onClick={handleSubmit}
            className={`btn-next border-Accent mt-6 px-4 py-2 2xl:w-[20%] lg:w-[20%] md:w-[30%] w-full 2xl:text-[16px] lg:text-[11px] md:text-[11px] text-[12px] border-2 rounded-md
          ${
            name && email && password
              ? "hover:bg-gradient-to-r from-Highlight to-Background text-primary"
              : "cursor-not-allowed opacity-50"
          }`}
            disabled={!name || !email || !password}
          >
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;
