require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("11", "\n");

const collectStars = (strs) => {
  let res = [];
  let rows = {},
    cols = {};
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] == "#") {
        res.push([i, j]);
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  let missRows = [],
    missCols = [];
  for (let i = 0; i < strs.length; i++) {
    if (!rows[i]) missRows.push(i);
  }
  for (let j = 0; j < strs[0].length; j++) {
    if (!cols[j]) missCols.push(j);
  }

  for (let k = 0; k < res.length; k++) {
    let [x, y] = res[k];
    for (let i = 0; i < missRows.length; i++) {
      if (res[k][0] > missRows[i]) x++;
    }
    for (let j = 0; j < missCols.length; j++) {
      if (res[k][1] > missCols[j]) y++;
    }
    res[k] = [x, y];
  }

  return { stars: res, missRows, missCols };
};

const collects = collectStars(strs);

const part1 = ({ stars }) => {
  let count = 0;
  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      count +=
        Math.abs(stars[i][0] - stars[j][0]) +
        Math.abs(stars[i][1] - stars[j][1]);
    }
  }
  return count;
};

run(part1, collects);
