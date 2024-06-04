import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"; // Import the new CSS file
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import card1 from "../../assets/card1.png";
import middle1 from "../../assets/middle1.png";
import middle2 from "../../assets/middle2.jpg";
import middle3 from "../../assets/middle3.jpeg";
import middle4 from "../../assets/middle4.png";
import menu1 from "../../assets/menu1.svg";
import order from "../../assets/order.svg";

function ImageSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          <div className="slick-slide">
            <img src={image1} alt="Slide 1" />
          </div>
          <div className="slick-slide">
            <img src={image2} alt="Slide 2" />
          </div>
          <div className="slick-slide">
            <img src={image3} alt="Slide 3" />
          </div>
        </Slider>
      </div>
      <div className="bgpadding">
        <div className="firstcard">
          <p className="element">OUR MISSION</p>
          <div className="description">
            We don't just cook food, we give experiences. Our vision is to
            become the fastest-growing segment of quick-service restaurants
            offering authentic Indian cuisine. We believe everyone deserves to
            experience the joy of Indian flavours and we're committed to making
            them accessible and delicious.
          </div>
        </div>
      </div>
      <div className="bgcolorblack">
        <div className="element">OUR LOCATION</div>
        <div>
          <div className="secondcard">
            <div className="leftside">
              <div className="leftsidechild">
                <div className="sample">
                  <div className="heading">Hunger Points</div>
                  <div className="samplefirst">
                    <div className="samplesecond">
                      <div className="locationicon">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                      <div className="address">
                        4715 88 Ave NE Unit 1115, Calgary, AB T3J 4C5
                      </div>
                    </div>
                    <div className="samplesecond">
                      <div className="locationicon">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </div>
                      <div className="address">(705) 574-1313</div>
                    </div>
                  </div>
                </div>
                <div className="middle">
                  <div className="middletitle">Our Delivery Partners</div>
                  <div className="middleimages">
                    <img src={middle1} alt="Uber Eats" className="imagesize" />
                    <img src={middle2} alt="Uber Eats" className="imagesize" />
                    <img src={middle3} alt="Uber Eats" className="imagesize" />
                    <img src={middle4} alt="Uber Eats" className="imagesize" />
                  </div>
                </div>
                <div className="last">
                  <button className="lastbuttons">
                    <div className="leftbutton flexrow">
                      <img src={menu1} alt="menuicon" />
                      <div className="text">VIEW MENU</div>
                    </div>
                  </button>
                  <button className="lastbuttons">
                    <div className="rightbutton flexrow">
                      <img src={order} alt="ordericon" />
                      <div className="text">ORDER ONLINE</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="rightside">
              <img alt="image" src={card1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
