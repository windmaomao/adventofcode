require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("10.f", "\n");
const m = strs.length;
const n = strs[0].length;

const parseMap = (strs) => {
  let origin;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (strs[i][j] == "S") {
        origin = [i, j];
      }
    }
  }
  return {
    graph: strs,
    origin,
  };
};

const originDirs = (x, y, graph) => {
  let dirs = [];
  if (["|", "F", "7"].indexOf(graph[x - 1][y]) >= 0) dirs.push([-1, 0]);
  if (["|", "L", "J"].indexOf(graph[x + 1][y]) >= 0) dirs.push([1, 0]);
  if (["-", "L", "F"].indexOf(graph[x][y - 1]) >= 0) dirs.push([0, -1]);
  if (["-", "7", "J"].indexOf(graph[x][y + 1]) >= 0) dirs.push([0, 1]);
  return dirs;
};
const connectorDirs = {
  "-": [
    [0, -1],
    [0, 1],
  ],
  "|": [
    [-1, 0],
    [1, 0],
  ],
  F: [
    [0, 1],
    [1, 0],
  ],
  7: [
    [0, -1],
    [1, 0],
  ],
  J: [
    [-1, 0],
    [0, -1],
  ],
  L: [
    [0, 1],
    [-1, 0],
  ],
};

const runPipes = ({ graph, origin }) => {
  let longest = 0;
  let mark = {};
  let dist = {};
  const _k = (i, j) => `${i}:${j}`;

  let heap = [origin];
  let start = _k(...origin);
  dist[start] = 0;
  const _d = (k) => (k in dist ? dist[k] : Infinity);

  while (heap.length) {
    let [ux, uy] = heap.shift();
    const u = _k(ux, uy);
    if (u in mark) continue;

    mark[u] = true;
    const ud = _d(u);
    const dirs =
      graph[ux][uy] == "S"
        ? originDirs(ux, uy, graph)
        : connectorDirs[graph[ux][uy]];
    dirs.forEach(([dx, dy]) => {
      let vx = ux + dx;
      let vy = uy + dy;
      if (vx < 0 || vx >= m || vy < 0 || vy >= n) return;
      if (graph[vx][vy] == ".") return;
      const v = _k(vx, vy);
      if (v in mark) return;

      dist[v] = Math.min(_d(v), ud + 1);
      longest = Math.max(longest, dist[v]);
      heap.push([vx, vy]);
    });
  }

  return {
    graph,
    origin,
    dist,
    longest,
  };
};

const parsedPipes = runPipes(parseMap(strs));

const part1 = (res) => res.longest;
run(part1, parsedPipes);

const doubles = { F: "7", L: "J" };

const calcSegments = (str) => {
  let start = null;
  let segments = [];
  for (let i = 0; i < n; i++) {
    const c = str[i];
    switch (c) {
      case "F":
      case "7":
      case "L":
      case "J":
        if (start == null) {
          start = [c, i];
        } else {
          let [prev, j] = start;
          segments.push([j, i, doubles[prev] == c ? 2 : 1]);
          start = null;
        }
        break;
      case "|":
        start = null;
        segments.push([i, i, 1]);
        break;
      default:
        break;
    }
  }

  let inside = false,
    prev = 0;
  let res = [];
  for (let k = 0; k < segments.length; k++) {
    const [from, to, changes] = segments[k];
    if (from > prev) {
      for (let i = prev; i < from; i++) {
        if (inside) res.push(i);
      }
    }
    prev = to + 1;
    if (changes == 1) inside = !inside;
  }
  return res;
};

const part2 = ({ graph, origin }) => {
  const g = graph.map((str) => str.split(""));
  const [x, y] = origin;
  g[x][y] = "7";
  return g
    .map(calcSegments)
    .map((arr) => arr.length)
    .sum();
};

run(part2, parsedPipes);
