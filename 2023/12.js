require("./array");
const read = require("./read");
const run = require("./run");
const permute = require("./permute");
const strs = read("12.c", "\n");

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
  //console.log(template.join(""), res);

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
    .map((o, i) => {
      const c = permute(o.fills, o.count)
        .map((perm) => matchPattern([...o.pattern], perm, o.records))
        .filter((v) => v).length;
      console.log(i, ")", o.fills.length, o.count, c);
      return c ? c : 1;
    })
    .sum();
};

// run(part1, strs);

const parseLine2 = (str) => {
  const parts = str.split(" ");
  const _pattern = parts[0].split("");
  const pattern = [..._pattern, "?", ..._pattern];
  const filled = pattern.filter((c) => c == "#").length;
  const _records = parts[1].split(",").map(Number);
  const records = [..._records, ..._records];
  const count = records.sum() - filled;
  const fills = pattern.map((_, i) => i).filter((i) => pattern[i] == "?");

  return {
    pattern,
    records,
    count,
    fills,
  };
};

const part2 = (strs) => {
  const singles = strs.map(parseLine).map((o, i) => {
    const c = permute(o.fills, o.count)
      .map((perm) => matchPattern([...o.pattern], perm, o.records))
      .filter((v) => v).length;
    return c ? c : 1;
  });

  const doubles = strs.map(parseLine2).map((o, i) => {
    const c = permute(o.fills, o.count)
      .map((perm) => matchPattern([...o.pattern], perm, o.records))
      .filter((v) => v).length;
    return c ? c : 1;
  });

  return singles
    .map((s, i) => {
      const m = doubles[i] / s;
      return s * m * m * m * m;
    })
    .sum();
};

run(part2, strs);
