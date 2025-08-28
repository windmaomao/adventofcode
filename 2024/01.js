require("./array");
const read = require("./read");
const run = require("./run");

const strs = read("01", "\n");

const list = strs.map((v) =>
  v
    .split(" ")
    .filter((s) => s)
    .map(Number)
);

const part1 = (list) => {
  const left = [...list]
    .sort((a, b) => a[0] - b[0])
    .map((v) => v[0]);
  const right = [...list]
    .sort((a, b) => a[1] - b[1])
    .map((v) => v[1]);

  return left.map((l, i) => Math.abs(l - right[i])).sum();
};

run(part1, list);

const part2 = () => {
  const left = list.map((v) => v[0]);
  const right = list.map((v) => v[1]);
  return left
    .map((l, i) => l * right.filter((v) => v === l).length)
    .sum();
};

run(part2, strs);
