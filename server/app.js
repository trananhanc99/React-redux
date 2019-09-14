require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
var app = express();

//** Require DB */
require('./bin/connect');
var indexRouter = require('./routes/api');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


// Router Product
app.use('/', indexRouter);
app.use('/users', indexRouter);
app.use('/post', indexRouter);
app.use('/delete', indexRouter);
app.use('/put', indexRouter);
app.use('/showdata', indexRouter);

// // Router USer
app.use('/showsuser', indexRouter);
app.use('/adduser', indexRouter);
app.use('/deleteuser', indexRouter);
app.use('/updateuser', indexRouter);





app.use(function(req, res, next) {
  return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
