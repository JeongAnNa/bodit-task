var express = require('express');
var router = express.Router();

// GET Index page
router.get('/', function(req, res, next) {
  res.send("<h1>Hello, Bodit Task Page</h1>")
});

module.exports = router;
