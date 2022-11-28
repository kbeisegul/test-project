var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var infoRouter = require('./routes/info');
var defaultRouter = require('./routes/default');

var app = express();
app.get('/', function (req, res) {
  var name = req.query.name ? req.query.name: 'World'
  res.send(`Hello, ${name}`)
})

// Define request response for about page
app.get('/about', function (req, res) {
  res.send(`<h3>About page is so cool</h3>`)
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/info', infoRouter);
app.use('*', defaultRouter);

module.exports = app;
