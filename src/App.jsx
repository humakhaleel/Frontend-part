import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home/home";
import About from "./components/About";
import Courses from "./course/courses";
import Contact from "./components/contact";
import Signup from "./components/Signup";

function App() {
  return (
  <Router>
  <div className="container-flex">
    <Header />
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    <Footer />
  </div>
</Router>

  );
}

export default App;
