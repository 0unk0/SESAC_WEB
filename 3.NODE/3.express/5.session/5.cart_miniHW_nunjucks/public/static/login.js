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
      location.reload();
    });
}

function checkLoginStatus() {
  fetch("/api/check-login")
    .then((response) => response.json())
    .then((data) => {
      if (data.username) {
        console.log("사용자 이름:", data.username);
      } else {
        console.log("로그인된 사용자 없음");
      }
      location.reload();
    })
    .catch((error) => {
      console.error("로그인 상태 확인 오류:", error);
      location.reload();
    });
}
