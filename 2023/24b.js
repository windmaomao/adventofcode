const read = require("./read");
const run = require("./run");
const matrix = require("./matrix.js");
const strs = read("24", "\n");

const parseObjs = (strs) => {
  return strs.map((str) => {
    const parts = str.split(" @ ");
    return parts.map((part) => part.split(", ").map(Number));
  });
};

const objs = parseObjs(strs);

const tryCollide = (o1, o2) => {
  const [[x1, y1], [p1, q1]] = o1;
  const [[x2, y2], [p2, q2]] = o2;

  const a = [
    [p1, -p2],
    [q1, -q2],
  ];
  const ainv = matrix.matrixInvert(a);
  if (!ainv) return null;

  const b = [[x2 - x1], [y2 - y1]];
  const t = matrix.matrixMultiply(ainv, b);
  const t1 = t[0][0];
  const p = [x1 + p1 * t1, y1 + q1 * t1];

  return {
    t: t.map((v) => v[0]),
    p,
  };
};

const part1 = (objs) => {
  // const box = [7, 27];
  const box = [200000000000000, 400000000000000];
  let n = objs.length;
  let res = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const c = tryCollide(objs[i], objs[j]);
      if (c == null) continue;
      // console.log(c);
      if (
        c.t.every((t) => t >= 0) &&
        c.p.every((v) => v >= box[0] && v <= box[1])
      ) {
        res++;
      }
    }
  }
  return res;
};

run(part1, objs);
