document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/check-login").then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      alert("로그인이 필요합니다.");
      window.location.href = "/";
    }
  });
});

function increaseQuantity(productId) {
  fetchCart(`/api/cart/${productId}/1`, "PUT");
}

function decreaseQuantity(productId) {
  fetchCart(`/api/cart/${productId}/-1`, "PUT");
}

function removeFromCart(productId) {
  fetchCart(`/api/cart/${productId}`, "DELETE");
}

function fetchCart(input, method) {
  fetch(input, { method: method })
    .then((response) => response.json())
    .then(() => {
      location.reload();
    });
}

function calculateTotalAmount(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
