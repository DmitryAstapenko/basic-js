const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const strArr = str.split("").map((char, index, array) => {
    if (char === array[index + 1]) {
      return 1;
    } else {
      return char;
    }
  });

  let countChar = 1;
  for (let i = 0; i < strArr.length; i++) {
    if (Number.isInteger(strArr[i])) {
      countChar += strArr[i];
      strArr[i] = false;
    } else if (countChar > 1) {
      strArr[i - 1] = countChar;
      countChar = 1;
    }
  }

  return strArr.filter((item) => item).join("");
}

module.exports = {
  encodeLine,
};
