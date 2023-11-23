const express = require("express");
const app = express();

const nunjucks = require("nunjucks");

nunjucks.configure("views", {
    autoescape: true,
    express: app
});

// app.set("view engine", "njk");
app.set("view engine", "html");

app.get("/", (req, res) => {
    res.render("index", {title: "nunjucks 앱", message: "헤딩1 본문"});
});

  app.get("/greeting", (req, res) => {
    const username = "최윤경";
    res.render("greeting", { username: username });
  });
  
  app.get("/welcome", (req, res) => {
    const isAdmin = true;
    res.render("welcome", { isAdmin: isAdmin });
  });
  
  app.get("/fruits", (req, res) => {
    const fruits = ["Apple", "Banana", "Grape"];
  
    res.render("fruits", { fruits: fruits });
  });
  
  app.get("/page", (req, res) => {
    const data = {
      title: "마이 페이지",
      content: "여기에 본문이 들어갈 내용을 작성하시오....",
    };
    res.render("main", data);
  });
  

const port = 3000;

app.listen(port, () => {
    console.log(`서버가 ${port} 에서 대기중..`)
})