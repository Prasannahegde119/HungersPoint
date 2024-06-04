import React from "react";
import "./Careers.css";
import Navbar from "../../Navbar/Navbar";
import imgcareer from "../../../assets/Careers.jpg";
import imgcareer1 from "../../../assets/career_book.jpg";
import Footer from "../../Footer/Footer";

function Careers() {
  return (
    <>
      <Navbar />
      <div className="eventfirstdiv">
        <img alt="img" src={imgcareer} className="eventimage"></img>
      </div>
      <div className="box1">
        <div className="container">
          <div className="left">
            <h1 className="yellow-underline mb">CAREERS</h1>
            <p className="mb">
              Do you crave a career that's as exciting and vibrant as the
              flavours we serve?
              <br></br>
              <br></br>
              At Hunger's Point, we're more than just a restaurant – we're a
              passionate family dedicated to sharing the magic of Indian
              cuisine. We're always searching for talented individuals who share
              our love for food and exceptional service. Join our team and be
              part of something bigger. Spice up your career with The Hunger's
              Point!
            </p>
          </div>
          <div className="right">
            <img
              src={imgcareer1}
              alt="Your Image"
              style={{ borderRadius: "20px", width: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div className="form-and-image1">
          <div className="image-container1">
            <h1 className="yellow-underline mb">JOIN OUR TEAM NOW</h1>
            <p className="mb tw">
              Fill the details and our team will get back to you shortly !
            </p>
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

export default Careers;
