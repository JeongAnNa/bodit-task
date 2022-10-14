const express = require('express');
const router = express.Router();
const { query, Result } = require('express-validator')
const primeNumber = require('../utils/primeNumber')
const validator = require('../utils/validator')

// GET SUM page
router.get('/', [
    query('at').isInt().withMessage('at는 Int형 데이터입니다. 정수를 입력해주세요!'),
    validator.validate
], function(req, res, next) {
    const at = req.query.at

    if (at > 1000) { res.status(400).json({ message: `요청하신 at의 값은 ${at} 입니다. 1000 이하의 값을 입력해주세요!`}) }
    else if (at < 2) { res.status(400).json({ message: `요청하신 at의 값은 ${at} 입니다. 1 이상의 값을 입력해주세요!`}) }
    else { 
        const result=primeNumber(at)
        res.json({ "count": result[0], "pn": result[1] }) 
    }
});

module.exports = router;