const express = require("express");
var path = require('path');

const indexRouter = require("./routes/index-route");
const errorRouter = require("./routes/error-route");
const loginRouter = require("./routes/login-route");
const registerRouter = require("./routes/register-route");
const inlineRouter = require("./routes/inline-route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('.html', require('pug').__express);
app.set('views', path.join(__dirname, "public/views"));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/api/login", loginRouter);
app.use("/api/register", registerRouter);
app.use('/error', errorRouter);
app.use('/inline', inlineRouter);

module.exports = app;
