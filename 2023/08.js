require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("08", "\n");

const parseNetwork = (strs) => {
  const insts = strs[0];
  let i = 2;
  let map = {};
  while (i < strs.length) {
    const parts = strs[i].match(/\w+/g);
    const key = parts.shift();
    map[key] = parts;
    i++;
  }

  return { insts, map };
};

const parsed = parseNetwork(strs);

const lr = { L: 0, R: 1 };
const runSteps = ({ insts, map }, from) => {
  let i = 0;
  let curr = from;
  let count = 0;
  while (curr[2] != "Z") {
    const inst = insts.at(i);
    curr = map[curr][lr[inst]];
    i++;
    if (i == insts.length) i = 0;
    count++;
  }
  return count;
};

const part1 = (parsed) => runSteps(parsed, "AAA");

// run(part1, parsed);

const part2 = ({ insts, map }) => {
  const starts = Object.keys(map).filter((v) => v[2] == "A");
  return starts.map((from) => runSteps({ insts, map }, from));
};

run(part2, parsed);
