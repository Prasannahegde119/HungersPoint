import React, { useState, useEffect } from "react";
import "./Menu.css";
import Navbar from "../../Navbar/Navbar";
import imgmenu from "../../../assets/menu1.png";

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
      const response = await fetch("http://localhost:5000/api/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${category}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
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
          className="eventimage"
          style={{ display: "block" }}
        />
      </div>
      <div className="box1">
        <div className="menulist">
          {["All", ...categories].map((category, index) => (
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
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.productName} />
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.productName}</h3>
                <p className="product-price">${product.price}</p>
                <button className="add-to-cart">Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
