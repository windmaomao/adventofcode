require("./array");
const read = require("./read");
const run = require("./run");

const strs = read("05", "\n");
strs.push("");

const parseStrs = (strs) => {
  const nums = strs[0].match(/\d+/g).map(Number);
  let maps = [],
    m = [];

  let i = 1;
  while (i < strs.length) {
    if (!strs[i]) {
      if (m.length) maps.push(m);
      m = [];
      i++;
    } else {
      m.push(strs[i].match(/\d+/g).map(Number));
    }
    i++;
  }

  return { nums, maps };
};

const part1 = (strs) => {
  const { nums, maps } = parseStrs(strs);

  return nums
    .map((seed) => {
      return maps.reduce((acc, lvls) => {
        for (let lvl of lvls) {
          if (acc >= lvl[1] && lvl[1] + lvl[2] > acc) {
            return acc - lvl[1] + lvl[0];
          }
        }
        return acc;
      }, seed);
    })
    .min();
};

run(part1, strs);
