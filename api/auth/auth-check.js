const jwt = require("jsonwebtoken");
const fs = require("fs");

module.exports =  (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, fs.readFileSync("config/private.key"));
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized operation",
    });
  }
};
