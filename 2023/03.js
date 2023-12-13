require("./array");
const read = require("./read");
const run = require("./run");

const strs = read("03", "\n");
const m = strs.length,
  n = strs[0].length;
const isSymbol = (c) => {
  if (c === ".") return false;
  if (c >= "0" && c <= "9") return false;
  return true;
};

const part1 = (strs) => {
  const flags = {};
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isSymbol(strs[i][j])) {
        for (let p = -1; p <= 1; p++) {
          const x = i + p;
          for (let q = -1; q <= 1; q++) {
            const y = j + q;
            const key = `${x},${y}`;
            flags[key] = true;
          }
        }
      }
    }
  }

  const res = [];
  for (let i = 0; i < m; i++) {
    let digits = 0,
      taken = false;
    for (let j = 0; j <= n; j++) {
      const c = strs[i][j];
      if (c >= "0" && c <= "9") {
        digits = digits * 10 + Number(c);
        const key = `${i},${j}`;
        if (flags[key]) {
          taken = true;
        }
      } else {
        if (taken) res.push(digits);
        digits = 0;
        taken = false;
      }
    }
  }

  return res.sum();
};

run(part1, strs);
