require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("13", "\n");
const parsed = strs.split("");

const findMirror = (mat) => {
  const m = mat.length;
  let res = -1;

  for (let i = 0; i < m - 1; i++) {
    let found = true;
    for (let j = 0; j < Math.min(i + 1, m - 1 - i); j++) {
      if (mat[i - j] !== mat[i + 1 + j]) {
        found = false;
        break;
      }
    }
    if (found) res = i + 1;
  }

  return res;
};

const rotateMat = (mat) => {
  const m = mat.length;
  const n = mat[0].length;
  let res = [],
    row;

  for (let i = 0; i < n; i++) {
    row = [];
    for (let j = 0; j < m; j++) {
      row.push(mat[j][i]);
    }
    res.push(row.join(""));
  }

  return res;
};

const part1 = (mats) => {
  const rows = mats.map(findMirror);
  const cols = mats.map(rotateMat).map(findMirror);
  console.log(rows, cols);
  return (
    cols.filter((v) => v > 0).sum() + rows.filter((v) => v > 0).sum() * 100
  );
};

run(part1, parsed);
