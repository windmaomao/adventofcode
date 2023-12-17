require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("13", "\n");
const parsed = strs.split("");

const hasOneDiff = (s1, s2) => {
  let diff = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) diff++;
  }
  return diff === 1;
};

const findMirror = (mat) => {
  const m = mat.length;
  let res = [],
    index = -1;

  for (let i = 0; i < m - 1; i++) {
    let found = [];
    for (let j = 0; j < Math.min(i + 1, m - 1 - i); j++) {
      found.push(mat[i - j] == mat[i + 1 + j]);
    }
    res.push(found);
    if (found.filter((v) => !v).length == 1) {
      const j = found.indexOf(false);
      if (hasOneDiff(mat[i - j], mat[i + 1 + j])) {
        index = i + 1;
      }
    }
  }

  return index;
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

const part2 = (mats) => {
  const rows = mats.map(findMirror);
  const cols = mats.map(rotateMat).map(findMirror);
  console.log(rows, cols);
  return (
    cols.filter((v) => v > 0).sum() + rows.filter((v) => v > 0).sum() * 100
  );
};

run(part2, parsed);
