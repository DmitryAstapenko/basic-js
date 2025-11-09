const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberArr = String(n)
    .split("")
    .map((item) => Number.parseInt(item));
  let maxValue = 0;
  let indexMin = -1;

  numberArr.forEach((_, index, array) => {
    let currValue = Number(
      Array(...array)
        .filter((_, i) => i !== index)
        .join("")
    );

    if (currValue > maxValue) {
      maxValue = currValue;
      indexMin = index;
    }
  });

  if (indexMin !== -1) {
    numberArr[indexMin] = null;
  }

  return Number(numberArr.filter((item) => item !== null).join(""));
}

module.exports = {
  deleteDigit,
};
