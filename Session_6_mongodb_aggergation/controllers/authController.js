const { db } = require("../db");
const crypto = require("crypto");

const register = async (username, password) => {
  const existingUser = await db.users.findOne({
    username: username,
  });
  if (existingUser) {
    throw new Error("Username already existed");
  }
  const user = {
    username: username,
  };
  const { salt, hashed } = generatePassword(password);

  user.salt = salt;
  user.hashed = hashed;

  await db.users.insertOne(user);
  return user;
};
const login = async (username, password) => {
  const existingUser = await db.users.findOne({ username: username });
  if (!existingUser) {
    throw new Error("Username does not exist");
  }
  if (!verifyPassword(password, existingUser.salt, existingUser.hashed)) {
    throw new Error("Password is not correct!");
  }
};
const generatePassword = (password) => {
  //key
  const salt = crypto.randomBytes(128).toString("base64");

  //pbkdf2Sync  mã hóa mật khẩu
  // vong lặp 10000
  // độ dài 2056
  // thuật toán mã hóa sha512
  const hashedPassword = crypto.pbkdf2Sync(
    password,
    salt,
    10000,
    256,
    "sha512"
  );
  return {
    hashed: hashedPassword.toString("hex"),
    salt: salt,
  };
};
const verifyPassword = (password, salt, hashedPassword) => {
  const hashed = crypto.pbkdf2Sync(password, salt, 10000, 256, "sha512");
  return hashed.toString("hex") == hashedPassword;
};
module.exports = { register, login };
