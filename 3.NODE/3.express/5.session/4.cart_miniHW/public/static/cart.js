document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/cart")
    .then((response) => response.json())
    .then((cart) => {
      fetch("/api/check-login")
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            alert("로그인이 필요합니다.");
            window.location.href = "/";
          }
        })
        .then(() => {
          displayCart(cart);
        });
    });
});

function displayCart(cart) {
  const cartTableBody = document.querySelector("#cartTable tbody");
  cartTableBody.innerHTML = "";

  cart.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>
          <span id="quantity-${item.id}">${item.quantity}</span>
          <button onclick="increaseQuantity(${item.id})">+</button>
          <button onclick="decreaseQuantity(${item.id})">-</button>
        </td>
        <td><button onclick="removeFromCart(${item.id})">Remove</button></td>
      `;
    cartTableBody.appendChild(row);
  });

  const total = calculateTotalAmout(cart);

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td colspan="3"></td>  
    <td>Total:</td>
    <td>${total}</td>
  `;
  cartTableBody.appendChild(totalRow);
}

function calculateTotalAmout(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function increaseQuantity(productId) {
  fetch(`/api/cart/${productId}/1`, { method: "PUT" })
    .then((response) => response.json())
    .then((cart) => {
      displayCart(cart);
    });
}

function decreaseQuantity(productId) {
  fetch(`/api/cart/${productId}?change=-1`, { method: "POST" })
    .then((response) => response.json())
    .then((cart) => {
      displayCart(cart);
    });
}

function removeFromCart(productId) {
  fetch(`/api/cart/${productId}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((cart) => {
      displayCart(cart);
    });
}
