import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">


      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Plan Your Trip with Rent A Ride
                </h2>

                <p className="section__description">
                  Ready to explore Karachi, Lahore, and Islamabad’s top tourist attractions? RentARide makes it easy to navigate the city and discover its hidden gems with our reliable transportation services. Whether you're traveling solo, with family, or in a group, our fleet of rental cars offers the flexibility and convenience you need to make the most of your trip
                </p>



                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>0339-2226613</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <div className="surface-0 text-700 text-center" style={{backgroundColor: 'orangered'}}>
        <div className="text-900 font-bold text-5xl mt-3" style={{color: '#fff', fontSize: 50, fontWeight: 'bold'}}>Save big with our cheap car rental!</div>
        <div className="text-700 text-2xl mb-5" style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Top Airports. Local Suppliers. 24/7 Support.</div>
      </div>


      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
