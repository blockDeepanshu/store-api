require("dotenv").config();
require("express-async-errors");

const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

const ProductRoutes = require("./routes/products.route");

const connectDB = require("./services/connectDB");

const express = require("express");

const app = express();

app.use(express.json());

app.use("/api/v1/products", ProductRoutes);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI.replace(
  "<password>",
  process.env.MONGO_PASSWORD
);

const start = async () => {
  try {
    await connectDB(MONGO_URI);

    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
