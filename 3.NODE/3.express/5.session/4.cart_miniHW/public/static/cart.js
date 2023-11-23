document.addEventListener("DOMContentLoaded", () => {
  fetch("/cart")
    .then((response) => response.json())
    .then((cart) => {
      displayCart(cart);
    });
});
let total = 0;

function displayCart(cart) {
  console.log("cart다람쥐", cart);
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
  fetch(`/update-quantity/${productId}?change=1`, { method: "POST" })
    .then((response) => response.json())
    .then((cart) => {
      displayCart(cart);
    });
}

function decreaseQuantity(productId) {
  fetch(`/update-quantity/${productId}?change=-1`, { method: "POST" })
    .then((response) => response.json())
    .then((cart) => {
      displayCart(cart);
    });
}

function removeFromCart(productId) {
  fetch(`/remove-from-cart/${productId}`, { method: "POST" })
    .then((response) => response.json())
    .then((cart) => {
      displayCart(cart);
    });
}
