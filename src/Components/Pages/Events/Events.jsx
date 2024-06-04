import React from "react";
// import { useEffect, useRef } from "react";
import "./Events.css";
import event1 from "../../../assets/event1.jpg";
import event2 from "../../../assets/event2.jpg";
import Navbar from "../../Navbar/Navbar";
import eventslider1 from "../../../assets/eventslider1.jpg";
import eventslider2 from "../../../assets/eventslider2.jpg";
import eventslider3 from "../../../assets/eventslider3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../Footer/Footer";

function Events() {
  // const sliderRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (sliderRef.current) {
  //       sliderRef.current.slickNext();
  //     }
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   cssEase: "linear",
  // };
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
        <img alt="img" src={event1} className="eventimage"></img>
      </div>
      <div className="box1">
        <div className="container">
          <div className="left">
            <h1 className="yellow-underline mb">Events & Catering</h1>
            <p className="mb">
              Looking to add a touch of Indian magic to your next gathering?
              Look no further than Hunger’s Point! We're passionate about
              bringing the vibrant flavours of Indian cuisine to any social
              event, big or small.
            </p>
            <h3 className="yellow mb">
              MOUTHWATERING FOOD FOR MEMORABLE GATHERINGS
            </h3>
            <p className="mb">
              Whether you're hosting a festive kitty party, a celebratory
              gathering, or a corporate event, our team will create a menu that
              perfectly complements your occasion. We offer a wide selection of
              delicious Indian appetizers, main courses, snacks & beverages,
              kindling every taste bud.
              <br></br>
              <br></br>
              No matter the size of your event, we have the expertise to cater
              to your specific needs. We can help you with a menu that fits your
              dietary preferences, leaving you free to focus on enjoying the
              company of your guests.
            </p>
          </div>
          <div className="right">
            <img
              src={event2}
              alt="Your Image"
              style={{ borderRadius: "20px", width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="main-container">
          <div className="image-container">
            <Slider {...settings} className="slick-slider">
              <div>
                <img src={eventslider1} alt="Sample 1" className="left-image" />
              </div>
              <div>
                <img src={eventslider2} alt="Sample 2" className="left-image" />
              </div>
              <div>
                <img src={eventslider3} alt="Sample 3" className="left-image" />
              </div>
            </Slider>
          </div>
          <div className="content-container">
            <h1 className="element">LET US HANDLE THE DETAILS</h1>
            <p className="paragraph tw">
              Planning an event can be stressful. With Hunger’s Point, you can
              take the worry out of food preparation. We handle everything from
              menu planning and preparation to delivery and setup. Our friendly
              and professional staff is dedicated to ensuring your event runs
              smoothly, allowing you to relax and participate in the
              celebration.
            </p>
          </div>
        </div>
        <div className="feedback-main-container">
          <div className="text-container">
            <h1 className="element">CONTACT US TODAY!</h1>
            <p className="feedback-paragraph">
              Ready to add a touch of Indian flavour to your next event? Contact
              The Hunger’s Point today! We'd be happy to discuss your catering
              needs and create a menu that will leave a lasting impression on
              your guests.
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

export default Events;
