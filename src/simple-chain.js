const CustomError = require("../extensions/custom-error");

const chainValues = Symbol('chainValues');

const chainMaker = {
  [chainValues]: [],
  getLength() {    
    return this[chainValues].length;
  },
  addLink(value) {
    if (String(value) !== 'undefined') {
      this[chainValues].push(`( ${value} )`);  
    } else {
      this[chainValues].push(`( )`);
    }    
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position <= this[chainValues].length) {
      this[chainValues].splice(position - 1, 1);      
      return this;
    } else {      
      this[chainValues] = [];
      throw new TypeError();
    }    
  },
  reverseChain() {
    this[chainValues].reverse();
    return this;
  },
  finishChain() {
    let stringChain = this[chainValues].join('~~');
    this[chainValues] = [];
    return stringChain;
  }
};

module.exports = chainMaker;
