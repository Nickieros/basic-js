const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(a) {// just for fun, normal solution is here: calculateDepth(arrData, iDepth = 1) { const arrInternalArrays = arrData.filter(arr => Array.isArray(arr)); return arrInternalArrays.length ? this.calculateDepth(arrInternalArrays.flat(), ++iDepth) : iDepth; }
    return 'string' === typeof a && ((a = a.replace(/\[]/g, '')) && this.calculateDepth(a) + 1 || 1) || this.calculateDepth(JSON.stringify(a).replace(/[^\[\]]/g, ''))
  }
};