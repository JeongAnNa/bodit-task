const express = require('express');
const router = express.Router();

// GET Index page
router.get('/', function(req, res, next) {
  console.log("안녕".length)
  res.send("<h1>Hello, Bodit Task4 Index API</h1>")
});

module.exports = router;