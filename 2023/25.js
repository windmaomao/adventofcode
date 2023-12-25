require("./object");
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
  const V = nodes.length;
  const E = edges.length;
  let g = new ka.Graph(V, E);
  // g.edge = edges.map(([u, v]) => new ka.Edge(u, v));

  // add edge 0-1
  // graph.edge[0] = new Edge(0, 1);
  return g;
};

run(part1, graph);
