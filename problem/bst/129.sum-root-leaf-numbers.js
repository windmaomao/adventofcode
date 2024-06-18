function sumNumbers(root) {
  let res = 0;

  function visit(num, node) {
    const { val, left, right } = node;

    const n = num * 10 + val;
    if (!left && !right) {
      res += n;
      return;
    }

    if (left) visit(n, left);
    if (right) visit(n, right);
  }

  visit(0, root);
  return res;
}
