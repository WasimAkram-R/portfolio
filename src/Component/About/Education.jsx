import React from "react";

const Education = () => {
  return (
    <>
      <div className="row pt-3 ">
        <div className="text-white col-lg-4 col-md-6">
          <h6>
            B.Tech IT - <span style={{ color: "#DC143C" }}>2020-2024</span>
          </h6>
          <p style={{ color: "#B0B0B0" }}>
            Anna University-BIT Campus, Tiruchirappalli
          </p>
          <p style={{ color: "#708090" }}>Percentage: 77.8</p>
        </div>

        <div className="text-white col-lg-4 col-md-6 py-lg-0 py-2">
          <h6>
            HSC - <span style={{ color: "#DC143C" }}>2020</span>
          </h6>
          <p style={{ color: "#B0B0B0" }}>Velammal School, Madurai</p>
          <p style={{ color: "#708090" }}>Percentage: 79.5</p>
        </div>

        <div className="text-white col-lg-4 col-md-6">
          <h6>
            SSC - <span style={{ color: "#DC143C" }}>2018</span>
          </h6>
          <p style={{ color: "#B0B0B0" }}>Dolphin School, Madurai</p>
          <p style={{ color: "#708090" }}>Percentage: 88.8</p>
        </div>
      </div>
    </>
  );
};

export default Education;
