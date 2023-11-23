const express = require("express");
const session = require("express-session");

const app = express();
const port = 3000;

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  req.session.visitCount = req.session.visitCount || 0;

  // 없으면 undefined++ 라서 실패
  req.session.visitCount++;
  console.log("SessionID", req.sessionID);
  console.log("SessionInfo: ", req.session);
  next();
});

app.get("/", (req, res) => {
  console.log(req.session);
  res.send(`당신의 방문 횟수는 ${req.session.visitCount} 입니다`);
});

app.listen(port, () => {
  console.log("서버 레디...");
});
