function addToCart(productId) {
  fetch(`/api/cart/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
    });
}
