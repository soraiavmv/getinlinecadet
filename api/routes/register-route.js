const express = require("express");
const router = express.Router();
const registerModel = require("../services/user-service");
const crypto = require("crypto-js");

router.post("/", async (req, res) => {
  let password = crypto.MD5(req.body.password).toString();
  let username = req.body.username;
  try {
    let result = await registerModel.createUser(username, password);
    res.send(result);
  } catch (error) {
    if(error.errors[0].type === "unique violation"){
      res.send(null);
    }
  }

});

module.exports = router;
