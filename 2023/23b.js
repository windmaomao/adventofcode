const read = require("./read");
const run = require("./run");
const strs = read("23.a", "\n");
const _key = (x, y) => `${x},${y}`;
const dirs = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

const parseMap = (map) => {
  const m = strs.length;
  const n = strs[0].length;
  const start = [0, 0];
  const end = [m - 1, n - 2];
  const nodes = [start, end];

  const isNode = (x, y) => {
    if (map[x][y] == "#") return false;
    const ms = dirs.map(([dx, dy]) => {
      const vx = x + dx;
      const vy = y + dy;
      return map[vx][vy] != "#";
    });
    return ms.filter((m) => m).length >= 3;
  };

  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (isNode(i, j)) {
        nodes.push([i, j]);
      }
    }
  }

  return { map, m, n, start, end, nodes };
};

const parsedMap = parseMap(strs);

const findNodeEdges = (map, startId) => {
  // state: [[x, y], dist]
  const start = map.nodes[startId];
  let heap = [[start, 0]];
  let edges = {};
  let visited = {};
  let curr;

  while ((curr = heap.pop())) {
    const [upos, udist] = curr;
    const [ux, uy] = upos;

    if (upos in visited) continue;
    visited[upos] = true;
    // console.log(ux, uy);

    if (udist != 0) {
      let npos = map.nodes.find(([nx, ny]) => nx == ux && ny == uy);
      if (npos) {
        edges[npos] = udist;
        continue;
      }
    }

    dirs.forEach(([dx, dy]) => {
      const vx = ux + dx;
      const vy = uy + dy;
      if (vx < 0 || vx >= map.m || vy < 0 || vy >= map.n) return;
      if (map.map[vx][vy] == "#") return; // no wall
      // console.log("...", vx, vy);
      heap.push([[vx, vy], udist + 1]);
    });
  }

  return edges;
};

const part2 = (map) => {
  const edges = {};
  map.nodes.forEach((npos, i) => {
    edges[npos] = findNodeEdges(map, i);
  });
  console.log(edges);

  return;
  // state: [x, y, dist, path, px, py]
  const heap = [[...map.start, 0, [], -1, -1]];
  let curr;
  let longest = 0;
  let pathMap = {};
  let k = 0;

  while ((curr = heap.pop())) {
    k++;
    let [ux, uy, udist, upath, px, py] = curr;
    if (ux == map.end[0] && uy == map.end[1]) {
      longest = Math.max(longest, udist);
      console.log(udist, longest);
      continue;
    }

    const pathKey = `${ux},${uy}|${upath.join("-")}`;
    if (pathKey in pathMap) continue;
    pathMap[pathKey] = true;
    // console.log(upath.join("-"), ux, uy);

    const nextPath = [...upath];
    const nextNode = map.nodes[_key(ux, uy)];
    if (nextNode != undefined) {
      // can't visit the same node twice
      if (nextPath.indexOf(nextNode) >= 0) continue;
      nextPath.push(nextNode);
    }

    // const _dirs = map.map[ux][uy] in slopes ? [slopes[map.map[ux][uy]]] : dirs;
    dirs.forEach(([dx, dy]) => {
      const vx = ux + dx;
      const vy = uy + dy;
      if (vx < 0 || vx >= map.m || vy < 0 || vy >= map.n) return;
      if (vx == px && vy == py) return; // no back
      if (map.map[vx][vy] == "#") return; // no wall

      // console.log("...", vx, vy);
      heap.push([vx, vy, udist + 1, nextPath, ux, uy]);
    });
  }

  return longest;
};

run(part2, parsedMap);

// 2698 too low
// 5478 too low
// 5634 not right
// 5722 not right
