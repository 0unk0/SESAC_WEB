const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const nunjucks = require("nunjucks");

const app = express();
const port = 3000;

const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "html");

app.use("/static", express.static("public"));
app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 세션 미들웨어
app.use(
  session({
    secret: "this-is-my-important-secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (user) {
    console.log("로그인 성공");
    req.session.user = user;
    res.json({ message: "로그인 성공!" });
  } else {
    console.log("로그인 실패");
    res.status(401).json({ message: "로그인 실패" });
  }
});

app.get("/profile", (req, res) => {
  const user = req.session.user;
  console.log(user);

  if (user) {
    res.json({ username: user.username, message: "프로필 정보" });
  } else {
    res.status(401).json({ message: "로그인이 필요합니다." });
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("세션 삭제 오류??", err);
      res.status(500).json({ message: "로그아웃 실패" });
    } else {
      res.json({ message: "로그아웃 성공!" });
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index2.html"));
});

app.listen(port, () => {
  console.log(`서버가 ${port} 에서 대기중...`);
});
