const CustomError = require("../extensions/custom-error");

const chainMaker = {
  data: [],
  addLink: value => chainMaker.data.push(String(value)) && chainMaker,
  reverseChain: () => chainMaker.data.reverse() && chainMaker,
  removeLink(pos) {
    if(isNaN(pos) || 0 > --pos || this.data.length < pos) { this.data = []; throw Error(); }
    this.data.splice(pos, 1);
    return this;
  },
  finishChain() {
    const result = `( ${this.data.join(' )~~( ')} )`;
    this.data = [];
    return result;
  }
};

module.exports = chainMaker;
