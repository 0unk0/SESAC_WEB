const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("상품 페이지");
});

router.get("/details", (req, res) => {
  res.send("상품 디테일 페이지");
});

router.get("/list", (req, res) => {
  res.send("상품 리스트 페이지");
});

module.exports = router;
