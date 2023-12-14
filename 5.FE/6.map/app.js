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

app.get("/:locationName", (req, res) => {
  const name = req.params.locationName;

  console.log(rows);
});

app.get("/", (req, res) => {
  const Path = path.join(__dirname, "map3.html");
  res.sendFile(Path);
});

app.listen(PORT, (req, res) => {
  console.log("서버 레디");
});
