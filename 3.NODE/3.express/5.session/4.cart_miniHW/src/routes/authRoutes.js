const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController.js");

router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.use("/check-login", authController.checkLogin);

module.exports = router;
