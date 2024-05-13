require("./array");
const read = require("./read");
const run = require("./run");

const strs = read("06", "\n");
const parseStrs = (strs) => strs.map((str) => str.match(/\d+/g).map(Number));
const parsed = parseStrs(strs);

const calcRecord = (time, dist) => {
  let m = Math.floor(time / 2);
  let n = time - m;
  const unique = m === n;
  let res = m * n;
  let count = 0;

  while (res > dist) {
    count++;
    // console.log(m, n, res, count);
    res -= n;
    n++;
    m--;
    res += m;
  }

  return !unique ? count * 2 : count * 2 - 1;
};

const part1 = (parsed) => {
  let res = [];
  for (let i = 0; i < parsed[0].length; i++) {
    res.push([parsed[0][i], parsed[1][i]]);
  }

  return res.map(([time, dist]) => calcRecord(time, dist)).multiply();
};

const part2 = (parsed) => {
  const pair = parsed
    .map((nums) => nums.map((n) => `${n}`).join(""))
    .map(Number);
  return calcRecord(...pair);
};

run(part1, parsed);
run(part2, parsed);
