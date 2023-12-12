require("./array");
const read = require("./read");
const run = require("./run");

const findAll = (strs) => {
  let sum = 0,
    res = [];
  for (let str of strs) {
    if (!str) {
      res.push(sum);
      sum = 0;
    } else {
      sum += Number(str);
    }
  }
  return res;
};

const part1 = (strs) => findAll(strs).max();
const part2 = (strs) =>
  findAll(strs)
    .sort((a, b) => b - a)
    .take(3)
    .sum();

const strs = read("01", "\n");
strs.push("");

run(part1, strs);
run(part2, strs);
