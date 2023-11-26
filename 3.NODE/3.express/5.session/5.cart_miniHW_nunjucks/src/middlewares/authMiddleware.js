function checkLogin(req, res, next) {
  const user = req.session.user;
  if (!user) {
    res.status(404).json({ message: "로그인이 필요합니다." });
  } else {
    next();
  }
}

module.exports = checkLogin;
