const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, o) {
  let s = '';
  if (!o.additionSeparator) o.additionSeparator = '|';
  if (!o.separator) o.separator = '+';
  if (undefined !== o.addition) s = (o.addition + '' + o.additionSeparator).repeat(o.additionRepeatTimes - 1) + o.addition;
  return (str + s + o.separator).repeat(o.repeatTimes - 1) + str + s;
};
  