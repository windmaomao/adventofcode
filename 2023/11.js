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

  return { res, missRows, missCols };
};

const collects = collectStars(strs);

const expandStars = ({ res, missRows, missCols }, delta = 2) => {
  const stars = [];
  for (let k = 0; k < res.length; k++) {
    let [x, y] = res[k];
    for (let i = 0; i < missRows.length; i++) {
      if (res[k][0] > missRows[i]) x += delta - 1;
    }
    for (let j = 0; j < missCols.length; j++) {
      if (res[k][1] > missCols[j]) y += delta - 1;
    }
    stars.push([x, y]);
  }
  return stars;
};

const calcDists = (stars) => {
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

const part1 = (collected) => {
  const expanded = expandStars(collected);
  return calcDists(expanded);
};

run(part1, collects);

const part2 = (collected) => {
  const expanded = expandStars(collected, 1000000);
  return calcDists(expanded);
};

run(part2, collects);
