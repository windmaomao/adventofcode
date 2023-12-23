require("./object");
require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("22", "\n");

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

    let landed = false;
    const sorted2 = blocks
      .values()
      .filter((b) => b.p1[2] < uzl)
      .sort((a, b) => b.p1[2] - a.p1[2]);

    // console.log(uname, uzl, sorted[i].p0, sorted[i].p1);

    for (let v of sorted2) {
      let vname = v.name;
      let vzh = v.p1[2];
      if (landed && uzl != vzh + 1) continue;

      let [bx0, by0] = v.p0;
      let [bx1, by1] = v.p1;
      if (ax0 > bx1 || ax1 < bx0 || ay0 > by1 || ay1 < by0) continue;

      uzl = vzh + 1;
      // console.log("...", vname, vzh, v.p0, v.p1);
      blocks[vname].supports.push(uname);
      // console.log("...p", vname, "supports", uname);
      landed = true;
    }
    if (!landed) uzl = 1;

    let dz = blocks[uname].p1[2] - blocks[uname].p0[2];
    blocks[uname].p0[2] = uzl;
    blocks[uname].p1[2] = uzl + dz;
    // console.log("...u", blocks[uname]);
  }

  return blocks;
};

const blocks = parseBlocks(strs);

const countFalls = (start, list, blocks) => {
  console.log(start, ")");
  let deads = { [start]: true };

  const canFall = (id) => {
    const supportedBy = blocks
      .values()
      .filter((b) => b.supports.indexOf(id) >= 0);
    if (supportedBy.length == 0) return false;
    return supportedBy.every((b) => deads[b.name]);
  };

  for (let c of list) {
    if (deads[c]) continue;
    if (canFall(c)) {
      // console.log(c, "can fall");
      deads[c] = true;
    }
  }

  return deads.keys().length - 1;
};

const topologicalOrder = (blocks) => {
  let list = blocks.values().map((b) => b.name);
  let curr = list.filter((id) => blocks[id].supports.length == 0);
  let res = [];

  while (curr.length > 0) {
    curr.forEach((c) => {
      if (res.indexOf(c) >= 0) return;
      res.push(c);
    });

    let next = [];
    list
      .filter((id) => blocks[id].supports.every((s) => res.indexOf(s) >= 0))
      .forEach((c) => {
        if (res.indexOf(c) >= 0) return;
        if (next.indexOf(c) >= 0) return;
        next.push(c);
      });

    curr = next;
  }

  return res.reverse();
};

const part2 = (blocks) => {
  const list = topologicalOrder(blocks);
  return blocks
    .values()
    .map((v) => v.name)
    .map((name) => countFalls(name, list, blocks))
    .sum();
};

run(part2, blocks);

// 22749 too low
