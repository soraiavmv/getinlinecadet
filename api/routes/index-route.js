const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("index", { title: "GETinLINE" }));

module.exports = router;
