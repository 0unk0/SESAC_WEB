function getCart(req, res) {
  const cart = req.session.cart || [];
  res.json(cart);
}

function addCart(req, res) {
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
}

function changeQuantity(req, res) {
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
}

function deleteCart(req, res) {
  const productId = parseInt(req.params.productId);

  const cart = req.session.cart;

  const newCart = cart.filter((item) => item.id !== productId);

  req.session.cart = newCart;
  res.json(newCart);
}

module.exports = { getCart, addCart, changeQuantity, deleteCart };
