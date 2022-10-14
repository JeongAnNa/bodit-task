const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const route = {
  index: require('./routes/index'),
  equation: require('./routes/equation'),
  sum: require('./routes/sum'),
  primeNumber: require('./routes/primeNumber')
}
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', route.index);
app.use('/equation', route.equation);
app.use('/sum', route.sum)
app.use('/prime-number', route.primeNumber)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
