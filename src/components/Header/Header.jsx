import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import logo from "../../assets/all-images/rent-a-ride.png"

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Car Models",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">

<div className="header__middle">
  <Container>
    <Row className="align-items-center justify-content-between">
      <Col lg="3" md="3" sm="6">
        <div className="logo">
          <img src={logo} alt="" style={{ width: 100, height: 100 }} />
        </div>
      </Col>

      <Col lg="3" md="3" sm="6">
        <div className="header__location">
          <i className="ri-earth-line"></i>
          <div className="header__location-content">
            <h4>Pakistan</h4>
            <h6>Karachi, Pakistan</h6>
          </div>
        </div>
      </Col>

      <Col lg="3" md="3" sm="6">
        <div className="header__location">
          <i className="ri-time-line"></i>
          <div className="header__location-content">
            <h4>Monday to Sunday</h4>
            <h6>24 hours</h6>
          </div>
        </div>
      </Col>

      <Col lg="3" md="3" sm="6" className="text-lg-end">
        <button className="header__btn btn">
          <a href="tel:03392226613">
            <i className="ri-phone-line"></i> Request a call
            </a>
        </button>
      </Col>
    </Row>
  </Container>
</div>


      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
