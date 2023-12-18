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

const part1 = (strs) => {
  // beam is composed of pos i, j and dir id
  let beams = [[0, 0, 0]];
  let visited = {};
  let curr;
  let kkk = 0;

  const addBeam = (i, j, dir) => {
    const ni = dirs[dir][0] + i;
    const nj = dirs[dir][1] + j;
    if (ni < 0 || ni >= m || nj < 0 || nj >= n) return;

    beams.push([ni, nj, dir]);
  };

  while ((curr = beams.pop())) {
    kkk++;
    const [i, j, dir] = curr;
    // console.log(i, j, dir);
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

run(part1, strs);
