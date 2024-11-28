require("./array");
const read = require("./read");
const run = require("./run");

const priority = (s) => {
  const a = s.charCodeAt(0);
  if (a - 97 >= 0) {
    return a - 97 + 1;
  }
  return a - 65 + 26 + 1;
};

const strs = read("03", "\n");
const part1 = (strs) =>
  strs
    .map((s) => {
      let len = s.length / 2;
      const p = s.slice(0, len);
      const q = s.slice(-len);
      let found = "";
      for (let i = 0; i < p.length; i++) {
        if (q.includes(p[i])) {
          found = p[i];
          break;
        }
      }
      return found;
    })
    .map(priority)
    .sum();

run(part1, strs);

const part2 = (strs) =>
  strs
    .chunk(3)
    .map((arr) => {
      let found = "";
      for (let i = 0; i < arr[0].length; i++) {
        const c = arr[0][i];
        if (arr.every((v) => v.includes(c))) {
          found = c;
          break;
        }
      }
      return found;
    })
    .map(priority)
    .sum();

run(part2, strs);
