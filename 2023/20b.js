require("./object");
const read = require("./read");
const run = require("./run");
const strs = read("20", "\n");

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
      nodes[name] = { name, type };
    }
    edges[name] = to.split(", ");
  }
  nodes.broadcaster = { type: "" };

  Object.keys(nodes).forEach((node) => {
    switch (nodes[node].type) {
      case "%":
        nodes[node].value = 0;
        break;
      case "&":
        nodes[node].values = {};
        Object.keys(nodes).forEach((u) => {
          if (edges[u].includes(node)) {
            nodes[node].values[u] = 0;
          }
        });
        break;
    }
  });

  return { edges, nodes };
};

const network = parseNetwork(strs);
// console.log(network.nodes);

const pushButton = (network, final, log = false) => {
  const start = ["broadcaster", 0, "button"];
  const heap = [start];

  let curr,
    pulses = [0, 0];
  let k = 0;
  let done = false;

  while ((curr = heap.shift()) && k < 1111113) {
    k++;
    const [currName, prevSignal, prevName] = curr;
    pulses[prevSignal]++;
    if (log) console.log(prevName, prevSignal ? "high" : "low", currName);

    if (!(currName in network.nodes)) continue;

    const node = network.nodes[currName];

    if (currName == "kh" && node.values[final]) {
      console.log(node.values);
      done = true;
      break;
    }

    if (node.type == "%" && prevSignal) continue;

    switch (node.type) {
      case "%":
        node.value = 1 - node.value;
        node.signal = node.value;
        break;
      case "&":
        node.values[prevName] = prevSignal;
        node.signal = node.values.values().every((v) => v) ? 0 : 1;
        break;
      default:
        node.signal = prevSignal;
    }
    // console.log("...", JSON.stringify(node));

    network.edges[currName].forEach((nextName) => {
      heap.push([nextName, node.signal, currName]);
    });
  }

  if (log) console.log("k", k);
  return done;
};

const part2 = () => {
  // perform lcm of all the numbers
  return ["pv", "qh", "xm", "hz"].map((name) => {
    const network = parseNetwork(strs);
    let k = 0;
    for (let i = 0; i < 20000; i++) {
      if (pushButton(network, name)) {
        k = i + 1;
        break;
      }
    }
    return k;
  });
};

run(part2);
