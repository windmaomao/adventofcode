require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("09", "\n");

const parseNumbers = (strs) => strs.map((str) => str.split(" ").map(Number));
const parsed = parseNumbers(strs);

const calcDiff = (arr) => {
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

const part1 = (parsed) => {
  return parsed
    .map(calcDiff)
    .map((v) => v.sum())
    .sum();
};

run(part1, parsed);
