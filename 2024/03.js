require("./array");
const read = require("./read");
const run = require("./run");

const strs = read("03", "\n");

const part1 = (strs) =>
  strs
    .map((str) =>
      [...str.match(/mul\(\d+,\d+\)/g)]
        .map((v) => v.slice(4, -1).split(",").map(Number))
        .map(([a, b]) => a * b)
        .sum()
    )
    .sum();

run(part1, strs);

const part2 = (strs) => {
  let sum = 0;
  let d = true;
  strs.forEach((str) => {
    const seqs = [
      ...str.match(/(mul\(\d+,\d+\)|don\'t\(\)|do\(\))/g),
    ];
    for (let v of seqs) {
      if (v === `don't()`) {
        d = false;
        continue;
      }
      if (v === `do()`) {
        d = true;
        continue;
      }
      if (d) {
        const arr = v.slice(4, -1).split(",").map(Number);
        sum += arr[0] * arr[1];
      }
    }
  });
  return sum;
};

run(part2, strs);
