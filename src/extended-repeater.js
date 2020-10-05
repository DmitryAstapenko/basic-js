const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {  
  let resultString = '';
  let string = typeof(str) === 'string' ? str : String(str);
  let times = options.repeatTimes ? options.repeatTimes : 0;
  let separator = options.separator ? options.separator : '+';
  let addition = String(options.addition) !== 'undefined' ? String(options.addition) : '';
  let additionTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0;
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '';

  string += addition;
  additionTimes--;
  for (let i = 0; i < additionTimes; i++) {
    string += additionSeparator + addition;
  }
  
  resultString += string;
  times--;  
  for (let i = 0; i < times; i++) {
    resultString += separator + string;
  }

  return resultString;
};
  