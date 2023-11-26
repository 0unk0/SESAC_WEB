function home(req, res) {
  res.render("index");
}

function cart(req, res) {
  res.render("cart");
}

function products(req, res) {
  res.render("products");
}

module.exports = { home, cart, products };
