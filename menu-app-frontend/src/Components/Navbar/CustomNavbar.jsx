import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './CustomNavbar.css'
const CustomNavbar = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#121618" }}
        className="text-white"
      >
        <Container fluid>
          <img
            src="/img6.png"
            alt="Deep Net Soft Logo"
            style={{
              maxHeight: "35px",
              marginBottom: "10px",
            }}
            className="ms-5"
          />
          <Navbar.Brand href="#" className="ms-1">
            {" "}
            <h4 className="text-white ">
              <span className="text-primary">DEEP </span>NET SOFT
            </h4>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0 me-5" navbarScroll>
              <Nav.Link href="#action1" className="text-white me-5">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white me-5">
                Menu
              </Nav.Link>
              <Nav.Link href="#action3" className="text-white me-5">
                Make A Reservation
              </Nav.Link>
              <Nav.Link href="#action4" className="text-white me-5">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
