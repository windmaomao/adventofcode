function diameterOfBinaryTree(root) {
  let res = 0;

  function maxLength(node) {
    const { left, right } = node;
    if (!left && !right) return 0;

    let maxLeft = left ? maxLength(left) + 1 : 0;
    let maxRight = right ? maxLength(right) + 1 : 0;
    const m = maxLeft + maxRight;
    if (m > res) res = m;

    return Math.max(maxLeft, maxRight);
  }

  maxLength(root);
  return res;
}
