import React from "react";
import "./ContactUs.css";
import Navbar from "../../Navbar/Navbar.jsx";
import imgcontact from "../../../assets/contact_us.jpg";
import imgcontact1 from "../../../assets/contact1.jpg";
import Footer from "../../Footer/Footer.jsx";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="eventfirstdiv">
        <img alt="img" src={imgcontact} className="eventimage"></img>
      </div>
      <div className="box1">
        <div className="headingwithpara">
          <h3 className="element">CONTACT US TODAY!</h3>
          <p className="tw mb">
            Ready to add a touch of Indian flavour to your next event? Contact
            The Hunger’s Point today! We'd be happy to discuss your catering
            needs and create a menu that will leave a lasting impression on your
            guests.
          </p>
        </div>
        <div className="form-and-image">
          <div className="image-container1">
            <img alt="Contact Us" src={imgcontact1} className="contact-image" />
            <div className="contact">
              <h3 className="element2">Customer Care</h3>
              <p>
                Please email your detailed inquiry and deadline for response to
                the following:{" "}
              </p>
              <p style={{ fontWeight: "bold" }}> info@hungerpoints.in</p>
              <p style={{ fontWeight: "bold" }}>marketing@hungerpoints.in</p>
            </div>
          </div>
          <div className="form-container">
            <form className="review-form">
              <div className="form-group">
                <label htmlFor="feedback">Get In Touch With Us</label>
                <select id="feedback" name="feedback">
                  <option value="menu">Menu Options</option>
                  <option value="service">Service</option>
                  <option value="quality">Food Quality</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
