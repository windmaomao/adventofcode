require("./array");
const read = require("./read");
const run = require("./run");

const findTwoDigits = (str) => {
  const digits = str.match(/\d/g);
  return Number([digits[0], digits.at(-1)].join(""));
};
const part1 = (strs) => strs.map(findTwoDigits).sum();

const m = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};
// Buggy, ex. "eightwo"
const findTwoDigits2 = (str) => {
  const digits = str
    .match(/\d|one|two|three|four|five|six|seven|eight|nine/g)
    .map((v) => m[v]);
  return digits[0] * 10 + digits.at(-1);
};
const findTwoDigits3 = (str) => {
  const found = [];
  Object.keys(m).forEach((s) => {
    [...str.matchAll(s)].forEach((ma) => {
      found.push([s, ma.index]);
    });
  });
  // console.log(found);
  const digits = found.sort((a, b) => a[1] - b[1]).map((a) => m[a[0]]);
  return digits[0] * 10 + digits.at(-1);
};

const part2 = (strs) => strs.map(findTwoDigits3).sum();

const strs = read("01", "\n");
// run(part1, strs);
run(part2, strs);

console.log("178ncllbfkkh4eightwoq", findTwoDigits3("178ncllbfkkh4eightwoq"));
console.log("hdk28lqhhttjz6one2", findTwoDigits3("hdk28lqhhttjz6one2"));
