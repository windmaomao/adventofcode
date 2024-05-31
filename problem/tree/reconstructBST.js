//https://www.algoexpert.io/questions/reconstruct-bst
// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(a) {
  function visit(node, low, high) {
    if (k == a.length) return;
    if (a[k] < node.value && a[k] >= low) {
      node.left = new BST(a[k++]);
      visit(node.left, low, node.value);
    }
    if (a[k] >= node.value && a[k] < high) {
      node.right = new BST(a[k++]);
      visit(node.right, node.value, high);
    }
  }

  const root = new BST(a[0]);
  let k = 1;
  visit(root, -Infinity, Infinity);
  return root;
}

// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;
