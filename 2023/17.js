require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("17", "\n");
const m = strs.length;
const n = strs[0].length;

const MinHeap = {
  siftDown(h, i = 0, v = h[i]) {
    if (i < h.length) {
      let k = v[0];
      while (1) {
        let j = i * 2 + 1;
        if (j + 1 < h.length && h[j][0] > h[j + 1][0]) j++;
        if (j >= h.length || k <= h[j][0]) break;
        h[i] = h[j];
        i = j;
      }
      h[i] = v;
    }
  },
  heapify(h) {
    for (let i = h.length >> 1; i--; ) this.siftDown(h, i);
    return h;
  },
  pop(h) {
    return this.exchange(h, h.pop());
  },
  exchange(h, v) {
    if (!h.length) return v;
    let w = h[0];
    this.siftDown(h, 0, v);
    return w;
  },
  push(h, v) {
    let k = v[0],
      i = h.length,
      j;
    while ((j = (i - 1) >> 1) >= 0 && k < h[j][0]) {
      h[i] = h[j];
      i = j;
    }
    h[i] = v;
    return h;
  },
};

const dirs = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];

function findPath(startRow, startCol, endRow, endCol) {
  const _k = (i, j) => `${i}:${j}`;
  let minCost = Infinity;

  const mark = {},
    dist = {},
    parent = {};
  const heap = [[0, startRow, startCol]];
  const start = _k(startRow, startCol);
  dist[start] = 0;
  const _d = (k) => (k in dist ? dist[k] : Infinity);

  while (heap.length) {
    let [priority, ux, uy] = MinHeap.pop(heap);
    if (ux == endRow && uy == endCol) {
      minCost = priority;
      break;
    }

    const u = _k(ux, uy);
    if (u in mark) continue;

    mark[u] = true;
    const du = _d(u);

    dirs.forEach(([dx, dy]) => {
      const vx = ux + dx,
        vy = uy + dy;
      if (vx < 0 || vx > m - 1) return;
      if (vy < 0 || vy > n - 1) return;

      const v = _k(vx, vy);
      if (v in mark) return;

      const nd = du + Number(strs[vx][vy]);
      if (nd < _d(v)) {
        dist[v] = nd;
        parent[v] = [ux, uy];
        const pv = nd;
        MinHeap.push(heap, [pv, vx, vy]);
      }
    });
  }

  const res = [[endRow, endCol]];
  let curr = _k(endRow, endCol);
  while (curr != start) {
    if (!(curr in parent)) break;

    const pos = parent[curr];
    res.push(pos);
    curr = _k(...pos);
  }
  console.log(res.reverse());

  return minCost;
}

const part1 = (strs) => findPath(0, 0, m - 1, n - 1);

run(part1, strs);
