/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
  if (!root) return [];
  let queue = [root, null],
    current,
    res = [],
    prev;

  while (queue.length) {
    current = queue.shift();
    if (!current) {
      res.push(prev);
      if (queue.length == 0) return res;
      queue.push(null);
    } else {
      const { val, left, right } = current;
      prev = val;

      if (left) queue.push(left);
      if (right) queue.push(right);
    }
  }

  return res;
}
