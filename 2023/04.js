require("./array");
const read = require("./read");
const run = require("./run");

const strs = read("04", "\n");

const cardWinning = (strs) => {
  return strs.map((card) => {
    const p = card.split(": ");
    const parts = p[1].split("|");
    const m = {};
    parts[0].match(/\d+/g).forEach((c) => {
      m[c] = true;
    });
    return parts[1].match(/\d+/g).filter((c) => m[c]);
  });
};

const part1 = (strs) => {
  return cardWinning(strs)
    .map((matches) => {
      if (matches.length < 1) return 0;
      return Math.pow(2, matches.length - 1);
    })
    .sum();
};

run(part1, strs);

const part2 = (strs) => {};
