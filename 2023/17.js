require("./array");
const read = require("./read");
const run = require("./run");
const heapq = require("./heapq");
const strs = read("17.a", "\n");
const lossMap = strs.map((str) => str.split("").map(Number));

const dirs = [
  [0, 1], // east
  [1, 0], // south
  [0, -1], // west
  [-1, 0], // north
];

function findPath(mat) {
  const _k = (i, j) => [i, j].join(":");
  const m = strs.length;
  const n = strs[0].length;

  const mark = {};
  let loss, ux, uy;
  let k = 0;

  const heap = [[0, 0, 0]];

  while (heap.length && k < 15000) {
    k++;
    [loss, ux, uy] = heapq.pop(heap);
    console.log(loss, ux, uy);

    if (ux == m && uy == n) break;

    const u = _k(ux, uy);
    if (u in mark) continue;

    mark[u] = true;

    dirs.forEach(([dx, dy], di) => {
      const vx = ux + dx,
        vy = uy + dy;

      // out of bound
      if (vx < 0 || vx > m - 1) return;
      if (vy < 0 || vy > n - 1) return;

      // already visited
      const v = _k(vx, vy);
      if (v in mark) return;

      heapq.push(heap, [loss + mat[vx][vy], vx, vy]);
    });
  }

  return loss;
}

const part1 = (mat) => findPath(mat);

run(part1, lossMap);
