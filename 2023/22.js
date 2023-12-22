require("./object");
const read = require("./read");
const run = require("./run");
const strs = read("22.a", "\n");
const char = (i) => String.fromCharCode(65 + i);

const parseBlocks = (strs) => {
  const _pos = (p) => p.split(",").map(Number);
  const blocks = {};

  // parse blocks
  strs.map((str, name) => {
    const parts = str.split("~");
    const [p0, p1] = parts.map(_pos);
    blocks[name] = { name, p0, p1, supports: [] };
  });

  // sort by z
  const sorted = blocks.values().sort((a, b) => a.p0[2] - b.p0[2]);
  // console.log(sorted);

  // find supports
  for (let i = 0; i < sorted.length; i++) {
    let uname = sorted[i].name;
    let uzl = sorted[i].p0[2];
    let [ax0, ay0] = sorted[i].p0;
    let [ax1, ay1] = sorted[i].p1;
    let j = i - 1;
    let landed = false;
    console.log(uname, uzl, sorted[i].p0, sorted[i].p1);

    while (j >= 0) {
      let vname = sorted[j].name;
      let vzh = sorted[j].p1[2];
      if (landed && uzl != vzh + 1) {
        j--;
        continue;
      }

      let [bx0, by0] = sorted[j].p0;
      let [bx1, by1] = sorted[j].p1;
      if (ax0 > bx1 || ax1 < bx0 || ay0 > by1 || ay1 < by0) {
        j--;
        continue;
      }

      uzl = vzh + 1;
      console.log("...", vname, vzh, sorted[j].p0, sorted[j].p1);
      blocks[vname].supports.push(uname);
      console.log("...p", vname, "supports", uname);
      landed = true;
      j--;
    }
    if (!landed) uzl = 1;

    let dz = blocks[uname].p1[2] - blocks[uname].p0[2];
    blocks[uname].p0[2] = uzl;
    blocks[uname].p1[2] = uzl + dz;
    console.log("...u", blocks[uname]);
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
  return list.filter(({ name, supports, p0, p1 }) => {
    console.log(name, supports, p0, p1);
    if (supports.length == 0) return true;
    const res = supports.every((vname) => {
      console.log(".", vname, blocks[vname].supportedBy);
      return blocks[vname].supportedBy.length > 1;
    });
    if (res) console.log(".s");
    return res;
  }).length;
};

run(part1, blocks);

// 538 too high
