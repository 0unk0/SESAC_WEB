const express = require("express");
const router = express.Router();

const checkLogin = require("../middlewares/authMiddleware.js");
const cartController = require("../controllers/cartController.js");

router.get("/api/cart", checkLogin, cartController.getCart);
router.get("/api/cart/:productId", checkLogin, cartController.addCart);
router.put("/api/cart/:productId/:change", checkLogin, cartController.changeQuantity);
router.delete("/api/cart/:productId", checkLogin, cartController.deleteCart);

module.exports = router;
