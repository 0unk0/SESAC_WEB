const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController.js");

router.get("/", mainController.home);
router.get("/home", mainController.home);
router.get("/cart", mainController.cart);
router.get("/products", mainController.products);

module.exports = router;
