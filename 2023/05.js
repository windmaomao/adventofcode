require("./array");
const read = require("./read");
const run = require("./run");

const strs = read("05.a", "\n");
strs.push("");

const parseStrs = (strs) => {
  const nums = strs[0].match(/\d+/g).map(Number);
  let maps = [],
    m = [];

  let i = 1;
  while (i < strs.length) {
    if (!strs[i]) {
      if (m.length) maps.push(m.sort((a, b) => a[1] - b[1]));
      m = [];
      i++;
    } else {
      const ns = strs[i].match(/\d+/g).map(Number);
      ns.push(ns[1] + ns[2] - 1);
      m.push(ns);
    }
    i++;
  }

  return { nums, maps };
};

const mapLevels = (seed, maps) => {
  return maps.reduce((acc, lvls) => {
    for (let lvl of lvls) {
      if (acc >= lvl[1] && lvl[1] + lvl[2] > acc) {
        return acc - lvl[1] + lvl[0];
      }
    }
    return acc;
  }, seed);
};

const part1 = ({ nums, maps }) =>
  nums.map((seed) => mapLevels(seed, maps)).min();

// Given [rmin, rmax] and levels [[v, lmin, lcount, lmax]],
// find the intersection of the ranges [[fv, fmin, fcount, fmax]]
const intersect = (rmin, rmax, levels) => {
  const ranges = [];
  const [xv, xmin, xcount, xmax] = levels[0];
  if (rmin < xmin) {
    const fmin = rmin;
    const fmax = Math.min(rmax, xmin - 1);
    ranges.push([fmin, fmin, fmax - fmin + 1, fmax]);
  }

  for (let level of levels) {
    const [v, lmin, lcount, lmax] = level;
    if (rmax < lmin || rmin > lmax) continue;
    let fmin = Math.max(rmin, lmin);
    let fmax = Math.min(rmax, lmax);
    let fv = v + fmin - lmin;
    ranges.push([fv, fmin, fmax - fmin + 1, fmax]);
  }

  const [yv, ymin, ycount, ymax] = levels.at(-1);
  if (rmax > ymax) {
    let fmax = rmax;
    let fmin = Math.max(rmin, ymax + 1);
    ranges.push([fmin, fmin, fmax - fmin + 1, fmax]);
  }

  return ranges;
};

const part2 = ({ nums, maps }) => {
  console.log(0);
  console.log(intersect(79, 79 + 14 - 1, maps[0]));
  console.log(1);
  console.log(intersect(81, 81 + 14 - 1, maps[1]));
  console.log(2);
  console.log(intersect(81, 81 + 14 - 1, maps[2]));
  console.log(3);
  console.log(intersect(81, 81 + 14 - 1, maps[3]));
  console.log(4);
  console.log(intersect(74, 74 + 14 - 1, maps[4]));
  console.log(5);
  console.log(intersect(78, 78 + 3 - 1, maps[5]));
  console.log(intersect(45, 45 + 11 - 1, maps[5]));
  console.log(6);
  console.log(intersect(78, 78 + 3 - 1, maps[6]));
  console.log(intersect(46, 46 + 11 - 1, maps[6]));
};

const parsed = parseStrs(strs);
console.log(parsed.nums);
console.log(parsed.maps);
// run(part1, parsed);
run(part2, parsed);
