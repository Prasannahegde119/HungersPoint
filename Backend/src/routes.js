const express = require("express");
const router = express.Router();
const { Sample, Product } = require("./models");

// Sample Routes
router.get("/sample", async (req, res) => {
  try {
    const samples = await Sample.find();
    res.json(samples);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/sample", async (req, res) => {
  const sample = new Sample({
    name: req.body.name,
  });

  try {
    const savedSample = await sample.save();
    res.status(201).json(savedSample);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/products", async (req, res) => {
  const product = new Product({
    productID: req.body.productID,
    productName: req.body.productName,
    image: req.body.image,
    category: req.body.category,
    price: req.body.price,
    description: req.body.description,
  });

  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get all unique categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Product.distinct("category");
    res.json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to get products by category
router.get("/products/:category", async (req, res) => {
  const category = req.params.category;

  try {
    const products = await Product.find({ category: category });
    res.json(products);
  } catch (err) {
    console.error("Error fetching products by category:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
