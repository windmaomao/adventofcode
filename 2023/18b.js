require("./array");
const read = require("./read");
const run = require("./run");
const area = require("./area");
const strs = read("18.a", "\n");

const parseVerts2 = (strs) => {
  let pos = [0, 0];
  let verts = [];
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  strs.forEach((str) => {
    const parts = str.split(" ");
    const color = parts[2];
    const steps = parseInt(color.slice(2, 7), 16);
    const dir = Number(color.at(-2));

    for (let i = 0; i < 2; i++) {
      pos[i] += dirs[dir][i] * steps;
    }

    verts.push([...pos]);
  });

  return verts;
};

const part2 = (parsed) => area(parseVerts2(parsed));

run(part2, strs);
