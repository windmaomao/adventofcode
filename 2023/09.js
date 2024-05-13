require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("09", "\n");

const parseNumbers = (strs) => strs.map((str) => str.split(" ").map(Number));
const parsed = parseNumbers(strs);

const forwardDiff = (arr) => {
  const m = [...arr];
  let i = 0,
    done = false;
  while (!done && i < m.length - 1) {
    done = true;
    for (let j = 0; j < m.length - i - 1; j++) {
      m[j] = m[j + 1] - m[j];
      if (m[j] != 0) done = false;
    }
    i++;
  }
  return m;
};

const part1 = (parsed) =>
  parsed
    .map(forwardDiff)
    .map((v) => v.sum())
    .sum();

run(part1, parsed);

const backwardDiff = (arr) => {
  const m = [...arr];
  let i = 0,
    done = false;
  while (!done && i < m.length - 1) {
    done = true;
    for (let j = m.length - 1; j > i; j--) {
      m[j] = m[j] - m[j - 1];
      if (m[j] != 0) done = false;
    }
    i++;
  }
  return m;
};

const part2 = (parsed) =>
  parsed
    .map(backwardDiff)
    .map((arr) => {
      const initial = arr.pop();
      return arr.reverse().reduce((acc, v) => v - acc, initial);
    })
    .sum();

// console.log(backwardDiff([10, 13, 16, 21, 30, 45]));
run(part2, parsed);
