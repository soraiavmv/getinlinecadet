const express = require("express");
const router = express.Router();
const checkAuth = require("../auth/auth-check.js");

router.get("/", (req, res) => {
  res.render("inline");
});

module.exports = router;
