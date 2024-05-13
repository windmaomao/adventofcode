require("./array");
const read = require("./read");
const run = require("./run");
const area = require("./area");
const strs = read("18", "\n");

const parseVerts = (strs) => {
  let pos = [0, 0];
  let verts = [];
  let length = 0;
  const dirs = {
    R: [0, 1],
    D: [1, 0],
    L: [0, -1],
    U: [-1, 0],
  };

  strs.forEach((str) => {
    const parts = str.split(" ");
    const dir = parts[0];
    const steps = Number(parts[1]);
    length += steps;

    for (let i = 0; i < 2; i++) {
      pos[i] += dirs[dir][i] * steps;
    }

    verts.push([...pos]);
  });

  return [length, verts];
};

const parseVerts2 = (strs) => {
  let pos = [0, 0];
  let verts = [];
  let length = 0;
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
    length += steps;

    for (let i = 0; i < 2; i++) {
      pos[i] += dirs[dir][i] * steps;
    }

    verts.push([...pos]);
  });

  return [length, verts];
};

const findArea = ([length, verts]) => {
  // Pick's Formula: A = i + b/2 - 1?
  return area(verts) + length / 2 + 1;
};

const part1 = (parsed) => findArea(parseVerts(parsed));
run(part1, strs);

const part2 = (parsed) => findArea(parseVerts2(parsed));
run(part2, strs);
