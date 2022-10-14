const express = require('express');
const router = express.Router();
const equation = require('../utils/equation')

// GET equation page
router.get('/', function(req, res, next) {
    res.send("<h1>2차 방정식(ax^2 + bx + c = 0)의 근을 구하는 API</h1>")
});

// POST equation page
router.post('/', function(req, res, next) {
    a = req.body.a
    b = req.body.b
    c = req.body.c
    
    res.json({x: equation(a, b, c)})
})

module.exports = router;