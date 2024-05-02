import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import logo from "../../assets/all-images/rent-a-ride.png";
import { FaFacebook, FaInstagram, FaMapMarker, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div>
              <img src={logo} alt="" style={{ width: 100, height: 100 }} />
            </div>
            <p className="footer__logo-content">
              Explore our website to learn more about our services, browse our fleet, and make your reservation today. Discover why RENTARIDE is the preferred choice for car rental services in Pakistan!
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info"><FaMapMarker />G-1, yellow line, Gohar Green City, Karachi</p>
              <p className="office__info"><FaPhone /> Phone: 03392226613</p>
              <p className="office__info"><FaEnvelope /> Email: info@carrentalpk.com</p>
              <p className="office__info"><FaClock /> Office Time: 24/7</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Follow Us</h5>
              <div className="follow-us-icons">
                <a href="https://www.facebook.com/yourpage" className="social-iconfb">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/yourpage" className="social-iconinsta">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Rent a Ride.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
