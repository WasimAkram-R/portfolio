import React from "react";
import x_clone from "./x-clone.png";
import chat_app from "./chat-app.png";
import shopease from "./shopease.jpg";
import "./Project.css";
const Project = () => {
  return (
    <>
      <div className="container py-5" id="projectspage">
        <h1 className="text-white pb-5">My Work</h1>
        <div className="ro work-list">
          <div className="work">
            <img src={x_clone} alt="" className="" />

            <div class="layer">
              <h6 className="text-white">Twitter - Clone</h6>
              <p className="text-white-50">
                A full-stack Twitter clone built with React, Express.js, and
                MongoDB, featuring user authentication, real-time posts, and
                interactive social features like commenting and liking.
              </p>
              <a target="blank" href="https://x-clone-lh3a.onrender.com/">
                link
              </a>
            </div>
          </div>

          <div className="work">
            <div>
              <img src={chat_app} alt="" className="" />

              <div class="layer">
                <h6 className="text-white">Chatify - Realtime Chat App</h6>
                <p className="text-white-50">
                  A real-time messaging app using MERN and Socket.io, offering
                  features like online status tracking, secure authentication,
                  and efficient global state management.
                </p>
                <a target="blank" href="https://chat-app-jls6.onrender.com/">
                  link
                </a>
              </div>
            </div>
          </div>

          <div className="work">
            <div>
              <img src={shopease} alt="" className="" />

              <div class="layer">
                <h6 className="text-white">ShopEase - Ecommerce Site</h6>
                <p className="text-white-50">
                  A food ordering app developed with React, enabling users to
                  filter menus, add items to their cart, and complete orders
                  through a seamless checkout and payment process.
                </p>
                <a target="blank" href="https://shopease-sandy.vercel.app/">
                  link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
