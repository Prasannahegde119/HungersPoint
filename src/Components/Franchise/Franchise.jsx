import React from "react";
import "./Franchise.css";
import franchise1 from "../../assets/Franchise1.png";
import franchise2 from "../../assets/Franchise2.jpg";
import franchise3 from "../../assets/franchise3.png";
import franc from "../../assets/Franchisecard1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Franchise() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <Navbar />
      <div className="eventfirstdiv">
        <img alt="img" src={franchise1} className="eventimage"></img>
      </div>
      <div className="box1">
        <div className="franchise1">
          <div className="headingwithpara">
            <h3 className="element">FRANCHISE</h3>
            <p className="tw mb">
              Are you a passionate entrepreneur with a love for Indian cuisine?
              The Hunger's Point welcomes ambitious individuals to join as
              franchise partners!
            </p>
          </div>
          <div className="franchise2">
            <img alt="image" src={franchise2} className="imgtransferant" />
            <div className="franchise3">
              <h3 className="centered-heading">
                Wait is over! Own a Store at your convenient location now.
              </h3>
            </div>
          </div>

          <div className="headingwithpara">
            <h3 className="element">BECOME A PARTNER WITH US</h3>
            <p className="tw">
              Build your own business with the power of a recognized brand.
              Share the joy of authentic Indian cuisine with your local area.
              Owning a Hunger's Point franchise is more than just running a
              restaurant – it's about sharing a culinary experience and
              fostering a connection. If you're ready to take on a flavorful
              journey, we invite you to learn more about our exciting franchise
              opportunities! Contact us today to explore the delicious
              possibilities!
            </p>
          </div>
          <div className="form-and-image">
            <div className="image-container">
              <Slider {...settings} className="slick-slider">
                <div>
                  <img src={franchise3} alt="Sample 1" className="left-image" />
                </div>
                <div>
                  <img src={franchise3} alt="Sample 2" className="left-image" />
                </div>
                <div>
                  <img src={franc} alt="Sample 3" className="left-image" />
                </div>
              </Slider>
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
      </div>
      <Footer />
    </>
  );
}

export default Franchise;
