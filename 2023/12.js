require("./array");
const read = require("./read");
const run = require("./run");
const permute = require("./permute");
const strs = read("12", "\n");

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

const matchPattern = (template, perm, records) => {
  template.forEach((c, i) => {
    if (c == "?") template[i] = ".";
  });
  perm.forEach((i) => {
    template[i] = "#";
  });

  const res = template
    .join("")
    .split(/\.+/g)
    .filter((c) => c != "");
  // console.log(template.join(""), res);

  const match = res.map((v) => v.length);
  if (match.length != records.length) return false;
  for (let i = 0; i < records.length; i++) {
    if (match[i] != records[i]) return false;
  }
  // console.log(template.join(""));
  return true;
};

const part1 = (strs) => {
  return strs
    .map(parseLine)
    .map((o) => {
      const c = permute(o.fills, o.count)
        .map((perm) => matchPattern([...o.pattern], perm, o.records))
        .filter((v) => v).length;
      return c ? c : 1;
    })
    .sum();
};

run(part1, strs);
