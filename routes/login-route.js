const express = require("express");
const router = express.Router();
const userService = require("../services/user-service");
const crypto = require("crypto-js");

router.post("/", async (req, res) => {
  let password = crypto.MD5(req.body.password).toString();
  let username = req.body.username;

  let result = await userService.authenticate(username, password);
  res.send(result);
});

module.exports = router;
