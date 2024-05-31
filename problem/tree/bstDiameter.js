//https://www.algoexpert.io/questions/binary-tree-diameter
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  let dia = 0;

  function depth(node) {
    if (!node) return 0;

    const { left, right } = node;
    const dl = depth(left);
    const dr = depth(right);

    if (dl + dr > dia) {
      dia = dl + dr;
    }

    return Math.max(dl, dr) + 1;
  }

  depth(tree);
  return dia;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.binaryTreeDiameter = binaryTreeDiameter;
