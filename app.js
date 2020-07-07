const express = require("express");
const path = require("path");

const loginRouter = require("./routes/login-route");
const registerRouter = require("./routes/register-route");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'js')));
app.use("/api/login", loginRouter);
app.use("/api/register", registerRouter);

module.exports = app;
