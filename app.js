var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

// Serve static file
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Api routes
app.use('/api', apiRouter);

module.exports = app;
