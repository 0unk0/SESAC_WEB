document.addEventListener("DOMContentLoaded", () => {
  fetch("/products")
    .then((response) => response.json())
    .then((products) => {
      displayProduct(products);
    });
});

function displayProduct(products) {
  const productTableBody = document.querySelector("#productTable tbody");

  products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><button onclick="addToCart(${product.id})">담기</button></td>
        `;
    productTableBody.appendChild(row);
  });
}

function addToCart(productId) {
  fetch(`/add-to-cart/${productId}`)
    .then((response) => response.json())
    .then((product) => {
      alert(product.message);
      fetch("/cart")
        .then((response) => response.json())
        .then((cart) => {
          window.location.href = "/cart.html";
        });
    });
}
