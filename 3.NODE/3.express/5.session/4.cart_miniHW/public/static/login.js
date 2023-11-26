document.addEventListener("DOMContentLoaded", () => {
  checkLoginStatus();
});

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("로그인 실패");
      }
    })
    .then((data) => {
      console.log(data.message);
      alert(data.message);
      checkLoginStatus();
    })
    .catch((error) => {
      console.log("로그인 실패:", error);
      alert("로그인 실패!");
    });
}

function logout() {
  fetch("/api/logout")
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      showLoginForm();
    });
}

function checkLoginStatus() {
  fetch("/api/check-login")
    .then((response) => response.json())
    .then((data) => {
      if (data.username) {
        showProfile(data.username);
        console.log("사용자 이름:", data.username);
      } else {
        showLoginForm();
        console.log("로그인된 사용자 없음");
      }
    })
    .catch((error) => {
      console.error("로그인 상태 확인 오류:", error);
      showLoginForm();
    });
}

function showProfile(username) {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("profile").style.display = "block";
  document.getElementById("usernameSpan").innerText = username;
  document.getElementById("navUser").style.display = "block";
  document.getElementById("navUsernameSpan").innerText = username;
}

function showLoginForm() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("profile").style.display = "none";
  document.getElementById("navUser").style.display = "none";
}
