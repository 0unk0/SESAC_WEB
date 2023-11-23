const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("사용자 간단 프로필");
});

router.get("/profile", (req, res) => {
  res.send("사용자 프로필");
});

router.post("/profile", (req, res) => {
  res.send("사용자 프로필 생성");
});

router.put("/profile", (req, res) => {
  res.send("사용자 프로필 수정");
});

router.delete("/profile", (req, res) => {
  res.send("사용자 프로필 삭제");
});

router.get("/settings", (req, res) => {
  res.send("Welcome to 메인 페이지");
});

module.exports = router;
