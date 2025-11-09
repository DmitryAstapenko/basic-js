const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const sweeper = [];

  const check = (item) => {
    return item ? 1 : 0;
  };

  for (let i = 0; i < matrix.length; i += 1) {
    sweeper.push([]);

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        sweeper[i][j] = 1;
      } else {
        sweeper[i][j] =
          check(matrix[i - 1]?.[j - 1]) +
          check(matrix[i - 1]?.[j]) +
          check(matrix[i - 1]?.[j + 1]) +
          check(matrix[i]?.[j - 1]) +
          check(matrix[i]?.[j + 1]) +
          check(matrix[i + 1]?.[j - 1]) +
          check(matrix[i + 1]?.[j]) +
          check(matrix[i + 1]?.[j + 1]);
      }
    }
  }

  return sweeper;
}

module.exports = {
  minesweeper,
};
