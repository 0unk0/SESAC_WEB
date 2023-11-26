const express = require("express");
const session = require("express-session");
const path = require("path");
const nunjucks = require("nunjucks");

const app = express();
const port = 3000;

const mainRoutes = require("./src/routes/mainRoutes.js");
const authRoutes = require("./src/routes/authRoutes.js");
const cartRoutes = require("./src/routes/cartRoutes.js");
const productRoutes = require("./src/routes/productRoutes.js");

app.set("view engine", "html");
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "abcd1234",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", mainRoutes);
app.use("/api", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`서버가 ${port}에서 대기중...`);
});
