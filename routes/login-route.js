const express = require("express");
const router = express.Router();
const loginModel = require("../js/models/login-model");

router.get("/", async (req, res) =>{
    let username = req.params.username;
    let password = req.params.password;
    let result = await loginModel.getUser(username, password);
    res.send(result);
});

module.exports = router;