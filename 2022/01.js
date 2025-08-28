require("./array");
const read = require("./read");
const run = require("./run");

const strs = read("01", "\n");
const items = strs
  .split("")
  .map((arr) => arr.sum((v) => Number(v)));

const part1 = (items) => items.max();

const part2 = (items) =>
  items
    .sort((a, b) => b - a)
    .take(3)
    .sum();

run(part1, items);
run(part2, items);
