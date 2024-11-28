require("./array");
const read = require("./read");
const run = require("./run");

const part1 = (strs) => {
  return strs
    .split("")
    .map((arr) => arr.sum((v) => Number(v)))
    .max();
};

const part2 = (strs) =>
  findAll(strs)
    .sort((a, b) => b - a)
    .take(3)
    .sum();

const strs = read("01", "\n");
strs.push("");
run(part1, strs);
// run(part2, strs);
