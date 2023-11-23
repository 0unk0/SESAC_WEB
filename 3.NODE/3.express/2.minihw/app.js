const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const users = {};

app.use("/images", express.static("public/static"));
app.use("/static", express.static("public/static"));
// app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/user", (req, res) => {
  res.json(users);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  const ID = Date.now();
  const name = req.body.name;
  users[ID] = name;
  res.status(201).send("등록 성공");
});

app.put("/user/:id", (req, res) => {
  const ID = req.params.id;
  const name = req.body.name;
  users[ID] = name;
  res.status(200).send("수정 성공");
});
app.delete("/user/:id", (req, res) => {
  try {
    const ID = req.params.id;
    delete users[ID];
    res.status(204).send();
  } catch (error) {
    console.log("삭제 중 오류 발생,,,", error);
  }
});
app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 에서 대기 중입니다.`);
});
