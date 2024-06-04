import React from "react";
import Navbar from "../../Navbar/Navbar";
import ImageSlider from "../../Slider/Slider";
import Review from "../../Review/Review";
import Footer from "../../Footer/Footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <Review />
      <Footer />
    </div>
  );
}

export default Homepage;
