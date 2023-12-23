const read = require("./read");
const run = require("./run");
const strs = read("23", "\n");

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

const isVisited = (path, x, y) => path.some(([px, py]) => px == x && py == y);
const getPathKey = (path) => {
  return path.map(([x, y]) => `${y}`).join("");
};

const part1 = (map) => {
  const heap = [[map.start]];
  let path;
  let longest = 0;
  let pathMap = {};

  while ((path = heap.pop())) {
    let [ux, uy] = path.at(-1);
    if (ux == map.end[0] && uy == map.end[1]) {
      longest = Math.max(longest, path.length - 1);
      console.log(path.length - 1);
      continue;
    }

    const pathKey = getPathKey(path);
    if (pathKey in pathMap) continue;
    pathMap[pathKey] = true;
    // console.log(pathKey);

    // const _dirs = map.map[ux][uy] in slopes ? [slopes[map.map[ux][uy]]] : dirs;
    dirs.forEach(([dx, dy]) => {
      const vx = ux + dx;
      const vy = uy + dy;
      if (vx < 0 || vx >= map.m || vy < 0 || vy >= map.n) return;
      if (map.map[vx][vy] == "#") return;
      if (isVisited(path, vx, vy)) return;

      // console.log("...", vx, vy);
      heap.push([...path, [vx, vy]]);
    });
  }

  return longest;
};

run(part1, parsedMap);
