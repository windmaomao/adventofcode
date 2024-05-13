require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("14", "\n");
const m = strs.length;
const n = strs[0].length;

const cycleMatrix = (mat) => {
  // north
  for (let j = 0; j < n; j++) {
    let next = 0;
    for (let i = 0; i < m; i++) {
      switch (mat[i][j]) {
        case "#":
          next = i + 1;
          break;
        case "O":
          mat[i][j] = ".";
          mat[next][j] = "O";
          next++;
          break;
      }
    }
  }

  // west
  for (let i = 0; i < m; i++) {
    let next = 0;
    for (let j = 0; j < n; j++) {
      switch (mat[i][j]) {
        case "#":
          next = j + 1;
          break;
        case "O":
          mat[i][j] = ".";
          mat[i][next] = "O";
          next++;
          break;
      }
    }
  }

  // south
  for (let j = 0; j < n; j++) {
    let next = m - 1;
    for (let i = m - 1; i >= 0; i--) {
      switch (mat[i][j]) {
        case "#":
          next = i - 1;
          break;
        case "O":
          mat[i][j] = ".";
          mat[next][j] = "O";
          next--;
          break;
      }
    }
  }

  // east
  for (let i = 0; i < m; i++) {
    let next = n - 1;
    for (let j = n - 1; j >= 0; j--) {
      switch (mat[i][j]) {
        case "#":
          next = j - 1;
          break;
        case "O":
          mat[i][j] = ".";
          mat[i][next] = "O";
          next--;
          break;
      }
    }
  }
};

const getScore = (mat) => {
  let score = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == "O") {
        score += m - i;
      }
    }
  }
  return score;
};

const part2 = (strs) => {
  const mat = strs.map((str) => str.split(""));
  let scores = [],
    h = {};
  let start, period;
  for (let i = 0; i < 300; i++) {
    cycleMatrix(mat);
    const score = getScore(mat);
    scores.push(score);

    if (i > 20) {
      let key = scores.slice(-20).join(",");
      if (key in h) {
        start = h[key];
        period = i - start;
        break;
      }
      h[key] = i;
    }
  }

  console.log(start, period);
  const idx = (1000000000 - start) % period;
  return scores[start + idx - 1];
};

run(part2, strs);

// console.log((1000000000 - 2) % 14);
