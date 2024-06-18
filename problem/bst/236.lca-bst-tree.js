/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  let res;
  console.log(p);

  function count(node) {
    let { left, right } = node;
    let leftCount = 0,
      rightCount = 0,
      midCount = 0;

    if (left) leftCount = count(left);
    midCount = node == p || node == q ? 1 : 0;
    if (right) rightCount = count(right);

    const total = leftCount + midCount + rightCount;
    if (res === undefined && total == 2) {
      res = node;
    }

    return total;
  }

  count(root);
  return res;
}
