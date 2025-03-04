import React from "react";
import aboutimg from "./About.png";
import "./Nav.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tweleve from "./Skills";
import College from "./Certificates";
import Education from "./Education";
import Aboutnav from "./Aboutnav";


const About = () => {
  return (
    <>
      <div className="row " id="aboutpage">
        <div className="col-lg-4 col-md-5 pb-md-0 pb-5">
          <div>
            <img src={aboutimg} className="img-fluid aboutimg" alt="" />
          </div>
        </div>

        <div className="col-lg-8 col-md-7 maincol">
          <div className="text-white">
            <h2>About Me</h2>
            <p style={{ fontSize: "15px", color: "#B0B0B0" }}>
              {" "}
              Hello! I'm Wasim Akram R, a passionate and dedicated MERN stack
              developer excited to build engaging, user-friendly websites and
              web applications. I'm actively seeking an opportunity to
              kick-start my career as a MERN stack developer. I’m eager to bring
              my skills and enthusiasm to a collaborative team, where I can
              learn from experienced developers and contribute to meaningful
              projects.
            </p>
          </div>

          <div>
            <h4 className="py-2" style={{ color: "#ff004f" }}>
              SUMMARY
            </h4>

            <BrowserRouter>
              <Aboutnav/> 
              <Routes>
                <Route path="/" element={<Education />} />
                <Route path="/skills" element={<Tweleve />} />
                <Route path="/certificates" element={<College />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
