require("./object");
require("./array");
const read = require("./read");
const run = require("./run");
const ka = require("./karger");
const strs = read("25.a", "\n");

const parseGraph = (strs) => {
  let nodes = [];
  let edges = [];
  let indexes = {};

  const add = (u) => {
    if (!(u in indexes)) {
      indexes[u] = nodes.length;
      nodes.push(u);
    }
    return indexes[u];
  };

  strs.forEach((str) => {
    const [left, right] = str.split(": ");
    const u = add(left);

    right.split(" ").forEach((c) => {
      const v = add(c);
      edges.push([u, v]);
    });
  });
  return { nodes, edges };
};

const graph = parseGraph(strs);

const part1 = ({ nodes, edges }) => {
  // console.log(nodes, edges);

  const V = nodes.length;
  const E = edges.length;
  let g = new ka.Graph(V, E);
  g.edge = edges.map(([u, v]) => new ka.Edge(u, v));

  let k = 0;
  let res;
  let components;
  while (k < 100) {
    k++;
    let r = Math.random();
    [res, components] = ka.kargerMinCut(g);
    if (res == 3) break;
  }

  let list = {};
  components.forEach((c) => {
    if (!(c in list)) list[c] = 0;
    list[c]++;
  });

  return list.values().multiply();
};

run(part1, graph);
