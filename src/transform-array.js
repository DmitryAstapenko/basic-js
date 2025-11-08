const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (arr instanceof Array) {
    const array = Array.from(arr);

    array.forEach((item, index, array) => {
      switch (item) {
        case "--discard-next":
          array[index] = false;
          if (array[index + 1]) {
            array[index + 1] = false;
          }
          break;
        case "--discard-prev":
          array[index] = false;
          if (array[index - 1]) {
            array[index - 1] = false;
          }
          break;
        case "--double-next":
          if (array[index + 1]) {
            array[index] = array[index + 1];
          } else {
            array[index] = false;
          }
          break;
        case "--double-prev":
          if (array[index - 1]) {
            array[index] = array[index - 1];
          } else {
            array[index] = false;
          }
          break;
        default:
          break;
      }
    });

    return array.filter((item) => item);
  } else {
    return "'arr' parameter must be an instance of the Array!";
  }
}

module.exports = {
  transform,
};
