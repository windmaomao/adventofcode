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
  perm.forEach((i) => {
    if (template[i] != "?") {
      console.error(template, i);
    }
    template[i] = "#";
  });
  template.forEach((c, i) => {
    if (c == "?") template[i] = ".";
  });

  const res = template
    .join("")
    .split(/\.+/g)
    .filter((c) => c != "");
  // console.log(template.join(""), res);

  if (res.length != records.length) return false;
  for (let i = 0; i < res.length; i++) {
    if (res[i].length != records[i]) return false;
  }
  // console.log(template.join(""));
  return true;
};

const part1 = (strs) => {
  return strs
    .map(parseLine)
    .map((o, i) => {
      // console.log(o);
      const p = permute(o.fills, o.count);

      const c = p
        .map((perm) => matchPattern([...o.pattern], perm, o.records))
        .filter((v) => v).length;

      // console.log(i, ")", o.fills.length, o.count, p.length, c);

      return c;
    })
    .sum();
};

run(part1, strs);
