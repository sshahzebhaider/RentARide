import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-black mb-3">Plan your trip now</h4>
            <h1 className="text-black mb-4">Save big with our car rental</h1>
            <p className="text-black mb-3">Welcome to RENT A RIDE, your premier destination for hassle-free car rental services in Pakistan. Whether you're exploring the bustling streets of Lahore, navigating the vibrant city of Karachi, or traversing the historic landmarks of Islamabad, RENT A RIDE has got you covered with our extensive fleet of vehicles and unparalleled customer service.</p>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Book a ride now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
