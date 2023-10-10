require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./services/connectDB");

const Product = require("./models/products.model");
const jsonProducts = require("./products.json");

const MONGO_URI = process.env.MONGO_URI.replace(
  "<password>",
  process.env.MONGO_PASSWORD
);

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);

    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};

start();
