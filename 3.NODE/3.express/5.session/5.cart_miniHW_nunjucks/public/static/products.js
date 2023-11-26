document.addEventListener("DOMContentLoaded", () => {
  checkLoginStatus();
});

function checkLoginStatus() {
  fetch("/api/check-login")
    .then((response) => response.json())
    .then((data) => {
      if (data.username) {
        document.getElementById("navUser").style.display = "block";
        document.getElementById("navUsernameSpan").innerText = data.username;
        console.log("사용자 이름:", data.username);
      }
    });
}

function addToCart(productId) {
  fetch(`/api/cart/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
    });
}
