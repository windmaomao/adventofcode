/**
 * @param {number[][]} mat
 * @return {number[]}
 */
function findDiagonalOrder(mat) {
  const [m, n] = [mat.length, mat[0].length];

  let [i, j] = [0, 0],
    dir = 1; // up
  let ni,
    nj,
    res = [];
  while (i < m && j < n) {
    res.push(mat[i][j]);

    if (dir) [ni, nj] = [i - 1, j + 1];
    else [ni, nj] = [i + 1, j - 1];

    if (ni < 0 || ni == m || nj < 0 || nj == n) {
      if (dir) {
        if (nj == n) i++;
        else j++;
      } else {
        if (ni == m) j++;
        else i++;
      }
      dir = 1 - dir;
    } else {
      [i, j] = [ni, nj];
    }
  }

  return res;
}
