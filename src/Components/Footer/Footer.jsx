import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/logofooter.png";
import instaicon from "../../assets/instagram.svg";
import fbicon from "../../assets/facebook.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-sub">
        <div className="footer-top">
          <div>
            <img className="footer-logo" alt="logo" src={footerlogo} />
          </div>
          <div className="footer-icons">
            <img className="footer-icon" alt="instagram" src={instaicon} />
            <img className="footer-icon" alt="facebook" src={fbicon} />
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <div>Event and catering |</div>
            <div>Careers |</div>
            <div>Contact us |</div>
            <div>Our Story |</div>
          </div>
          <div className="footer-text">
            2024, Hunger Points, All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
