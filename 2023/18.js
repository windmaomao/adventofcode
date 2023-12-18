require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("18.a", "\n");

const parseDigs = (strs) => {
  return strs.map((str) => {
    const parts = str.split(" ");
    return {
      dir: parts[0],
      steps: Number(parts[1]),
      color: parts[2],
    };
  });
};

const dirs = {
  R: [0, 1],
  D: [1, 0],
  L: [0, -1],
  U: [-1, 0],
};

const digTerrain = (digs) => {
  let x = 0,
    y = 0;
  let visits = {};

  digs.forEach(({ dir, steps }) => {
    const [dx, dy] = dirs[dir];
    for (let i = 0; i < steps; i++) {
      x += dx;
      y += dy;
      visits[`${x}:${y}`] = true;
    }
  });

  return visits;
};

const fillTerrain = (terrains) => {
  let sx = 1,
    sy = 1;
  let filled = {};
  let heap = [[sx, sy]];
  let curr;
  let k = 0;

  while ((curr = heap.shift()) && k < 2000000) {
    k++;
    const [x, y] = curr;

    const key = `${x}:${y}`;
    if (filled[key]) continue;
    filled[key] = true;

    // console.log(x, y);

    Object.values(dirs).forEach(([dx, dy]) => {
      const nx = x + dx;
      const ny = y + dy;
      const nkey = `${nx}:${ny}`;
      if (terrains[nkey]) return;
      if (filled[nkey]) return;

      heap.push([nx, ny]);
    });
  }

  return filled;
};

const part1 = () => {
  const digs = parseDigs(strs);
  const terrains = digTerrain(digs);
  const fills = fillTerrain(terrains);
  return Object.keys(fills).length + Object.keys(terrains).length;
};

run(part1);
