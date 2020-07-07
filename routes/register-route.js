const express = require("express");
const router = express.Router();
const registerModel = require("../js/models/register-model");

router.post("/", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let result = await registerModel.createUser(username, password);
  res.send(result);
});

module.exports = router;