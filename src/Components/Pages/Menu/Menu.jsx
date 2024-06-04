import React, { useState, useEffect } from "react";
import "./Menu.css";
import Navbar from "../../Navbar/Navbar";
import imgmenu from "../../../assets/menu1.png";
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // State to track the selected category
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products when the component mounts
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://backend-hungers.onrender.com/api/categories"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://backend-hungers.onrender.com/api/products"
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await fetch(
        `https://backend-hungers.onrender.com/api/products/${category}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "All Menu") {
      // If "All" category is selected, fetch all products
      fetchProducts();
    } else {
      fetchProductsByCategory(category);
    }
  };

  return (
    <>
      <Navbar />
      <div className="">
        <img
          alt="img"
          src={imgmenu}
          className="eventimage1"
          style={{ display: "block" }}
        />
      </div>

      <div className="menulist">
        {["All Menu", ...categories].map((category, index) => (
          <div key={index} className="button-wrapper">
            <button
              className={`button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>
      <div className="box2">
        <div className="selected-category text">{selectedCategory}</div>

        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.productName} />
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.productName}</h3>
                <FontAwesomeIcon icon={faHeart} className="wishlist" />
                <p className="product-price">${product.price}</p>
                <button className="button ">Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
