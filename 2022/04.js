require("./array");
const read = require("./read");
const run = require("./run");

const numbers = (seg) =>
  seg.split("-").map(Number);

const strs = read("04", "\n");

const part1 = (strs) =>
  strs
    .map((l) => l.split(","))
    .map((arr) => {
      const [p, q] = numbers(arr[0]);
      const [x, y] = numbers(arr[1]);
      if (p >= x && q <= y) return true;
      if (x >= p && y <= q) return true;
      return false;
    })
    .filter((v) => v).length;

run(part1, strs);

const part2 = (strs) =>
  strs
    .map((l) => l.split(","))
    .map((arr) => {
      const [p, q] = numbers(arr[0]);
      const [x, y] = numbers(arr[1]);
      if (p >= x && p <= y) return true;
      if (q >= x && q <= y) return true;
      if (p >= x && q <= y) return true;
      if (x >= p && y <= q) return true;
      return false;
    })
    .filter((v) => v).length;

run(part2, strs);
