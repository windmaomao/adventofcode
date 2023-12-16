require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("12.a", "\n");

const parseLine = (str) => {
  const parts = str.split(" ");
  const pattern = parts[0].split("");
  const filled = pattern.filter((c) => c == "#").length;
  const records = parts[1].split(",").map(Number);
  const count = records.sum() - filled;
  const fills = pattern.map((_, i) => i).filter((i) => pattern[i] == "?");

  return {
    pattern,
    records,
    count,
    fills,
  };
};

const matchRecord = (template, records, full = false) => {
  let processed = [...template];
  const q = template.indexOf("?");
  if (q > 0) {
    processed = processed.slice(0, q);
  }

  const res = processed
    .join("")
    .split(/\.+/g)
    .filter((c) => c != "")
    .map((v) => v.length);

  let segs = res.length;
  for (let i = 0; i < segs; i++) {
    if (i < segs - 1) {
      if (res[i] != records[i]) return false;
    } else {
      if (res[i] > records[i]) return false;
    }
  }

  if (!full) return true;

  if (segs != records.length) return false;
  return res[segs - 1] == records[segs - 1];
};

// given current filled template, start to work on ith ?
// and see if can be matched with next records
const permute = ({ records, fills, count, pattern }) => {
  let total = 0;

  const solve = (template, index) => {
    if (index == fills.length) {
      if (matchRecord(template, records, true)) {
        console.log(template.join(""));
        total++;
      }
      return;
    }

    let i = fills[index];
    ["#", "."].forEach((c) => {
      const newTemplate = [...template];
      newTemplate[i] = c;
      if (matchRecord(newTemplate, records)) {
        solve(newTemplate, index + 1);
      }
    });
  };

  solve(pattern, 0);
  return total;
};

const part1 = (strs) => {
  return strs.map(parseLine).map((o) => permute(o));
};

run(part1, strs);
