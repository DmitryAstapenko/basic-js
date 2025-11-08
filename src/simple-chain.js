const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _chain: [],

  getLength() {
    return this._chain.length;
  },

  addLink(value) {
    if (value === undefined) {
      this._chain.push("(  )");
    } else {
      this._chain.push(`( ${String(value)} )`);
    }

    return this;
  },

  removeLink(position) {
    if (
      Number.isInteger(position) &&
      position > 0 &&
      position <= this._chain.length
    ) {
      this._chain.splice(position - 1, 1);
      return this;
    } else {
      this._chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },

  reverseChain() {
    this._chain.reverse();
    return this;
  },

  finishChain() {
    const chainString = this._chain.join("~~");

    this._chain = [];

    return chainString;
  },
};

module.exports = {
  chainMaker,
};
