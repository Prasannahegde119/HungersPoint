const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
let connectDB = async () => {
  try {
    let conn = await mongoose.connect(
      "mongodb+srv://hegdeprasanna118:WMO9KYyLRJGUM3dS@hungerspoint.ojnulx3.mongodb.net?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
