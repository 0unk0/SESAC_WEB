const express = require("express");
const session = require("express-session");

const app = express();
const port = 3000;

app.use(
  session({
    secret: "my-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  req.session.username = "user1";
  req.session.cart = ["사과우유", "딸기우유", "바나나우유"];
  res.send(`세션ID: ${req.sessionID} ${JSON.stringify(req.session)}`);
});

app.get("/user", (req, res) => {
  console.log(req.session);
  //   console.log("Session Info: ", req.sessionStore.sessions);
  res.send(`세션ID: ${req.sessionID} ${JSON.stringify(req.session)}`);
});

app.listen(port, () => {
  console.log("서버레디");
});
