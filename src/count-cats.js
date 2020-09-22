const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {  
  return matrix.reduce( (sum, currentValue) => sum + currentValue.filter( item => item === "^^").length, 0);
};
