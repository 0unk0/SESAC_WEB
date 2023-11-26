const products = require("../data/product.js");

function getCart(req, res) {
  const cart = req.session.cart || [];
  res.json(cart);
}

function addCart(req, res) {
  const productId = parseInt(req.params.productId);
  const product = findProduct(products, productId);

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
}

function changeQuantity(req, res) {
  const cart = req.session.cart;
  const productId = parseInt(req.params.productId);

  const product = findProduct(cart, productId);

  const change = parseInt(req.params.change);
  product.quantity = Math.max(1, product.quantity + change);
  req.session.cart = cart;
  res.json(cart);
}

function deleteCart(req, res) {
  const productId = parseInt(req.params.productId);
  let cart = req.session.cart;

  cart = cart.filter((item) => item.id !== productId);

  req.session.cart = cart;
  res.json(cart);
}

function findProduct(data, productId) {
  const product = data.find((p) => p.id === parseInt(productId));

  if (!product) {
    return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
  }
  return product;
}

function calculateTotalAmount(cart) {
  if (cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  } else {
    return "";
  }
}

module.exports = { getCart, addCart, changeQuantity, deleteCart, calculateTotalAmount };
