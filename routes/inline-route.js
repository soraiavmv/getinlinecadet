const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("inline", { title: "IN LINE" }));

module.exports = router;
