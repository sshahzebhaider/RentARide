import React, { useState } from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

const FindCarForm = () => {
  // State variables to track input values
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");

  // Function to handle input change for each field
  const handleFromCityChange = (event) => {
    setFromCity(event.target.value);
  };

  const handleToCityChange = (event) => {
    setToCity(event.target.value);
  };

  const handlePickUpDateChange = (event) => {
    setPickUpDate(event.target.value);
  };

  const handlePickUpTimeChange = (event) => {
    setPickUpTime(event.target.value);
  };

  // Check if all required fields are filled
  const isFormComplete = fromCity && toCity && pickUpDate && pickUpTime;

  // Determine the destination based on form completeness
  const destination = isFormComplete ? "/cars" : "#";

  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="From city"
            value={fromCity}
            onChange={handleFromCityChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="To city"
            value={toCity}
            onChange={handleToCityChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="date"
            placeholder="Pick-up date"
            value={pickUpDate}
            onChange={handlePickUpDateChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Pick-up time"
            value={pickUpTime}
            onChange={handlePickUpTimeChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          {/* Conditionally render a Link based on form completeness */}
          <Link to={destination}>
            <button
              className="btn find__car-btn"
              disabled={!isFormComplete}
            >
              Find a Car
            </button>
          </Link>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
