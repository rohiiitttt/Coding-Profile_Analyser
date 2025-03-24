require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Load environment variables
const PORT = process.env.PORT || 5001;
// const MONGO_URI = process.env.MONGO_URI;

// // Connect to MongoDB
// mongoose
//   .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("MongoDB Connection Error:", err));

// Basic Route
app.get("/", (req, res) => {
  res.send("Welcome to Coding Profile Analyser API!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running correctly on port ${PORT}`);
});
