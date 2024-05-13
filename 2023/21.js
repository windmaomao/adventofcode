require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("21", "\n");

const parseMap = (strs) => {
  const m = strs.length;
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
const part1 = (map, steps) => {
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
        if (nx < 0 || nx >= map.m || ny < 0 || ny >= map.n) return;

        const k = `${nx},${ny}`;
        if (k in visited) return;

        if (map.map[nx][ny] == "#") return;

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

run(part1, map, 64);
