require("./object");
const read = require("./read");
const run = require("./run");
const strs = read("20.a", "\n");

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
  nodes.broadcaster = { type: "" };

  const values = {};
  Object.keys(nodes).forEach((node) => {
    switch (nodes[node].type) {
      case "%":
        values[node] = 0;
        break;
      case "&":
        values[node] = {};
        Object.keys(nodes).forEach((u) => {
          if (edges[u].includes(node)) {
            values[node][u] = 0;
          }
        });
        break;
    }
  });

  return { edges, nodes, values };
};

const network = parseNetwork(strs);

const part1 = (network) => {
  const initialValues = network.values;
  const start = ["broadcaster", 0, "button", initialValues.clone()];
  const heap = [start];

  let curr, output;
  let k = 0;

  while ((curr = heap.shift()) && k < 8) {
    k++;
    const [node, prevSignal, prevNode, values] = curr;
    console.log(prevNode, prevSignal ? "high" : "low", node, values);

    if (network.nodes[node].type == "%" && prevSignal) continue;

    if (node == "output") {
      output = prevSignal;
      continue;
    }

    const push = (a) => {
      console.log("...", a[2], a[1] ? "high" : "low", a[0], a[3]);
      heap.push(a);
    };

    //                         v
    // prevNode -prevSignal-> node -signal-> nextNode
    let signal;
    switch (network.nodes[node].type) {
      case "%":
        signal = values[node];
        break;
      case "&":
        signal = values[node].values().every((v) => v) ? 0 : 1;
        break;
      default:
        signal = prevSignal;
    }
    network.edges[node].forEach((nextNode) => {
      let nextValues = values.clone();
      switch (network.nodes[nextNode].type) {
        case "%":
          if (!signal) {
            nextValues[nextNode] = 1 - nextValues[nextNode];
          }
          break;
        case "&":
          nextValues[nextNode][node] = signal;
          break;
        case "output":
          break;
      }
      push([nextNode, signal, node, nextValues]);
    });
  }

  return k;
};

run(part1, network);
