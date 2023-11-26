const express = require("express");
const router = express.Router();

const checkLogin = require("../middlewares/authMiddleware.js");
const cartController = require("../controllers/cartController.js");

router.get("/", checkLogin, cartController.getCart);
router.get("/:productId", checkLogin, cartController.addCart);
router.put("/:productId/:change", checkLogin, cartController.changeQuantity);
router.delete("/:productId", checkLogin, cartController.deleteCart);

module.exports = router;
