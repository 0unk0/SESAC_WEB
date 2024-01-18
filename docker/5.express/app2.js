const express = require("express");
const morgan = require("morgan");
const app = express();

const port = 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
    console.log("홈222");
    res.send("<h2>Welcome to my home222</h2>");
})

app.listen(port, () => {
    console.log("server ready222...", port);
})