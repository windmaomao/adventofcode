require("./array");
const read = require("./read");
const run = require("./run");
const heapq = require("./heapq");
const strs = read("17", "\n");
const lossMap = strs.map((str) => str.split("").map(Number));

const dirs = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];

function findPath(mat) {
  const _k = (i, j, di, len) => [i, j, di, len].join(":");
  const m = strs.length;
  const n = strs[0].length;

  const mark = {};
  let loss, ux, uy, udi, ulen;
  let k = 0;

  const heap = [[0, 0, 0, 0, 0]];

  while (heap.length && k < 11115000) {
    k++;
    [loss, ux, uy, udi, ulen] = heapq.pop(heap);
    // console.log(loss, ux, uy, udi, ulen);

    // reach the destination
    if (ux == m - 1 && uy == n - 1) break;

    // can only go with the same direction once
    if (
      []
        .new(ulen)
        .map((_, i) => i + 1)
        .some((di) => _k(ux, uy, udi, di) in mark)
    )
      continue;

    // visit the current node
    const u = _k(ux, uy, udi, ulen);
    mark[u] = true;

    // try all possible directions
    dirs.forEach(([dx, dy], di) => {
      // can't go back
      if (udi + di == 3) return;

      // same direction only three times
      const intact = di == udi;
      if (intact && ulen == 3) return;

      // inside the grid only
      const vx = ux + dx;
      const vy = uy + dy;
      if (vx < 0 || vx > m - 1) return;
      if (vy < 0 || vy > n - 1) return;

      // move to next step
      heapq.push(heap, [loss + mat[vx][vy], vx, vy, di, intact ? ulen + 1 : 1]);
    });
  }
  console.log("k", k);
  return loss;
}

const part1 = (mat) => findPath(mat);

run(part1, lossMap);
