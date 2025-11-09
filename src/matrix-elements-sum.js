const { NotImplementedError } = require("../lib");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((mainSum, line, i, matrix) => {
    if (i === 0) {
      return mainSum + line?.reduce((sum, value) => sum + value, 0);
    } else {
      return (
        mainSum +
        line?.reduce((sum, value, j) => {
          if (matrix[i - 1][j]) {
            return sum + value;
          } else {
            return sum;
          }
        }, 0)
      );
    }
  }, 0);
}

module.exports = {
  getMatrixElementsSum,
};
