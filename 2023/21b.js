require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("21.a", "\n");

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
const repeat = (j, n) => {
  let k = j % n;
  return k < 0 ? k + n : k;
};

const part2 = (map, steps) => {
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

  // console.log(heap);
  return heap.length;
};

run(part2, map, 50);
