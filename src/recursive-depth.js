const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let levelDepth = 0;

    for (let index = 0; index < arr.length; index += 1) {
      if (arr[index] instanceof Array) {
        let depthCount = this.calculateDepth(arr[index]);

        if (depthCount > levelDepth) {
          levelDepth = depthCount;
        }
      } else {
        continue;
      }
    }

    return count + levelDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
