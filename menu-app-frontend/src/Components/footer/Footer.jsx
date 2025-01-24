import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-4">
      <Container>
        <Row className="text-center d-flex align-items-stretch">
          <Col xs={12} md={4} className="mb-3 mb-md-0 d-flex">
            <div className="footer-box flex-fill">
              <h5 className="text-uppercase mb-3 mt-3 text-primary">
                Connect with us
              </h5>
              <p>
                <i className="bi bi-telephone-fill me-2"></i>+91 9567434340
              </p>
              <p className=" mb-3">
                <i className="bi bi-envelope-fill me-2"></i>info@deepnetsoft.com
              </p>
            </div>
          </Col>

          <Col xs={12} md={4} className="mb-3 mb-md-0 d-flex">
            <div className="footer-box text-center flex-fill ">
              <img
                src="/img6.png"
                alt="Deep Net Soft Logo"
                style={{
                  maxHeight: "40px",
                  marginBottom: "10px", // Adjust spacing below the image
                }}
                className="mt-3"
              />
              <h4 className="text-white text-center">
                <span className="text-primary">DEEP </span>NET SOFT
              </h4>
              <div className="social-icons fs-6 mb-1">
                <i className="bi bi-facebook me-3 fs-6"></i>
                <i className="bi bi-twitter me-3 fs-6"></i>
                <i className="bi bi-instagram me-3 fs-6"></i>
                <i className="bi bi-linkedin fs-6"></i>
              </div>
            </div>
          </Col>

          <Col xs={12} md={4} className="d-flex">
            <div className="footer-box flex-fill">
              <h5 className="text-uppercase mt-4 text-primary">Find us</h5>
              <p className=" mb-3">
                <i className="bi bi-geo-alt-fill me-2"></i>
                First Floor, Geo Infopark, <br />
                Infopark, EXPY, Kakkanad
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-3 text-center fixed-footer">
          <Col xs={12} className="mb-1">
            <p className="mb-0">
              © 2024 Deepnetsoft Solutions. All rights reserved.
            </p>
          </Col>
          <Col xs={12}>
            <a href="#terms" className="text-white me-3">
              Terms & Conditions
            </a>
            <a href="#privacy" className="text-white">
              Privacy Policy
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
