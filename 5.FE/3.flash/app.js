const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const nunjucks = require("nunjucks");

const app = express();
const PORT = 3000;

nunjucks.configure("views", {
  express: app,
});

app.set("view engine", "html");

// 세션 설정
app.use(
  session({
    secret: "myscret",
    resave: false,
    saveUninitialized: true,
  })
);

// flash 미들웨어 설정
app.use(flash());

app.get("/", (req, res) => {
  req.flash("info", "Welcome to my homepage"); // 메세지 담기
  res.redirect("/message");
});

app.get("/message", (req, res) => {
  // res.send(req.flash("info")); // 메세지 가져오기

  res.render("message", {
    messages: req.flash(),
  });
});
app.listen(PORT, (req, res) => {
  console.log(`서버가 ${PORT}에서 대기중...`);
});
