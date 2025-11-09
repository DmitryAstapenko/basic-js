const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const str1 = s1.split("");
  const str2 = s2.split("");
  let numberOfMatches = 0;
  let indexOf;

  for (let index = 0; index < str1.length; index++) {
    if (str1[index]) {
      indexOf = str2.indexOf(str1[index]);

      if (indexOf !== -1) {
        numberOfMatches += 1;
        str2[indexOf] = null;
      }
    }
  }

  return numberOfMatches;
}

module.exports = {
  getCommonCharacterCount,
};
