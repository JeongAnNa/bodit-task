const { validationResult } = require('express-validator');

function validate (req, res, next){
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next(); // 유효성 검사에 오류가 없을 경우 다음 함수 실행
    }

    return res.status(400).json({ message: errors.array()[0].msg }); // Data 유효성 검사 중 발생한 Error 메세지로 응답
};  

module.exports = validate;