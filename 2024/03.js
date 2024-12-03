require("./array");
const read = require("./read");
const run = require("./run");

const strs = read("03", "\n");

const part1 = (strs) =>
  strs
    .map((str) =>
      [...str.match(/mul\(\d+,\d+\)/g)]
        .map((v) => v.slice(4, -1).split(",").map(Number))
        .map(([a, b]) => a * b)
        .sum()
    )
    .sum();

run(part1, strs);
