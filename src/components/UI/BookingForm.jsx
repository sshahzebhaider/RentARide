import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import emailjs from 'emailjs-com'; // Import the EmailJS library

const BookingForm = ({ carName }) => { // Receive carName as a prop
  const submitHandler = (event) => {
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    
    // Prepare email parameters
    const emailParams = {
      from_name: formDataObj.firstName + ' ' + formDataObj.lastName,
      email: formDataObj.email,
      phone_number: formDataObj.phoneNumber,
      from_address: formDataObj.fromAddress,
      to_address: formDataObj.toAddress,
      person_count: formDataObj.personCount,
      luggage_count: formDataObj.luggageCount,
      journey_date: formDataObj.journeyDate,
      journey_time: formDataObj.journeyTime,
      message_html: formDataObj.message,
      car_name: carName, // Include carName in email parameters
      // Add more parameters as needed
    };
    
    // Send email
    sendEmail(emailParams);
  };

  const sendEmail = (emailParams) => {
    // Send email using EmailJS directly without template ID
    emailjs.send('service_graafet', 'template_22iwfdy', emailParams, 'mYuIpWhrudYv9a2aj')
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Optionally, you can display a success message to the user
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Optionally, you can display an error message to the user
      });
  };

  return (
    <Form onSubmit={submitHandler} className="booking__form-container">
      <FormGroup className="booking__form-item">
        <Label for="firstName">First Name:</Label>
        <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking__form-item">
        <Label for="lastName">Last Name:</Label>
        <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="booking__form-item">
        <Label for="email">Email:</Label>
        <Input type="email" name="email" id="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form-item">
        <Label for="phoneNumber">Phone Number:</Label>
        <Input type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className="booking__form-item">
        <Label for="fromAddress">From:</Label>
        <Input type="select" name="fromAddress" id="fromAddress">
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Faisalabad">Faisalabad</option>
          <option value="Multan">Multan</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Sukkur">Sukkur</option>
        </Input>
      </FormGroup>
      
      <FormGroup className="booking__form-item">
        <Label for="toAddress">To:</Label>
        <Input type="select" name="toAddress" id="toAddress">
          <option value="Lahore">Lahore</option>
          <option value="Karachi">Karachi</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Faisalabad">Faisalabad</option>
          <option value="Multan">Multan</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Sukkur">Sukkur</option>
        </Input>
      </FormGroup>

      <FormGroup className="booking__form-item">
        <Label for="personCount">Number of Persons:</Label>
        <Input type="select" name="personCount" id="personCount">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </Input>
      </FormGroup>
      <FormGroup className="booking__form-item">
        <Label for="luggageCount">Number of Luggage:</Label>
        <Input type="select" name="luggageCount" id="luggageCount">
          <option value="1 luggage">1 Luggage</option>
          <option value="2 luggage">2 Luggage</option>
          <option value="3 luggage">3 Luggage</option>
          <option value="4 luggage">4 Luggage</option>
          <option value="5+ luggage">5+ Luggage</option>
        </Input>
      </FormGroup>

      <FormGroup className="booking__form-item">
        <Label for="journeyDate">Journey Date:</Label>
        <Input type="date" name="journeyDate" id="journeyDate" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking__form-item">
        <Label for="journeyTime">Journey Time:</Label>
        <Input type="time" name="journeyTime" id="journeyTime" placeholder="Journey Time" />
      </FormGroup>

      <FormGroup className="booking__form-item">
        <Label for="message">Message:</Label>
        <textarea
          rows={5}
          name="message"
          id="message"
          className="textarea"
          placeholder="Write a message"
        ></textarea>
      </FormGroup>

      <Button type="submit" color="primary">Reserve Now</Button>
    </Form>
  );
};

export default BookingForm;
