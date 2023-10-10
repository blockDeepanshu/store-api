const {
  getAllProducts,
  getAllProductsStatic,
} = require("../controllers/products.controller");

const router = require("express").Router();

router.get("/", getAllProducts);
router.get("/static", getAllProductsStatic);

module.exports = router;
