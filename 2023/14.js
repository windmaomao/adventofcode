require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("14", "\n");
const m = strs.length;
const n = strs[0].length;

const parseRocks = (strs) => {
  const fixed = {},
    moving = {};
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let c = strs[i][j];
      switch (c) {
        case "O":
          moving[j] = moving[j] || [];
          moving[j].push(i);
          break;
        case "#":
          fixed[j] = fixed[j] || [];
          fixed[j].push(i);
          break;
      }
    }
  }
  return { fixed, moving };
};

const parsed = parseRocks(strs);

const part1 = ({ fixed, moving }) => {
  return []
    .new(n)
    .map((_, j) => j)
    .map((j) => {
      const fixes = fixed[j] || [];
      let seg = [];
      if (fixes.length < 1) {
        seg.push([-1, m]);
      } else {
        seg.push([-1, fixes[0]]);
        for (let i = 0; i < fixes.length - 1; i++) {
          seg.push([fixes[i], fixes[i + 1]]);
        }
        seg.push([fixes.at(-1), m]);
      }

      // console.log(seg);

      const moves = moving[j] || [];
      let newMoves = [];
      seg.forEach(([from, to]) => {
        newMoves = newMoves.concat(
          moves
            .filter((m) => m > from && m < to)
            .map((_, k) => m - (from + k + 1))
        );
      });

      return newMoves.sum();
    })
    .sum();
};

run(part1, parsed);
