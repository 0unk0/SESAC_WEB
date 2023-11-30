const express = require("express");
const sqlite3 = require("sqlite3");

const fs = require("fs");

const app = express();
const port = 3000;
const dbFile = "mydb1.db";

const db = new sqlite3.Database(dbFile);

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get("/:table", (req, res) => {
  const db_table = req.params.table;

  const query = `SELECT * FROM ${db_table}`;

  db.all(query, (err, rows) => {
    res.json(rows);
  });
});

app.get("/:table/:id", (req, res) => {
  const db_table = req.params.table;
  const table_id = req.params.id;

  const query = `SELECT * FROM ${db_table} WHERE id = ?`;

  db.all(query, [table_id], (err, rows) => {
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
        reject(err);
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
