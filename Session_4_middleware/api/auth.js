// dang nhap vs dang ki
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const users = [
  { id: 1, username: "alice", password: "123456" },
  { id: 2, username: "bob", password: "123456" },
];
router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    res.status(401).send("Username or password is not correct");
    return;
  }

  //Generate token
  const token = jwt.sign(
    {
      username: username,
      id: user.id,
    },
    //jwt được mã hóa thành duy nhất trên thế giới bằng một chuỗi string duy nhất và k thể mã hóa ngươc lại
    //sign() kí xác nhận
    "MY_SECRET_KEY",
    {
      // THOI GIAN TOKEN HET HAN DC TINH THEO GIAY
      expiresIn: 5 * 60,
    }
  );
  res.json({ username: user.username, token: token });
});
router.post("/register", () => {});

module.exports = router;
