const product = require("../data/product.js");
const cartController = require("../controllers/cartController.js");

function home(req, res) {
  const user = req.session.user || "";
  res.render("index", { username: user.username });
}

function cart(req, res) {
  const user = req.session.user || "";
  const cart = req.session.cart;
  const total = cartController.calculateTotalAmount(cart);
  res.render("cart", { username: user.username, cart: cart, total: total });
}

function products(req, res) {
  const user = req.session.user || "";
  res.render("products", { username: user.username, products: product });
}

module.exports = { home, cart, products };
