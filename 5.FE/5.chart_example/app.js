const express = require("express");
const nunjucks = require("nunjucks");
const sqlite = require("sqlite3");

const app = express();
const PORT = 3000;

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "html");

app.get("/", (req, res) => {
  const db = new sqlite.Database("CRMproj.db", (err) => {
    if (err) {
      console.error("데이터 베이스 열기 실패", err);
    }
  });

  const id = "e38e669e-472b-48fa-b1dd-c12a199a0b51";
  const query = `SELECT strftime("%Y-%m", OrderAt) AS Month, Sum(UnitPrice) AS Revenue
    FROM "order" o
    JOIN orderitem oi ON o.id = oi.OrderId
    JOIN item i On oi.ItemId = i.Id
    WHERE i.id = ?
    GROUP BY Month
    ORDER BY Month`;

  const rows = db.all(query, [id], (err, rows) => {
    if (err) {
      console.error("데이터 가져오기 실패");
    } else {
      //   console.log(rows);
      const labels = JSON.stringify(rows.map((rows) => rows.Month));
      const revenues = JSON.stringify(rows.map((rows) => rows.Revenue));

      res.render("monthly_revenue", { labels: labels, revenues: revenues, rows: rows });
    }
  });

  console.log(rows);
});

app.listen(PORT, (req, res) => {
  console.log("서버 레디");
});
