const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 5000;

app.use(morgan("dev"));

// 올바른 방법
const corsOptions = {
  origin: ["http://127.0.0.1:5000", "http://127.0.0.1:3000", "http://localhost:3000"], // 허용할 클라이언트 주소
};
app.use(cors(corsOptions));

// 모든 출처에 대해서 허용 - 보안적으로는 좋지 않지만, 가장 쉽게 문제 해결
// app.use(cors());

// cors 없이
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   next();
// });

const data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api/data", (req, res) => {
  //   res.json({ message: "Hello From Express Server" });
  res.json(data);
});

app.listen(port, () => {
  console.log(`서버 레디.. on port ${port}`);
});
