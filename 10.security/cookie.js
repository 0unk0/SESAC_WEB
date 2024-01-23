const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("mycookie", "test", { maxAge: 60000 });
  res.cookie("username", "user1", { maxAge: 90000 });
  res.cookie("cart", ["사과우유", "딸기 우유", "바나나우유"], { maxAge: 120000 });
  res.send("쿠키를 전달하였습니다. 1분후에 만료됩니다.");
});

app.get("/user", (req, res) => {
  const { mycookie, username, cart } = req.cookies;

  console.log(req.cookies);
  res.send(`당신 ${username}이 가져온 쿠키는 이것입니다, ${cart}`);
});
app.listen(port, () => {
  console.log(`서버 이즈 러닝 ${port}`);
});
