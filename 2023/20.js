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
  nodes.output = { type: "" };

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

  while ((curr = heap.shift()) && k < 9) {
    k++;
    const [node, prevSignal, prevNode, values] = curr;
    console.log(prevNode, prevSignal ? "high" : "low", node, values);

    if (node == "output") {
      output = prevSignal;
      continue;
    }

    const push = (a) => {
      console.log("p", a[2], a[1], a[0]);
      heap.push(a);
    };

    // broadcast
    if (network.nodes[node.type] == "") {
      let signal = prevSignal;
      network.edges[node].forEach((nextNode) => {
        let nextValues = values.clone();
        push([nextNode, signal, node, nextValues]);
      });
    } else {
      //                         v
      // prevNode -prevSignal-> node -signal-> nextNode
      let signal;
      if (network.nodes[node.type] == "%") {
        signal = values[node];
      } else {
        signal = values[node].values().every((v) => v) ? 0 : 1;
      }
      network.edges[node].forEach((nextNode) => {
        let nextValues = values.clone();
        switch (network.nodes[nextNode].type) {
          case "%":
            if (signal) return;
            nextValues[nextNode] = 1 - nextValues[nextNode];
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
  }

  return 0;
};

run(part1, network);
