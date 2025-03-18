import React from "react";
import heroimg from "./Hero.png";
import "./Hero.css";
import TextChange from "./TextChange";
import Resume from "./WasimAkram_MernStack_Developer_Resume.pdf";
import toast from "react-hot-toast";

const Home = () => {
  const handleDownloadClick = () => {
    toast.success("Resume Downloaded");
  };

  return (
    <>
      <div className="container py-5" id="homepage">
        <div className="row ">
          <div className="col-md-6 order-md-first order-last">
            <div className="heroheading">
              <h6 style={{ color: "#B0B0B0" }}>Hello, I am</h6>
              <h1 className="text-white mb-3">Wasim Akram</h1>
              <h5 className="typing-container" style={{ color: "#ff004f" }}>
                {" "}
                <TextChange />{" "}
              </h5>

              <div className="pt-2">
                <a
                  href={Resume}
                  download="Resume1.pdf"
                  className="contactbuttons text-decoration-none
      border-0 text-white py-2 rounded-2 px-3"
                  onClick={handleDownloadClick}
                  style={{ backgroundColor: "#ff004f", fontSize: "15px" }}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 herobody order-md-last order-first">
            <img src={heroimg} alt="" className=" img-fluid heroimg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
