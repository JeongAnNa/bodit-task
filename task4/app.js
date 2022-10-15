const createError = require('http-errors');
const express = require('express');
const path = require('path');
const app = express();

const route = {
  index: require('./routes/index'),
  translation: require('./routes/translation')
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route setup
app.use('/', route.index);
app.use('/translation', route.translation);

// 404 Error 처리
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;