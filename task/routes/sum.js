const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const sum = require('../utils/sum')

// GET SUM page
router.get('/', function(req, res, next) {
  res.send("<h1>연속된 정수(n~m 까지)의 합을 구하는 API</h1>")
});

router.post('/', function(req, res, next){
    start = parseInt(req.body.start)
    end = parseInt(req.body.end)

    res.json({"result": sum(start, end)})
})

module.exports = router;