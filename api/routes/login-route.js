const express = require("express");
const router = express.Router();
const userService = require("../services/user-service");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const fs = require("fs");

router.post("/", async (req, res) => {
  const password = crypto.MD5(req.body.password).toString();
  const username = req.body.username;

  try {
    let result = await userService.authenticate(username, password);
    const token = jwt.sign(
      {
        username: username,
      },
      fs.readFileSync("config/private.key"),
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({ token: token });
  } catch (error) {
    console.log(error);
    res.send({});
  }
});

module.exports = router;
