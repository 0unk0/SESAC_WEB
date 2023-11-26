const product = require("../data/product.js");
const cartController = require("../controllers/cartController.js");

function home(req, res) {
  res.render("index");
}

function cart(req, res) {
  const cart = req.session.cart;
  const total = cartController.calculateTotalAmount(cart);
  res.render("cart", { cart: cart, total: total });
}

function products(req, res) {
  res.render("products", { products: product });
}

module.exports = { home, cart, products };
