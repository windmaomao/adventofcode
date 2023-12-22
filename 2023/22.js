require("./object");
const read = require("./read");
const run = require("./run");
const strs = read("22", "\n");
const char = (i) => String.fromCharCode(65 + i);

const parseBlocks = (strs) => {
  const _pos = (p) => p.split(",").map(Number);
  const blocks = {};

  // parse blocks
  strs.map((str, name) => {
    const parts = str.split("~");
    const [p0, p1] = parts.map(_pos);
    let z = Math.min(p0[2], p1[2]);
    blocks[name] = { name, p0, p1, z, supports: [] };
  });

  // sort by z
  const sorted = blocks.values().sort((a, b) => a.z - b.z);
  // console.log(sorted);

  // find supports
  for (let i = 0; i < sorted.length; i++) {
    let { name: uname, z: uz } = sorted[i];
    let [ax0, ay0] = sorted[i].p0;
    let [ax1, ay1] = sorted[i].p1;
    let j = i - 1;
    let landed = false;
    // console.log(char(uname), uz, ax0, ay0, ax1, ay1);

    while (j >= 0) {
      let { name: vname, z: vz } = sorted[j];
      if (landed && uz != vz + 1) {
        j--;
        continue;
      }

      let [bx0, by0] = sorted[j].p0;
      let [bx1, by1] = sorted[j].p1;
      if (ax0 > bx1 || ax1 < bx0 || ay0 > by1 || ay1 < by0) {
        j--;
        continue;
      }

      uz = vz + 1;
      // console.log("...", char(vname), uz, bx0, by0, bx1, by1);
      blocks[vname].supports.push(uname);
      // console.log(char(vname), "supports", char(uname));
      landed = true;
      j--;
    }

    blocks[uname].z = uz;
  }

  return blocks;
};

const blocks = parseBlocks(strs);

const part1 = (blocks) => {
  const list = blocks.values();

  // find all supportedBy
  list.forEach((block) => {
    block.supportedBy = list
      .filter((b) => b.supports.includes(block.name))
      .map((b) => b.name);
  });

  // find whether can be disintegrated
  return list.filter(({ supports }) => {
    if (supports.length == 0) return true;
    return supports.every((name) => blocks[name].supportedBy.length > 1);
  }).length;
};

run(part1, blocks);
