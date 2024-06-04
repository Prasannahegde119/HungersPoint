import React from "react";
import "./OurStory.css";
import Navbar from "../../Navbar/Navbar";
import story from "../../../assets/our_story.jpg";
import Footer from "../../Footer/Footer";
import franchise2 from "../../../assets/Franchise2.jpg";

function OurStory() {
  return (
    <>
      <Navbar />
      <div className="eventfirstdiv">
        <img alt="img" src={story} className="eventimage"></img>
      </div>
      <div className="box1">
        <div className="headingwithpara">
          <h3 className="element">OUR STORY</h3>
          <p className="tw mb">
            Welcome to The Hunger’s Point, your one-stop shop for a taste of
            India! We're a passionate group of people, bound by the love of
            authentic Indian cuisine and a desire to share it with everyone.
          </p>
        </div>

        <div className="headingwithpara">
          <h3 className="element">IT BEGAN WITH A DREAM</h3>
          <p className="tw mb">
            Our founders have been captivated by Indian flavours for over a
            decade. Their culinary journeys made them bring the vibrant spices
            and rich traditions of Indian cuisine to the Canadian tables. With
            10+ years of experience in the restaurant industry, they knew
            exactly how to craft a dining experience that would captivate taste
            buds and leave you wanting more every time.
          </p>
        </div>
        <div className="headingwithpara">
          <h3 className="element">
            OUR VISION: THE FASTEST-GROWING TASTE OF INDIA
          </h3>
          <p className="tw mb">
            We don't just cook food, we give experiences. Our vision is to
            become the fastest-growing segment of quick-service restaurants
            offering authentic Indian cuisine. We believe everyone deserves to
            experience the joy of Indian flavours and we're committed to making
            them accessible and delicious.<br></br> Join us on this flavorful
            adventure! We invite you to explore our menu, experience our vibrant
            atmosphere, and discover why The Hunger’s Point is your perfect
            destination for a taste of India.
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
      </div>

      <Footer />
    </>
  );
}

export default OurStory;
