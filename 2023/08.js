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
const part1 = ({ insts, map }) => {
  let i = 0;
  let curr = "AAA";
  let count = 0;
  while (curr != "ZZZ") {
    const inst = insts.at(i);
    curr = map[curr][lr[inst]];
    i++;
    if (i == insts.length) i = 0;
    count++;
  }
  return count;
};

run(part1, parsed);
