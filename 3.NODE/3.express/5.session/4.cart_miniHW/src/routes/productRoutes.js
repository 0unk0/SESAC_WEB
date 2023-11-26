const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController.js");

router.get("/api/products", productController.getProducts);

module.exports = router;
