import React, { useRef } from "react";
import "./Contact.css";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

import Resume from "./Resume1.pdf";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8zhw0hq", "template_677jk3l", form.current, {
        publicKey: "Sh-l0CBeHJYGhbE1P",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          toast.success("Form Submitted Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(error.text);
        }
      );
  };

  const handleDownloadClick = () => {
    toast.success("Resume Downloaded");
  };

  return (
    <>
      <div className="container pb-5 uppercontainer " id="scrollTarget">
        <div className="row" id="contactpage">
          <div className="col-lg-4 col-md-5">
            <h2 className="text-white pb-3">Contact Me</h2>
            <div className="col-gap-2">
              <MdEmail
                style={{ color: "#ff004f", width: "25px", height: "25px" }}
              />
              <span style={{ alignSelf: "" }} className="text-white-50 mx-3">
                wasim90422@gmail.com
              </span>
            </div>

            <div className="py-3">
              <FaPhoneSquareAlt
                style={{ color: "#ff004f", width: "23px", height: "23px" }}
              />
              <span className=" text-white-50 ms-3">9042242984</span>
            </div>

            <a
              href={Resume}
              download="Resume1.pdf"
              className="contactbuttons text-decoration-none
      border-0 text-white py-2 rounded-2 px-3 "
              onClick={handleDownloadClick}
              style={{ backgroundColor: "#ff004f", fontSize: "15px" }}
            >
              Download Resume
            </a>
          </div>
          <div className="col-lg-8 col-md-7 pt-5">
            <form onSubmit={sendEmail} ref={form} className="">
              <div>
                <input
                  type="text"
                  name="your_name"
                  className="place w-100 p-2 border-0 rounded-2"
                  style={{ backgroundColor: "#262626", outline: "none" }}
                  placeholder="Your Name *"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="your_email"
                  className="place w-100 p-2 border-0 rounded-2 my-3"
                  style={{ backgroundColor: "#262626", outline: "none" }}
                  placeholder="Your Email *"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="place places
                  w-100  border-0 rounded-2"
                  style={{ backgroundColor: "#262626", outline: "none" }}
                  placeholder="Your Message *"
                />
              </div>

              <button
                className="contactbuttons border-0 text-white py-2 rounded-2 px-5 mt-3"
                style={{ backgroundColor: "#ff004f", fontSize: "15px" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="icon-container upper">
          <FaArrowUp
            style={{ width: "24px", height: "24px", color: "white" }}
            className=""
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
