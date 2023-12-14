require("./array");
const read = require("./read");
const run = require("./run");

const strs = read("06", "\n");
const parseStrs = (strs) => {
  const mapped = strs.map((str) => str.match(/\d+/g).map(Number));
  let res = [];
  for (let i = 0; i < mapped[0].length; i++) {
    res.push([mapped[0][i], mapped[1][i]]);
  }
  return res;
};
const pairs = parseStrs(strs);

const calcRecord = (time, dist) => {
  let m = Math.floor(time / 2);
  let n = time - m;
  const unique = m === n;
  let res = m * n;
  let count = 0;

  while (res > dist) {
    count++;
    console.log(m, n, res, count);
    res -= n;
    n++;
    m--;
    res += m;
  }

  return !unique ? count * 2 : count * 2 - 1;
};

const part1 = (pairs) => {
  return pairs.map(([time, dist]) => calcRecord(time, dist)).multiply();
};

run(part1, pairs);
// console.log(calcRecord(7, 9));
// console.log(calcRecord(15, 40));
// console.log(calcRecord(30, 200));
