const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const validator = require('../utils/validator');
const languageCheck = require('../utils/languageCheck');
const callPapago = require('../utils/callPapago')

// GET Translation Page
router.get('/', function(req, res, next) {
  res.send("<h1>PAPAGO API를 활용해 한국어 -> 영어 번역 API</h1>")
});
router.post('/', [
    // Data 유효성 검사
    body('text')
    .isString().withMessage('text는 String형의 데이터입니다. 문자를 입력해주세요.')
    .notEmpty().withMessage('값이 비어있습니다. 번역하고싶은 문장을 입력해주세요.')
    .isLength({max: 100}).withMessage('100자 이하의 문장을 입력해주세요!'),
    validator
], function(req, res, next){
    const text = req.body.text;

    if (!languageCheck(text)) { res.status(400).json({ message: "이 API는 한국어를 영어로 번역하는 API입니다. 한국어를 입력해주세요!" }); } // 한국어, 영어, 숫자, 특수문자 이외의 언어 입력 시 400 Error 반환
    else { callPapago(res, text) } // Papago Open API 호출
});

module.exports = router;