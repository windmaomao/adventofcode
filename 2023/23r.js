const read = require("./read");
const strs = read("23", "\n");
const data = strs;
const start = [0, data[0].indexOf(".")];
const end = [data.length - 1, data[data.length - 1].indexOf(".")];
const points = [start, end];

data.forEach((line, i) => {
  for (let j = 0; j < line.length; j++) {
    if (line[j] === "#") {
      continue;
    }
    let neighbors = 0;
    const dirs = [
      [i - 1, j],
      [i + 1, j],
      [i, j + 1],
      [i, j - 1],
    ];

    for (let [y, x] of dirs) {
      if (
        y >= 0 &&
        y < data.length &&
        x >= 0 &&
        x < data[0].length &&
        data[y][x] != "#"
      ) {
        neighbors++;
      }
    }
    if (neighbors > 2) {
      points.push([i, j]);
    }
  }
});
// console.log(points);

let graph = {};
for (let pt of points) {
  graph[pt] = [];
}
// console.log(graph);

for (let [sr, sc] of points) {
  let stack = [];
  stack.push([0, sr, sc]);
  let seen = new Set();
  seen.add(`${sr},${sc}`);

  while (stack.length > 0) {
    let [n, r, c] = stack.pop();
    let contain = points.some((v) => v[0] === r && v[1] === c);
    if (n != 0 && contain) {
      graph[`${sr},${sc}`].push([r, c, n]);
      continue;
    }

    for (let [dr, dc] of [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ]) {
      let nr = r + dr;
      let nc = c + dc;

      if (
        nr >= 0 &&
        nr < data.length &&
        nc >= 0 &&
        nc < data[0].length &&
        data[nr][nc] != "#" &&
        !seen.has(`${nr},${nc}`)
      ) {
        stack.push([n + 1, nr, nc]);
        seen.add(`${nr},${nc}`);
      }
    }
  }
}
console.log(graph);

let seen = new Set();
function dfs(pt) {
  if (pt[0] === end[0] && pt[1] === end[1]) {
    return 0;
  }

  let max = Number.NEGATIVE_INFINITY;

  seen.add(`${pt[0]},${pt[1]}`);

  for (let nx of graph[`${pt[0]},${pt[1]}`]) {
    if (!seen.has(`${nx[0]},${nx[1]}`)) {
      max = Math.max(max, dfs([nx[0], nx[1]]) + nx[2]);
    }
  }
  seen.delete(`${pt[0]},${pt[1]}`);

  return max;
}

console.log("Part 2 ->", dfs(start));
