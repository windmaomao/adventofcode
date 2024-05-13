require("./array");
const matrix = require("./matrix.js");
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

const tryShareOrigin = (u0, v0, w0, p1, p2, p3) => {
  const [[x1, y1, z1], [u1, v1, w1]] = p1;
  const [[x2, y2, z2], [u2, v2, w2]] = p2;
  const [[x3, y3, z3], [u3, v3, w3]] = p3;

  const a = [
    [1, 0, 0, u0 - u1, 0],
    [0, 1, 0, v0 - v1, 0],
    [0, 0, 1, w0 - w1, 0],
    [1, 0, 0, 0, u0 - u2],
    [0, 1, 0, 0, v0 - v2],
    // [(0, 0, 1, 0, w0 - w2)],
  ];

  const ainv = matrix.matrixInvert(a);
  if (!ainv) return false;

  const b = [[x1], [y1], [z1], [x2], [y2]];
  const x = matrix.matrixMultiply(ainv, b);
  const [[x0], [y0], [z0], [t1], [t2]] = x;
  if (t1 < 0 || t2 < 0) return null;

  const t3 = [
    (x3 - x0) / (u0 - u3),
    (y3 - y0) / (v0 - v3),
    (z3 - z0) / (w0 - w3),
  ];
  const errors = [t3[0] - t3[1], t3[1] - t3[2], t3[2] - t3[0]];
  // console.log(errors);

  if (errors.some((v) => Math.abs(v) > 0.01)) return null;

  return [x0, y0, z0];
};

const part2 = (objs) => {
  let bounds = 400;
  let res;
  for (let u0 = -bounds; u0 <= bounds; u0++) {
    console.log(u0);
    for (let v0 = -bounds; v0 <= bounds; v0++) {
      for (let w0 = -bounds; w0 <= bounds; w0++) {
        res = tryShareOrigin(u0, v0, w0, objs[1], objs[2], objs[3]);
        if (res) {
          console.log("found!");
          console.log("v", u0, v0, w0);
          console.log("pos", res, res.map(Math.round).sum());
          return;
        }
      }
    }
  }
};

run(part2, objs);

// found!
// v 133 278 85
// pos [ 200027938836082, 127127087242193, 219339468239372 ]

// v 133 278 85
// pos [ 200027938836082.03, 127127087242192.88, 219339468239369.75 ]

// 546494494317645
