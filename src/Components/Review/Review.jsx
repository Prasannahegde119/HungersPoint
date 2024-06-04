import React from "react";
import "./Review.css";
import star from "../../assets/stars.png";

function Review() {
  return (
    <>
      <div className="element1">GIVE US YOUR REVIEW</div>
      <div className="review-container">
        <div className="image-container">
          <img src={star} alt="stars" className="stars" />
        </div>
        <form className="review-form">
          <div className="form-group">
            <label htmlFor="feedback">Feedback</label>
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
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      <div className="centered-content">
        <div className="custom-card">
          <p className="title">BECOME A VIP</p>
          <div className="vip-content">
            <div className="vip-description">
              Receive updates on special events, Menu items, menu reviews and
              more!
            </div>
            <button className="signup-button">Sign Up Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
