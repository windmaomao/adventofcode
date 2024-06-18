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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function rangeSumBST(root, low, high) {
  if (high < low) return 0;

  let { val, left, right } = root;
  let res = 0;
  if (val >= low && val <= high) res = val;

  if (low <= val && left) {
    res += rangeSumBST(left, low, Math.min(val, high));
  }
  if (high > val && right) {
    res += rangeSumBST(right, Math.max(val + 1, low), high);
  }

  return res;
}
