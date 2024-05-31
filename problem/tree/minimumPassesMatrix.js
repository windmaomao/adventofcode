//https://www.algoexpert.io/questions/minimum-passes-of-matrix
// 5/30/24, bfs and don't forget to check unreachable area in the end
const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function minimumPassesOfMatrix(mat) {
  let m = mat.length,
    n = mat[0].length;
  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] > 0) {
        queue.push([0, i, j]);
      }
    }
  }

  let visited = {};
  const _k = (i, j) => `${i},${j}`;
  let current, depth;
  while ((current = queue.shift())) {
    const [d, i, j] = current;
    const key = _k(i, j);
    if (key in visited) continue;

    visited[_k(i, j)] = true;
    depth = d;

    dirs.forEach(([di, dj]) => {
      const ni = i + di,
        nj = j + dj;
      if (ni < 0 || ni >= m || nj < 0 || nj >= n) return;
      if (_k(ni, nj) in visited) return;
      if (mat[ni][nj] >= 0) return;
      queue.push([d + 1, ni, nj]);
    });
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (_k(i, j) in visited) continue;
      if (mat[i][j] < 0) return -1;
    }
  }

  return depth;
}

// Do not edit the line below.
exports.minimumPassesOfMatrix = minimumPassesOfMatrix;
