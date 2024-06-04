import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import icon from "../../assets/basket.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sticky-top">
      <header className="header sticky-top">
        <nav className="navbar">
          <div className="custom-flex-container">
            <div className="nav-content">
              <img alt="imagelogo" className="imagelogo" src={logo} />
            </div>

            <div className={`firstlist ${showMenu ? "show" : ""}`}>
              <ul className="navlist">
                <li className="menu-item">
                  <div className="text">
                    <Link
                      to="/"
                      className="text"
                      style={{ textDecoration: "none" }}
                    >
                      Home
                    </Link>
                  </div>
                  <span className="underline"></span>
                </li>
                <li className="menu-item">
                  <div className="text">
                    <Link
                      to="/menu"
                      style={{ textDecoration: "none" }}
                      className="text"
                    >
                      Menu
                    </Link>
                  </div>
                  <span className="underline"></span>
                </li>
                <li className="menu-item">
                  <div className="text">
                    <Link
                      to="/events"
                      style={{ textDecoration: "none" }}
                      className="text"
                    >
                      Event & Catering
                    </Link>
                  </div>
                  <span className="underline"></span>
                </li>
                <li className="menu-item">
                  <div className="text">
                    <Link
                      to="/franchise"
                      style={{ textDecoration: "none" }}
                      className="text"
                    >
                      Franchises
                    </Link>
                  </div>
                  <span className="underline"></span>
                </li>
                <li className="menu-item" onClick={toggleDropdown}>
                  <div className="text">
                    About Us{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="arrow-icon"
                    />
                  </div>
                  <span className="underline"></span>
                  <div
                    className={`dropdown-menu ${
                      isDropdownOpen ? "visible" : ""
                    }`}
                  >
                    <div className="menu-content">
                      <Link
                        to="/Careers"
                        style={{ textDecoration: "none" }}
                        className="text"
                      >
                        Careers
                      </Link>
                    </div>
                    <div className="menu-content">
                      <Link
                        to="/ourstory"
                        style={{ textDecoration: "none" }}
                        className="text"
                      >
                        Our Story
                      </Link>
                    </div>
                    <div className="menu-content">
                      <Link
                        to="/Contactus"
                        style={{ textDecoration: "none" }}
                        className="text"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="custom-flex-item">
              <div className="header-right">
                <div className="buttons-states-dark7">
                  <div>
                    <img alt="gh" className="icon6" src={icon} />
                  </div>
                  <div className="text">0</div>
                </div>
                <div className="custom-button">
                  <div className="custom-text">Login</div>
                </div>
              </div>
              <div className="hamburger-menu" onClick={toggleMenu}>
                <FaBars />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
