const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) { 
  if (typeof(sampleActivity) !== 'string') return false;

  sampleActivity = parseInt(sampleActivity, 10);    

  return  isNaN(sampleActivity) 
    || sampleActivity > MODERN_ACTIVITY 
    || sampleActivity <= 0
    ? false 
    : Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
};
