const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const port = 3000;

const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

const products = [
  { id: 1, name: "Product 1", price: 2000 },
  { id: 2, name: "Product 2", price: 3000 },
  { id: 3, name: "Product 3", price: 1500 },
];

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

// req.url 확인용
app.use((req, res, next) => {
  console.log("req.method:", req.method, "| req.url:", req.url);
  next();
});

// ----------------------------------------------

app.get("/cart", (req, res) => {
  console.log("Session Info:", req.sessionStore.sessions);
  res.sendFile(path.join(__dirname, "public", "cart.html"));
});

app.get("/products", (req, res) => {
  console.log("Session Info:", req.sessionStore);
  res.sendFile(path.join(__dirname, "public", "products.html"));
});

// ----------------------------------------------

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const user = users.find((i) => i.username == username && i.password == password);

  if (user) {
    req.session.user = user;

    console.log("로그인 성공");
    res.json({ message: "로그인 성공!" });
  } else {
    console.log("로그인 실패");
    res.status(401).json({ message: "로그인 실패" });
  }
});

app.get("/api/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("삭제 오류");
      res.status(500).json({ message: "로그아웃 실패" });
    } else {
      console.log("삭제 성공");
      res.json({ message: "로그아웃 성공" });
    }
  });
});

app.get("/api/check-login", (req, res) => {
  const user = req.session.user;
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "로그인이 필요합니다." });
  }
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

// ----------------------------------------------

function checkLogin(req, res, next) {
  const user = req.session.user;
  if (!user) {
    res.status(404).json({ message: "로그인이 필요합니다." });
  } else {
    next();
  }
}

app.get("/api/cart", checkLogin, (req, res) => {
  const cart = req.session.cart || [];
  res.json(cart);
});

app.get("/api/cart/:productId", checkLogin, (req, res) => {
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

app.put("/api/cart/:productId/:change", checkLogin, (req, res) => {
  const productId = parseInt(req.params.productId);
  const change = parseInt(req.params.change);

  const cart = req.session.cart;

  const item = cart.find((i) => i.id === productId);

  if (!item) {
    return res.status(404).json({ message: "상품을 찾을 수 없습니다" });
  }

  item.quantity = Math.max(1, item.quantity + change);
  req.session.cart = cart;
  res.json(cart);
});

app.delete("/api/cart/:productId", checkLogin, (req, res) => {
  const productId = parseInt(req.params.productId);

  const cart = req.session.cart;

  const newCart = cart.filter((item) => item.id !== productId);

  req.session.cart = newCart;
  res.json(newCart);
});

app.listen(port, () => {
  console.log(`서버가 ${port}에서 대기중...`);
});
