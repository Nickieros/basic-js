const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((iCatsCounter, arrEntities) => iCatsCounter + arrEntities.filter(possiblyCat => '^^' === possiblyCat).length, 0);
};
