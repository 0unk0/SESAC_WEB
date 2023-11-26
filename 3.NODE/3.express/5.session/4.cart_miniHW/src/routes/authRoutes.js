const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController.js");

router.post("/api/login", authController.login);
router.get("/api/logout", authController.logout);
router.use("/api/check-login", authController.checkLogin);

module.exports = router;
