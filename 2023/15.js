require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("15", "\n");
const sequences = strs[0].split(",");

const hashed = (seq, starting) => {
  let v = starting;
  seq.split("").forEach((c) => {
    v += c.charCodeAt(0);
    v *= 17;
    v %= 256;
  });
  return v;
};

const part1 = (seqs) => {
  return seqs.map((s) => hashed(s, 0)).sum();
};

run(part1, sequences);
