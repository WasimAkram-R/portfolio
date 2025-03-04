import React from "react";

const Skills = () => {
  return (
    <>
      <div className="row pt-3">
        <div className="text-white col-lg-3 col-md-4  col-6">
          <h6 style={{ color: "#DC143C" }}>FRONTEND</h6>
          <p style={{ color: "#B0B0B0", fontSize: "14px" }}>HTML</p>
          <p style={{ color: "#B0B0B0", fontSize: "14px" }}>CSS</p>
          <p style={{ color: "#B0B0B0", fontSize: "14px" }}>JAVASCRIPT</p>
          <p style={{ color: "#B0B0B0", fontSize: "14px" }}>REACT JS</p>
        </div>

        <div className="text-white col-lg-3 col-md-4 col-6">
          <h6 style={{ color: "#DC143C" }}>FRAMEWORKS</h6>
          <p style={{ color: "#B0B0B0", fontSize: "14px" }}>BOOTSTRAP</p>
          <p style={{ color: "#B0B0B0", fontSize: "14px" }}>TAILWIND</p>
          <h6 style={{ color: "#DC143C" }}>DATABASES</h6>
          <p style={{ color: "#B0B0B0", fontSize: "14px" }}>MONGODB</p>
          <p style={{ color: "#B0B0B0", fontSize: "14px" }}>MYSQL</p>
        </div>

        <div className="text-white col-lg-3 col-md-4  col-6">
          <h6 style={{ color: "#DC143C" }}>BACKEND</h6>
          <p style={{ color: "#B0B0B0", fontSize: "14px" }}>NODE JS</p>
          <p style={{ color: "#B0B0B0", fontSize: "14px" }}>EXPRESS JS</p>
        </div>

        <div className="text-white col-lg-3 col-md-4  col-6 ">
          <h6 style={{ color: "#DC143C" }}>DESIGN TOOLS</h6>
          <p style={{ color: "#B0B0B0", fontSize: "14px" }}>CANVA</p>
          <p style={{ color: "#B0B0B0", fontSize: "14px" }}>FIGMA</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
