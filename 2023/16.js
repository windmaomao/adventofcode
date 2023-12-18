require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("16", "\n");
const m = strs.length;
const n = strs[0].length;

const dirs = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const branches = {
  "/": [3, 2, 1, 0],
  "\\": [1, 0, 3, 2],
};

// start is [i, j, dir]
const energize = (strs, start) => {
  let beams = [start];
  let visited = {};
  let curr;

  const addBeam = (i, j, dir) => {
    const ni = dirs[dir][0] + i;
    const nj = dirs[dir][1] + j;
    if (ni < 0 || ni >= m || nj < 0 || nj >= n) return;

    beams.push([ni, nj, dir]);
  };

  while ((curr = beams.pop())) {
    const [i, j, dir] = curr;
    const key = `${i},${j}`;
    visited[key] = visited[key] || [];
    const visitedDirs = visited[key];
    if (visitedDirs.includes(dir)) continue;

    visitedDirs.push(dir);

    let ds = [];
    switch (strs[i][j]) {
      case ".":
        ds.push(dir);
        break;
      case "-":
        if (dir == 0 || dir == 2) {
          ds.push(dir);
        } else {
          ds.push(0, 2);
        }
        break;
      case "|":
        if (dir == 1 || dir == 3) {
          ds.push(dir);
        } else {
          ds.push(1, 3);
        }
        break;
      case "/":
        ds.push(branches["/"][dir]);
        break;
      case "\\":
        ds.push(branches["\\"][dir]);
        break;
    }

    ds.forEach((d) => addBeam(i, j, d));
  }

  return Object.keys(visited).length;
};

const part1 = (strs) => energize(strs, [0, 0, 0]);

run(part1, strs);

const part2 = (strs) => {
  let starts = [];
  for (let i = 0; i < m; i++) {
    starts.push([i, 0, 0], [i, n - 1, 2]);
  }
  for (let j = 0; j < n; j++) {
    starts.push([0, j, 1], [m - 1, j, 3]);
  }

  return starts.map((start) => energize(strs, start)).max();
};

run(part2, strs);
