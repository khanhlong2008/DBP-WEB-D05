const jwt = require("jsonwebtoken");

//JWT json web token
const authentication = (req, res, next) => {
  //   const header = req.headers;
  //   console.log(header);
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).send("User must login first");
  } else {
    const jwtStr = token.split(" ")[1];
    jwt.verify(jwtStr, "MY_SECRET_KEY", (err, decoded) => {
      if (err) {
        res.status(401).send("Invalid token");
      } else {
        req.user = { username: decoded.username, id: decoded.id };
        next();
      }
    });
  }
};

module.exports = authentication;
