require("./array");
const read = require("./read");
const run = require("./run");

const findTwoDigits = (str) => {
  const digits = str.match(/\d/g);
  return Number([digits[0], digits.at(-1)].join(""));
};

const part1 = (strs) => strs.map(findTwoDigits).sum();

const strs = read("01", "\n");
run(part1, strs);
