const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function riverSizes(mat) {
  const m = mat.length,
    n = mat[0].length;
  const sizes = [];
  const visited = {};
  const _k = (i, j) => `${i}-${j}`;

  function getSize(si, sj) {
    let count = 0;

    function visit(i, j) {
      const key = _k(i, j);
      if (key in visited) return;

      visited[key] = true;
      count++;
      dirs.forEach(([di, dj]) => {
        const ni = i + di,
          nj = j + dj;
        if (ni < 0 || ni >= m || nj < 0 || nj >= n) return;
        if (mat[ni][nj] == 0) return;
        visit(ni, nj);
      });
    }

    visit(si, sj);
    return count;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 0) continue;
      const key = _k(i, j);
      if (key in visited) continue;
      sizes.push(getSize(i, j));
    }
  }

  return sizes;
}
