const products = require("../data/product.js");

function getProducts(req, res) {
  res.json(products);
}

module.exports = { getProducts };
