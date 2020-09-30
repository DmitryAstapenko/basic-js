const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new TypeError();

  let array = [];  
  let flag;

  for (let index = 0; index < arr.length; index++) {    
    switch (arr[index]) {
      case '--discard-next':
        flag = ++index;
        break;
      case '--discard-prev':
        if (index - 1 !== flag ) array.pop();
        break;
      case '--double-next':
        index + 1 < arr.length ? array.push(arr[index + 1]) : index++;        
        break;
      case '--double-prev':
        if (index - 1 >= 0 && index -1 !== flag) array.push(arr[index - 1]);
        break;        
      default:
        array.push(arr[index]);
        break;
    }
  }

  return array;
};
