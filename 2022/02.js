require("./array");
const read = require("./read");
const run = require("./run");

const game1 = {
  A: { X: 0, Y: -1, Z: 1 },
  B: { X: 1, Y: 0, Z: -1 },
  C: { X: -1, Y: 1, Z: 0 },
};
const score1 = { X: 1, Y: 2, Z: 3 };
const score2 = { "-1": 0, 0: 3, 1: 6 };

const part1 = (strs) => {
  const scores = strs.map((str) => {
    const enemy = str[0];
    const me = str[2];
    return score1[me] + score2[-game1[enemy][me]];
  });
  return scores.sum();
};

const game2 = {
  A: { X: 3, Y: 1, Z: 2 },
  B: { X: 1, Y: 2, Z: 3 },
  C: { X: 2, Y: 3, Z: 1 },
};
const score3 = { X: 0, Y: 3, Z: 6 };

const part2 = (strs) => {
  const scores = strs.map((str) => {
    const enemy = str[0];
    const me = str[2];
    return score3[me] + game2[enemy][me];
  });
  return scores.sum();
};

const strs = read("02", "\n");
run(part1, strs);
run(part2, strs);
