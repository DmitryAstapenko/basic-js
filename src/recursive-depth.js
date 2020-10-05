const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let depth = count;
    arr.forEach(element => {
      if (Array.isArray(element)) count += this.calculateDepth(element);
      depth = count > depth ? count : depth;
      count = 1;
    });  
    return depth;
  }
};