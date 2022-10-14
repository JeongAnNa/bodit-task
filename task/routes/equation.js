const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const equation = require('../utils/equation')
const validator = require('../utils/validator')

// GET equation page
router.get('/', function(req, res, next) {
    res.send("<h1>2차 방정식(ax^2 + bx + c = 0)의 근을 구하는 API</h1>")
});

// POST equation page
router.post('/', [
    body('a').isInt().withMessage('a는 Int형 데이터입니다. 정수를 입력해주세요!'),
    body('b').isInt().withMessage('b는 Int형 데이터입니다. 정수를 입력해주세요!'),
    body('c').isInt().withMessage('c는 Int형 데이터입니다. 정수를 입력해주세요!'),
    validator.validate
], function (req, res) {
    const a = req.body.a
    const b = req.body.b
    const c = req.body.c
    const d = b*b - (4*a*c)
    
    if (a == 0) { res.status(400).json({ message: "이차방정식이 아닙니다. a는 0이 될 수 없습니다." }); }
    if (d < 0) { res.status(501).json({ message: "요청하신 방정식은 허근을 가지는 방정식입니다. 해당 API는 실근을 구하는 서비스를 제공하고 있습니다."})}
    else { res.json({x: equation(a, b, c)}) }
});

module.exports = router;