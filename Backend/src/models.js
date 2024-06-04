const mongoose = require("mongoose");

// Sample Schema
const SampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Sample = mongoose.model("Sample", SampleSchema);

// Product Schema
const ProductSchema = new mongoose.Schema(
  {
    productID: {
      type: String,
      required: true,
      unique: true,
    },
    productName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

// Export both models
module.exports = {
  Sample,
  Product,
};
