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
  const _key = (x, y) => `${x},${y}`;
  const visited = { [_key(...map.start)]: true };

  const visit = (ux, uy) => {
    if (ux == map.end[0] && uy == map.end[1]) {
      console.log("reached");
      return;
    }

    const key = _key(ux, uy);
    visited[key] = true;
    // console.log(key);

    const _dirs = map.map[ux][uy] in slopes ? [slopes[map.map[ux][uy]]] : dirs;
    _dirs.forEach(([dx, dy]) => {
      const vx = ux + dx;
      const vy = uy + dy;
      if (vx < 0 || vx >= map.m || vy < 0 || vy >= map.n) return;
      if (map.map[vx][vy] == "#") return;
      if (_key(vx, vy) in visited) return;

      // console.log("...", vx, vy);
      visit(vx, vy);
    });

    delete visited[key];
  };

  visit(...map.start);
};

run(part1, parsedMap);

// 2698 too low
// 5478 too low
// 5634 not right
// 5722 not right
