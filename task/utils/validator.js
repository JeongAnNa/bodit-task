const { validationResult } = require('express-validator');
const equation = require('../utils/equation');

function validate (req, res, next){
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    return res.status(400).json({ message: errors.array() });
};  

module.exports.validate = validate;