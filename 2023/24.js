require("./object");
const read = require("./read");
const run = require("./run");
const strs = read("24", "\n");

const parseObjs = (strs) => {
  return strs.map((str) => {
    const parts = str.split(" @ ");
    return parts.map((part) => part.split(", ").map(Number));
  });
};

const objs = parseObjs(strs);

const tryCollide = (o1, o2) => {
  const [p1, v1] = o1;
  const [p2, v2] = o2;

  if (p1.every((p, i) => p == p2[i])) {
    return {
      t: [0, 0],
      at: p1,
    };
  }

  const a = [0, 1].map((i) => v1[i]);
  const b = [0, 1].map((i) => -v2[i]);
  const d = [0, 1].map((i) => p2[i] - p1[i]);

  const t = [-1, -1];
  const c = a[1] * b[0] - a[0] * b[1];
  if (c == 0) return null;

  t[1] = (a[1] * d[0] - a[0] * d[1]) / c;
  t[0] = (d[0] - b[0] * t[1]) / a[0];

  return {
    t,
    at: [0, 1].map((i) => p1[i] + t[0] * a[i]),
  };
};

const part1 = (objs) => {
  // const box = [7, 27];
  const box = [200000000000000, 400000000000000];
  let n = objs.length;
  let res = {};
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const c = tryCollide(objs[i], objs[j]);
      if (c == null) continue;
      // console.log(c);
      if (
        c.t.every((t) => t >= 0) &&
        c.at.every((p) => p >= box[0] && p <= box[1])
      ) {
        const key = c.at.map((v) => Math.round(v)).join(",");
        res[key] = c.at;
      }
    }
  }
  // console.log(res.values().sort((a, b) => a[0] - b[0]));
  return res.keys().length;
};

run(part1, objs);
// let i = 0,
// j = 2;
// console.log(objs[i][0], objs[j][0], tryCollide(objs[i], objs[j]));

// 18651 too high
