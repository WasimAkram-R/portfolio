import { Toaster } from "react-hot-toast";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Project from "./Component/Project/Project";
import React from "react";
function App() {
  return (
    <>
      <div className="container-fluid" style={{ background: "#080808" }}>
        <Navbar />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
      <Toaster />
    </>
  );
}

export default App;
