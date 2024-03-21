const express = require('express');
const app = express();
var router = express.Router();

router.get('/', (req, res, next) => {
    
    var randNum = (req.query.randNum == null) ? Math.floor(Math.random() * 3) + 7 : req.query.randNum;     
    
    const mathFunctions = {
        1: Math.atan2,
        2: Math.atanh,
        3: Math.cbrt,
        4: Math.hypot,
        5: Math.ceil,
        6: Math.clz32,
        7: Math.cos,
        8: Math.asin,
        9: Math.asinh,
        10: Math.atan,
        11: Math.exp,
        12: Math.expm1,
        13: Math.acosh,
        14: Math.log1p,
        15: Math.tan,
        16: Math.sqrt,
        17: Math.log2,
        18: Math.cosh,
        19: Math.floor,
        20: Math.abs,
        21: Math.acos,
        22: Math.sin,
        23: Math.sinh,
        24: Math.fround,
        25: Math.random,
        26: Math.round,
        27: Math.imul,
        28: Math.log,
        29: Math.log10,
        30: Math.pow,
        31: Math.sign,
        32: Math.tanh,
        33: Math.trunc
    };

    var myFunction = mathFunctions[randNum];
    var response = `${myFunction.name} applies to ${randNum} is ${myFunction(randNum)}`;

    res.send(response);
});

module.exports = router;