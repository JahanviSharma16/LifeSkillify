import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Challenge from "./pages/Challenge";
import Community from "./pages/Community";
import TodaySkill from "./pages/TodaySkill";
import CourseDetails from "./components/Skill/CourseDetails";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todayskill" element={<TodaySkill />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
};

export default App;
