const express = require("express");
const nunjucks = require("nunjucks");

const app = express();
const port = 3000;

nunjucks.configure("views", { express: app });
app.set("view engine", "html");

app.get("/page", (req, res) => {
  const data = {
    title: "마이 페이지",
    content: "여기에 본문이 들어갈 내용을 작성하시오....",
  };
  res.render("main", data);
});

app.listen(port, () => {
  console.log(`서버가 ${port} 에서 대기중..`)
})