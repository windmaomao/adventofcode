// https://www.algoexpert.io/questions/longest-most-frequent-prefix
const newTrieNode = (key) => ({ nodes: {}, key, count: 0 });
function createTrie() {
  const root = newTrieNode("");

  const add = (str, node = root) => {
    const c = str[0];
    let { nodes } = node;
    if (!(c in nodes)) {
      nodes[c] = newTrieNode(c);
    }
    nodes[c].count++;

    if (str.length > 1) {
      add(str.slice(1), nodes[c]);
    }
  };

  function freqPrefix() {
    const prefixes = [];

    for (let k in root.nodes) {
      let res = k;
      const first = root.nodes[k];
      const max = first.count;
      let found = first;

      while (found) {
        const { nodes } = found;
        found = null;
        for (c in nodes) {
          if (nodes[c].count === max) {
            res += c;
            found = nodes[c];
            break;
          }
        }
      }

      prefixes.push([max, res]);
    }

    return prefixes.sort((a, b) => {
      if (a[0] != b[0]) {
        return b[0] - a[0];
      }
      return b[1].length - a[1].length;
    });
  }

  return {
    add,
    root,
    freqPrefix,
  };
}

const strings = ["abc1", "abc2", "xyzk1", "xyzk2"];
const t = createTrie();
strings.forEach((str) => t.add(str));
console.log(t.root.nodes);
console.log(t.freqPrefix());
