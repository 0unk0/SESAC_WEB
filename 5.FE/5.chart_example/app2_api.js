const express = require("express");
const sqlite = require("sqlite3");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get("/api/chart-data", (req, res) => {
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
      // const labels = JSON.stringify(rows.map((rows) => rows.Month)); // array가 아니라 문자열로 되버리는 듯
      const labels = rows.map((rows) => rows.Month);
      const revenues = rows.map((rows) => rows.Revenue);
      res.json({ labels, revenues });
      //   console.log(labels, revenues);
    }
  });

  console.log(rows);
});

app.get("/", (req, res) => {
  const Path = path.join(__dirname, "views", "monthly_revenue2.html");
  res.sendFile(Path);
});
app.listen(PORT, (req, res) => {
  console.log("서버 레디");
});
