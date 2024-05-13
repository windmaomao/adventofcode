// idea from https://github.com/xavdid/advent-of-code/blob/main/solutions/2023/day_12/solution.py
require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("12", "\n");

const parseLine = (str) => {
  const parts = str.split(" ");
  const pattern = parts[0];
  const records = parts[1].split(",").map(Number);

  return { pattern, records };
};

const findTotal = (pattern, records) => {
  const m = {};

  // given current sequence and groups of records
  // find the total number of ways to fill the sequence
  const dfs = (sequence, groups) => {
    if (!sequence) return groups.length == 0 ? 1 : 0;
    if (groups.length == 0) return sequence.indexOf("#") < 0 ? 1 : 0;

    const key = `${sequence}|${groups.join(",")}`;
    if (key in m) return m[key];

    const char = sequence[0];
    const rest = sequence.slice(1);
    const first = groups[0];
    const len = sequence.length;
    let res = 0;

    switch (char) {
      case ".":
        res = dfs(rest, groups);
        break;
      case "?":
        res = dfs(`#${rest}`, groups) + dfs(`.${rest}`, groups);
        break;
      case "#":
        if (
          len >= first &&
          [].new(first).every((_, i) => sequence[i] != ".") &&
          (len == first || sequence[first] != "#")
        ) {
          res = dfs(sequence.slice(first + 1), groups.slice(1));
        }
        break;
    }

    m[key] = res;
    return res;
  };

  return dfs(pattern, records);
};

const part1 = (strs) => {
  return strs
    .map(parseLine)
    .map((o) => findTotal(o.pattern, o.records))
    .sum();
};

run(part1, strs);

const parseLine2 = (str) => {
  const parts = str.split(" ");
  const _p = parts[0];
  const pattern = _p + "?" + _p + "?" + _p + "?" + _p + "?" + _p;
  const _r = parts[1].split(",").map(Number);
  const records = [..._r, ..._r, ..._r, ..._r, ..._r];

  return { pattern, records };
};

const part2 = (strs) => {
  return strs
    .map(parseLine2)
    .map((o, i) => {
      const res = findTotal(o.pattern, o.records);
      console.log(i, ")", o.pattern, res);
      return res;
    })
    .sum();
};

run(part2, strs);
