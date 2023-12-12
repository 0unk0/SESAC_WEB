const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const bodyParser = require("body-parser");
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
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const user = {
  username: "user",
  password: "pass1",
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    req.flash("message", [
      { type: "success", text: "로그인에 성공하였습니다." },
      { type: "info", text: "신규 버전이 출시되었습니다." },
      { type: "warning", text: "구버전은 한달 후에 삭제됩니다." },
    ]);
  } else {
    req.flash("error", "Login failed. Please check your username and password.");
  }
  req.flash("info", "Welcome to my homepage"); // 메세지 담기
  res.redirect("/");
});

app.get("/", (req, res) => {
  const successMessage = req.flash("message");
  const errorMessage = req.flash("error");

  res.render("login", { successMessage, errorMessage });
});
app.listen(PORT, (req, res) => {
  console.log(`서버가 ${PORT}에서 대기중...`);
});
