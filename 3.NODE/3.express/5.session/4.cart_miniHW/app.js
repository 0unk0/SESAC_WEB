const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "abcd1234",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

const products = [
  { id: 1, name: "Product 1", price: 2000 },
  { id: 2, name: "Product 2", price: 3000 },
  { id: 3, name: "Product 3", price: 1500 },
];

app.get("/", (req, res) => {
  console.log("Session Info:", req.sessionStore);
  res.sendFile(path.join(__dirname, "public", "product.html"));
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/cart", (req, res) => {
  const cart = req.session.cart || [];
  res.json(cart);
});

app.get("/cart.html", (req, res) => {
  console.log("Session Info:", req.sessionStore.sessions);
  res.sendFile(path.join(__dirname, "cart.html"));
});

app.get("/add-to-cart/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
  }

  const cart = req.session.cart || [];

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  req.session.cart = cart;
  res.json({ message: "상품이 장바구니에 추가되었습니다.", cart });
});

app.post("/update-quantity/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const change = parseInt(req.query.change);

  const cart = req.session.cart;

  const item = cart.find((i) => i.id === productId);

  if (!item) {
    return res.status(404).json({ message: "상품을 찾을 수 없습니다" });
  }

  item.quantity = Math.max(1, item.quantity + change);
  req.session.cart = cart;
  res.json(cart);
});

app.post("/remove-from-cart/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);

  const cart = req.session.cart;

  const newCart = cart.filter((item) => item.id !== productId);

  req.session.cart = newCart;
  res.json(newCart);
});

app.listen(port, () => {
  console.log(`서버가 ${port}에서 대기중...`);
});
