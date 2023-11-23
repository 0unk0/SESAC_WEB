const express = require("express");
const app = express();

const userRouter = require("./src/userRouter");
const cartRouter = require("./src/cartRouter");
const productRouter = require("./src/productRouter");

app.use("/user", userRouter);
app.use("/cart", cartRouter);
app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the 메인 페이지");
});

const port = 3000;

app.listen(port, () => {
  console.log("레디");
});
