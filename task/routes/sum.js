const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const sum = require('../utils/sum')
const validator = require('../utils/validator')

// GET SUM page
router.get('/', function(req, res, next) {
  res.send("<h1>연속된 정수(n~m 까지)의 합을 구하는 API</h1>")
});

router.post('/', [
  body('start').isInt().withMessage('start는 Int형 데이터입니다. 정수를 입력해주세요!'),
  body('end').isInt().withMessage('end는 Int형 데이터입니다. 정수를 입력해주세요!'),
  validator.validate
], function(req, res, next){
    start = parseInt(req.body.start)
    end = parseInt(req.body.end)

    res.json({"result": sum(start, end)})
})

module.exports = router;