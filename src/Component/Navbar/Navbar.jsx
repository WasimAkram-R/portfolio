import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function OffcanvasExample() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          sticky="top"
          key={expand}
          expand={expand}
          className=""
          id="home"
        >
          <Container>
            <Navbar.Brand
              href="#homepage"
              className="text-white fw-medium fs-3"
              style={{ fontFamily: "cursive" }}
            >
              <span style={{ color: "#ff004f", fontSize: "45px" }}>P</span>
              ortfolio
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              style={{ outline: "none", boxShadow: "none", border: "none" }}
            >
              <span>
                <RxHamburgerMenu
                  style={{ height: "35px", width: "40px", color: "#ff004f" }}
                />
              </span>
            </Navbar.Toggle>

            <Navbar.Offcanvas
              className="text-white navs"
              style={{ backgroundColor: "#ff004f", width: "250px" }}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <span style={{ fontFamily: "cursive" }}>
                    {" "}
                    <span className="fs-2" style={{ color: "#080808" }}>
                      P
                    </span>
                    ortfolio
                  </span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#homepage" className="text-white fw-medium ">
                    <span className="a">Home</span>
                  </Nav.Link>

                  <Nav.Link
                    href="#aboutpage"
                    className="text-white fw-medium mx-lg-5 "
                  >
                    <span className="a">About</span>
                  </Nav.Link>

                  <Nav.Link
                    href="#projectspage"
                    className="text-white fw-medium "
                  >
                    <span className=" a">Projects</span>
                  </Nav.Link>

                  <Nav.Link
                    href="#contactpage"
                    className="text-white mx-lg-5  fw-medium "
                  >
                    <span className="a">Contact</span>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
