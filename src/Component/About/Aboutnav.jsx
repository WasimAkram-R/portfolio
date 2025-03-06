import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Aboutnav = () => {
  return (
    <>
      <nav className="aboutnav mb-2">
        <ul className="py-1 px-2 rounded-4 my-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-decoration-none hovered fw-medium ${
                isActive ? "active" : ""
              }`
            }
          >
            EDUCATION
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `text-decoration-none px-5 hovered fw-medium ${
                isActive ? "active" : ""
              }`
            }
          >
            SKILLS
          </NavLink>

          <NavLink
            to="/certificates"
            className={({ isActive }) =>
              `text-decoration-none hovered fw-medium ${
                isActive ? "active" : ""
              }`
            }
          >
            CERTIFICATES
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Aboutnav;












