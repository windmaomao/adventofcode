require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("21", "\n");

const parseMap = (strs) => {
  const m = strs.length;
  console.log(m);
  const n = strs[0].length;
  let start;
  let map = [];

  for (let i = 0; i < m; i++) {
    let m = strs[i].split("");
    for (let j = 0; j < n; j++) {
      if (m[j] == "S") {
        start = [i, j];
        m[j] = ".";
      }
    }
    map.push(m);
  }

  return {
    map,
    m,
    n,
    start,
  };
};

const map = parseMap(strs);

const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const repeat = (j, n) => {
  let k = j % n;
  return k < 0 ? k + n : k;
};

const runTiles = (map, steps) => {
  let heap = [map.start];
  let k = 0;

  while (k < steps) {
    let heap2 = [];
    let visited = {};
    let curr;

    while ((curr = heap.pop())) {
      const [x, y] = curr;
      dirs.forEach(([dx, dy]) => {
        const [nx, ny] = [x + dx, y + dy];
        let rx = repeat(x + dx, map.m);
        let ry = repeat(y + dy, map.n);

        const k = `${nx},${ny}`;
        if (k in visited) return;

        if (map.map[rx][ry] == "#") return;

        visited[k] = true;
        heap2.push([nx, ny]);
      });
    }
    heap = heap2;
    visited = {};
    k++;
  }

  return heap.length;
};

const part2 = (map) => {
  const n = map.n;
  const mid = (n - 1) / 2;
  const values = [
    runTiles(map, mid),
    runTiles(map, mid + n),
    runTiles(map, mid + 2 * n),
  ];
  // const values = [3676, 32808, 90974];
  const x = (26501365 - mid) / n;

  // Lagrange's Interpolation formula
  // Given [0,v0], [1,v1], [2,v2]
  // Find vx at x

  let a = values[0] / 2 - values[1] + values[2] / 2;
  let b = -3 * (values[0] / 2) + 2 * values[1] - values[2] / 2;
  let c = values[0];
  return a * x * x + b * x + c;
};

run(part2, map);
