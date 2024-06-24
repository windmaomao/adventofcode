/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
function accountsMerge(accounts) {
  const m = new Map(),
    emails = [];
  for (let i = 0; i < accounts.length; i++) {
    const [name, ...rest] = accounts[i];
    for (let j = 0; j < rest.length; j++) {
      if (!m.get(rest[j])) {
        let k = emails.length;
        emails.push(rest[j]);
        m.set(rest[j], { index: k, nodes: [], visited: false });
      }
    }
  }

  for (let i = 0; i < accounts.length; i++) {
    const [name, first, ...rest] = accounts[i];
    const from = m.get(first);
    for (let j = 0; j < rest.length; j++) {
      const to = m.get(rest[j]);
      from.nodes.push(to.index);
      to.nodes.push(from.index);
    }
  }

  function visit(node, arr) {
    if (node.visited) return;
    node.visited = true;
    arr.push(emails[node.index]);
    node.nodes.forEach((i) => {
      const next = m.get(emails[i]);
      visit(next, arr);
    });
  }

  const res = [];
  for (let i = 0; i < accounts.length; i++) {
    const [name, first, ...rest] = accounts[i];
    const head = m.get(first);
    const list = [];
    if (!head.visited) {
      visit(head, list);
      list.sort();
      res.push([name, ...list]);
    }
  }

  return res;
}
