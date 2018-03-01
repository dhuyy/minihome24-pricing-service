var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = mongoose.connection;
var app = express();

mongoose.connect(process.env.DATABASE_URL_PRICING);

db.on('error', console.error);
db.once('open', function() {
  /**
   * Seed method
   */
  require('./helpers/seed')();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', require('./routes/index'));
app.use('/find/', require('./routes/find'));
app.use('/calculate/', require('./routes/calculate'));

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(JSON.stringify({ error: 'Route not found.' }));
});

module.exports = app;
