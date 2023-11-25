document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/products")
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
  fetch(`/api/cart/${productId}`)
    .then((response) => response.json())
    .then((product) => {
      fetch("/api/cart")
        .then((response) => response.json())
        .then((cart) => {});
    });
}
