const express = require("express");
const nunjucks = require("nunjucks");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "html");

nunjucks
  .configure("views", {
    autoescape: true,
    express: app,
  })
  .addFilter("formatPostDate", function (date) {
    // 임의의 데이터 포멧 설정
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      min: "numeric",
      min: "numeric",
      second: "numeric",
    };
    return new Date(date).toLocaleDateString("ko-KR", options);
  });

let posts = [];

app.get("/", (req, res) => {
  res.render("index", { posts });
});

app.get("/write", (req, res) => {
  res.render("write");
});
app.post("/write", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const date = new Date();
  posts.push({ title, content, date });

  //   res.send("작성 완료");
  res.redirect("/");
});

app.post("/delete/:index", (req, res) => {
  const index = req.params.index - 1; // 실제 인덱스로 변환
  if (index >= 0 && index < posts.length) {
    posts.splice(index, 1);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log("서버 레디...");
});
