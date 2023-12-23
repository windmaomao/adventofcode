const read = require("./read");
const run = require("./run");
const strs = read("23", "\n");
const _key = (x, y) => `${x},${y}`;
const dirs = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
const slopes = {
  ">": [0, 1],
  "<": [0, -1],
  v: [1, 0],
  "^": [-1, 0],
};

const parseMap = (map) => {
  const m = strs.length;
  const n = strs[0].length;
  const start = [0, 1];
  const end = [m - 1, n - 2];
  const nodes = {};

  const isNode = (x, y) => {
    if (map[x][y] == "#") return false;
    const ms = dirs.map(([dx, dy]) => {
      const vx = x + dx;
      const vy = y + dy;
      return map[vx][vy] != "#";
    });
    return ms.filter((m) => m).length >= 3;
  };

  let k = 0;
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (isNode(i, j)) {
        nodes[_key(i, j)] = k;
        k++;
      }
    }
  }

  return { map, m, n, start, end, nodes };
};

const parsedMap = parseMap(strs);

const isVisited = (path, x, y) => path.some(([px, py]) => px == x && py == y);
const getPathKey = (path, nodes) => {
  const majorNodes = path
    .filter(([x, y]) => _key(x, y) in nodes)
    .map(([x, y]) => nodes[_key(x, y)]);
  return _key(...path.at(-1)) + "|" + majorNodes.join(",");
};

const part1 = (map) => {
  const heap = [[map.start]];
  let path;
  let longest = 0;
  let pathMap = {};
  let k = 0;

  while ((path = heap.pop())) {
    k++;
    let [ux, uy] = path.at(-1);
    if (ux == map.end[0] && uy == map.end[1]) {
      longest = Math.max(longest, path.length - 1);
      console.log(path.length - 1, longest);
      continue;
    }

    const pathKey = getPathKey(path, map.nodes);
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

// 2698 too low
// 5478 too low
// 5634 not right
// 5722 not right
