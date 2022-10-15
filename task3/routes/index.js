const express = require('express');
const router = express.Router();

// GET Index page
router.get('/', function(req, res, next) {
  res.send("<h1>Hello, Bodit Task3 Index API</h1>")
});

module.exports = router;
