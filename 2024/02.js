require("./array");
const read = require("./read");
const run = require("./run");

const strs = read("02", "\n");
const list = strs.map((a) => a.split(" ").map(Number));

function isSafe(arr) {
  let trend;
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    const abs = Math.abs(diff);
    if (abs < 1 || abs > 3) return false;
    const sign = Math.sign(diff);
    if (trend == undefined) {
      trend = sign;
    } else {
      if (sign != trend) return false;
    }
  }
  return true;
}

const part1 = (list) => list.filter(isSafe).length;

run(part1, list);

const part2 = (list) =>
  list.filter((arr) => {
    if (isSafe(arr)) return true;

    for (let i = 0; i < arr.length; i++) {
      const arr2 = [
        ...arr.slice(0, i),
        ...arr.slice(i + 1),
      ];
      if (isSafe(arr2)) return true;
    }

    return false;
  }).length;

run(part2, list);
