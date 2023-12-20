require("./array");
const read = require("./read");
const run = require("./run");
const strs = read("20.b", "\n");

const parseNetwork = (strs) => {
  const edges = {};
  const nodes = {};
  for (const str of strs) {
    const [from, to] = str.split(" -> ");
    let name, type;
    if (from == "broadcaster") {
      name = from;
    } else {
      type = from.slice(0, 1);
      name = from.slice(1);
      nodes[name] = { type };
    }
    edges[name] = to.split(", ");
  }

  const values = {};
  Object.keys(nodes).forEach((node) => {
    switch (nodes[node].type) {
      case "%":
        values[node] = 0;
        break;
      case "&":
        values[node] = [];
        nodes[node].senders = [];
        Object.keys(nodes).forEach((u) => {
          if (edges[u].includes(node)) {
            nodes[node].senders.push(u);
            values[node].push(0);
          }
        });
        break;
    }
  });

  return { edges, nodes, values };
};

const network = parseNetwork(strs);

const part1 = (network) => {
  console.log(network.nodes);
  return network;
};

run(part1, network);
