import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pagenot.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

function Pagenotfound() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="page-not-found">
        <div className="content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
          <button onClick={handleBackToHome} className="home-button">
            Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pagenotfound;
