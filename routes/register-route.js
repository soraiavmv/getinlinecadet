const express = require("express");
const router = express.Router();
const registerModel = require("../js/models/register-model");
const crypto = require("crypto-js");


router.post("/", async (req, res) => {

  let password = crypto.MD5(req.body.password).toString();
  let username = req.body.username;
  let result = await registerModel.createUser(username, password);

  res.send(result);
});

module.exports = router;
