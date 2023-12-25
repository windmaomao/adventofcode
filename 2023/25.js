require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("25.a", "\n");

const parseGraph = (strs) => {
  let edges = {};
  strs.forEach((str) => {
    const [left, right] = str.split(": ");
    edges[left] = edges[left] || [];
    right.split(" ").forEach((v) => {
      edges[v] = edges[v] || [];
      edges[left].push(v);
      edges[v].push(left);
    });
  });
  return {
    edges,
  };
};

const graph = parseGraph(strs);

const part1 = (graph) => {
  return graph;
};

run(part1, graph);
