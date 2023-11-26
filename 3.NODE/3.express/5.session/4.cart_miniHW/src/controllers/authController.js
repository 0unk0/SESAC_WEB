function login(req, res) {
  const { username, password } = req.body;
  console.log(username, password);

  const user = users.find((i) => i.username == username && i.password == password);

  if (user) {
    req.session.user = user;

    console.log("로그인 성공");
    res.json({ message: "로그인 성공!" });
  } else {
    console.log("로그인 실패");
    res.status(401).json({ message: "로그인 실패" });
  }
}

function logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.log("삭제 오류");
      res.status(500).json({ message: "로그아웃 실패" });
    } else {
      console.log("삭제 성공");
      res.json({ message: "로그아웃 성공" });
    }
  });
}

function checkLogin(req, res) {
  const user = req.session.user;
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "로그인이 필요합니다." });
  }
}

module.exports = { login, logout, checkLogin };
