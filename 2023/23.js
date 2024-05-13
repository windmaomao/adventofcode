const heapq = require("./heapq");
const read = require("./read");
const run = require("./run");
const strs = read("23.a", "\n");

const parseMap = (map) => {
  const m = strs.length;
  const n = strs[0].length;
  const start = [0, 1];
  const end = [m - 1, n - 2];
  return { map, m, n, start, end };
};

const parsedMap = parseMap(strs);

const dirs = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];
const slopes = {
  ">": [0, 1],
  "<": [0, -1],
  v: [1, 0],
  "^": [-1, 0],
};
const part1 = (map) => {
  const _k = (i, j) => `${i}:${j}`;

  let mark = {};
  let dist = {};
  let parent = {};
  const heap = [[0, ...map.start]];
  const start = _k(...map.start);
  dist[start] = 0;
  const _d = (k) => (k in dist ? dist[k] : Infinity);

  while (heap.length) {
    let [priority, ux, uy] = heapq.pop(heap);
    if (ux == map.end[0] && uy == map.end[1]) break;

    const ukey = _k(ux, uy);
    if (ukey in mark) continue;
    mark[ukey] = true;
    const udist = _d(ukey);
    console.log(priority, ")", ux, uy);

    const _dirs = map.map[ux][uy] in slopes ? [slopes[map.map[ux][uy]]] : dirs;
    _dirs.forEach(([dx, dy]) => {
      const vx = ux + dx;
      const vy = uy + dy;
      if (vx < 0 || vx >= map.m || vy < 0 || vy >= map.n) return;
      if (map.map[vx][vy] == "#") return;

      const vkey = _k(vx, vy);
      if (vkey in mark) return;

      const nextDist = udist + 1;
      if (nextDist < _d(vkey)) {
        console.log("...p", nextDist, vx, vy);
        dist[vkey] = nextDist;
        parent[vkey] = [ux, uy];
        heapq.push(heap, [nextDist, vx, vy]);
      }
    });
  }

  const res = [[...map.end]];
  let curr = _k(...map.end);
  while (curr != start) {
    if (!(curr in parent)) break;

    const pos = parent[curr];
    res.push(pos);
    curr = _k(...pos);
  }
  console.log(res.length - 1);
  return res.reverse();
};

run(part1, parsedMap);
