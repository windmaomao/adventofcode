function treeToDoublyList(root) {
  let prev, head;

  function visit(node) {
    if (!node) return;
    let { left, right } = node;

    if (left) visit(left);

    if (!head) head = node;
    if (prev) {
      node.left = prev;
      prev.right = node;
    }
    prev = node;

    if (right) visit(right);
  }

  visit(root);
  if (prev) {
    prev.right = head;
    head.left = prev;
  }
  return head;
}
