const express =require("express");
const nunjucks = require("nunjucks");
const morgan = require("morgan");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const color = process.env.APP_COLOR;

nunjucks.configure("views", {
    autoescape: true,
    express: app,
})

app.set("view engine", "html");

// app.use(morgan("dev"));
app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.render("hello.html", {color});
})

app.listen(port, () => {
    console.log(`My server is running on ${port}.`);
    console.log(`Server is running on http://localhost:${port}`);
})