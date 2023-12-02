const express = require("express");
const sqlite3 = require("sqlite3");

const fs = require("fs");

const app = express();
const port = 3000;
const dbFile = "mydb1.db";

const db = new sqlite3.Database(dbFile);

app.use(express.json()); // body안에 있는 json 형식 찾아서 파싱
app.use(express.urlencoded({ extended: true })); // -d로 오는 key, value에 대해 파싱

app.get("/users", (req, res) => {
  let query;
  const username = req.query.username;
  // const { username } = req.query;

  if (username) {
    query = `SELECT * FROM users WHERE username="${username}"`;
    // query = `SELECT * FROM users WHERE username LIKE "%${username}%"`;
  } else {
    query = `SELECT * FROM users`;
  }
  db.all(query, (err, rows) => {
    res.json(rows);
  });
});

// 새로운 사용자 생성
app.post("/users", (req, res) => {
  const { username, password } = req.body;

  console.log(username, password);
  const query = `INSERT INTO users (username, password) VALUES(?, ?)`;

  db.run(query, [username, password], (err) => {
    if (err) {
      console.error("사용자 생성 실패", err);
      return;
    }
    res.send("사용자 생성 완료");
  });
});

// 사용자 정보 업데이트
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const { username, password } = req.body;

  const query = "UPDATE users SET username = ?, password = ? WHERE id = ?";
  db.run(query, [username, password, id], (err) => {
    if (err) {
      console.error("사용자 정보 업데이트 실패", err);
      return;
    }
    res.send("사용자 정보 업데이트 성공");
  });
});

// 사용자 삭제
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  const query = `DELETE FROM users WHERE id=?`;

  db.run(query, [id], (err) => {
    if (err) {
      console.error("사용자 삭제 실패", err);
      return;
    }
    console.log("사용자 삭제 성공");
  });
});

app.get("/users/user_id", (req, res) => {
  const user_id = req.params.user_id;

  const query = `SELECT * FROM users WHERE id = ?`;

  db.all(query, [user_id], (err, rows) => {
    res.json(rows);
  });
});

app.get("/products", (req, res) => {
  const price = req.query.price;
  const name = req.query.name;

  function buildQuery() {
    let query = "SELECT * FROM products ";
    const conditions = [];

    if (name) {
      conditions.push(`name LIKE "%${name}%"`);
    }

    if (price) {
      conditions.push(`price = ${price}`);
    }
    if (conditions.length > 0) {
      query += ` WHERE ${conditions.join(" AND ")}`;
    }

    return query;
  }

  const query = buildQuery();

  //   let condition = 0;

  //   if (price) {
  //     if (condition === 0) {
  //       query += " WHERE";
  //     } else {
  //       query += ` AND`;
  //     }
  //     query += ` price=${price}`;
  //     condition = 1;
  //   } else if (name) {
  //     if (condition === 0) {
  //       query += " WHERE";
  //     } else {
  //       query += ` AND`;
  //     }
  //     query += ` name LIKE "%${name}%"`;
  //     condition = 1;
  //   }
  db.all(query, (err, rows) => {
    res.json(rows);
  });
});

app.get("/products/products_id", (req, res) => {
  const products_id = req.params.products_id;

  const query = `SELECT * FROM products WHERE id = ?`;

  db.all(query, [products_id], (err, rows) => {
    res.json(rows);
  });
});

app.get("/:books", (req, res) => {
  let query = `SELECT * FROM books`;

  db.all(query, (err, rows) => {
    res.json(rows);
  });
});

app.get("/books/id", (req, res) => {
  const books_id = req.params.books_id;

  const query = `SELECT * FROM books WHERE id = ?`;

  db.all(query, [books_id], (err, rows) => {
    res.json(rows);
  });
});

// DB 초기화 함수
function init_database() {
  return new Promise((resolve, reject) => {
    const sql = fs.readFileSync("init_database.sql", "utf8");
    console.log(sql);
    db.exec(sql, (err) => {
      if (err) {
        const DB_ALREADY_INITIALIZED = 19;
        // if (err.errno == DB_ALREADY_INITIALIZED) {
        if (err.code === "SQLITE_CONSTRAINT") {
          console.warn("초기화 이미 되어있음");
          resolve();
        } else {
          reject(err);
        }
      } else {
        console.log("초기화 성공");
        resolve();
      }
    });
  });
}

async function main() {
  try {
    await init_database();

    app.listen(port, () => {
      console.log(`서버 레디...${port}`);
    });
  } catch (error) {
    console.log("초기화 실패", error);
  }
}

main();
