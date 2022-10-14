const { validationResult } = require('express-validator');
const equation = require('../utils/equation');

function validate (req, res, next){
    const errors = validationResult(req);
    let msg = []
    if (errors.isEmpty()) {
      return next();
    }

    for (i=0; i<errors.array().length; i++){
      msg.push(errors.array()[i].msg);
    }

    return res.status(400).json({ message: msg });
};  

module.exports.validate = validate;