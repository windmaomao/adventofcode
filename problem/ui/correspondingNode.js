function correspondingNode(tree1, tree2, node1) {
  let found = null;

  function visit(n1, n2) {
    if (found) return;
    if (n1 == node1) {
      found = n2;
      return;
    }

    for (let i = 0; i < n1.children.length; i++) {
      visit(n1.children[i], n2.children[i]);
    }
  }

  visit(tree1, tree2);
  return found;
}
