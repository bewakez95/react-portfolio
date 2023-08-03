import logo from "./logo.svg";
import "./App.css";
import "./style.scss";
import Hero from "./Components/Hero";
import Awards from "./Components/Awards";
import RecentWork from "./Components/RecentWork";
import About from "./Components/About";
import GetInTouch from "./Components/GetInTouch";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <input type="checkbox" id="darkmode" className="dark-mode-check" />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/recentwork" element={<RecentWork />} />
          <Route path="/about" element={<About />} />
          <Route path="/get" element={<GetInTouch />} />
        </Routes>

        {/* <!-- dark mode --> */}
        <label for="darkmode">
          <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>
      </div>
    </>
  );
}

export default App;
