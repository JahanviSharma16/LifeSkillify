import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Challenge from "./pages/Challenge";
import Community from "./pages/Community";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import TodaySkill from "./pages/TodaySkill";
import CourseDetails from "./components/Skill/CourseDetails";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todayskill" element={<TodaySkill />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
