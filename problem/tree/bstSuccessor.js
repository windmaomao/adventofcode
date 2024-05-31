//https://www.algoexpert.io/questions/find-successor
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  let found = false,
    suc;

  function visit(current) {
    if (suc) return;
    if (!current) return;

    visit(current.left);
    if (found && !suc) suc = current;
    if (current == node) found = true;
    visit(current.right);
  }

  visit(tree);
  return suc;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;
