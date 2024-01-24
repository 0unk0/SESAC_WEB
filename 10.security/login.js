const express = require("express");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
const port = 3000;

const db = new sqlite3.Database("users.db");

db.run("CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY, username TEXT, password TEXT)", (err) => {
  if (err) {
    console.log("테이블 생성 실패");
  } else {
    const initAccounts = [
      { id: 1, username: "admin", password: "admin" },
      { id: 2, username: "user1", password: "pass1" },
      { id: 3, username: "user2", password: "pass2" },
      { id: 4, username: "user3", password: "pass3" },
    ];

    initAccounts.forEach(({ id, username, password }) => {
      db.run("INSERT OR IGNORE INTO users (id, username, password) values (?, ?, ?)", [id, username, password], (err) => {
        if (err) {
          console.error("데이터 삽입 실패");
        }
      });
    });
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM users WHERE username=? AND password=?`;
  console.log(query);

  db.get(query, [username, password], (err, row) => {
    if (err) {
      console.error("DB 에러");
    }
    if (row) {
      res.send(`로그인 성공: ${row.username}`);
    } else {
      res.status(401).send(`로그인 실패: ${username}`);
    }
  });
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});
app.listen(port, () => {
  console.log("서버 레디");
});
