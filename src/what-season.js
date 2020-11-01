const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!'
  else if (!(date instanceof Date && 0 !== date - new Date())) throw new Error()

  const month = date.getMonth();
  return month === 11 || month < 2 ? 'winter' : month < 5 ? 'spring' : month < 8 ? 'summer' : 'autumn'
};
