// https://www.algoexpert.io/questions/shortest-unique-prefixes
const newTrieNode = (key) => ({ nodes: {}, key, value: -1 });
function createTrie() {
  const root = newTrieNode("");

  const add = (str, value, node = root) => {
    const c = str[0];
    let { nodes } = node;
    if (!(c in nodes)) {
      nodes[c] = newTrieNode(c);
    }

    if (str.length > 1) {
      add(str.slice(1), value, nodes[c]);
    } else {
      nodes[c].value = value;
    }
  };

  return { add, root };
}

function shortestUniquePrefixes(strings) {
  const t = createTrie();
  strings.forEach((s, i) => {
    t.add(s, i);
  });
  const words = new Array(strings.length).fill("");

  function visit(current, word) {
    const { nodes, value, key } = current;
    const len = Object.keys(nodes).length;

    if (value >= 0) {
      if (len) {
        const parts = word.split("|");
        words[value] = parts.join("");
      } else {
        const parts = word.split("|");
        words[value] = parts.slice(0, -1).join("") + parts.slice(-1)[0][0];
      }
    }

    let nextWord = word;
    if (value >= 0 || len > 1) nextWord += "|";

    for (c in nodes) {
      visit(nodes[c], nextWord + c);
    }
  }

  visit(t.root, "");
  console.log(t.root);
  return words;
}

//shortestUniquePrefixes(['algoexpert', 'algorithm'])
console.log(
  shortestUniquePrefixes([
    "hello",
    "world",
    "he",
    "foo",
    "worldly",
    "food",
    "algoexpert",
  ])
);
//console.log(shortestUniquePrefixes(['foo', 'food', 'foods', 'foodie']))
