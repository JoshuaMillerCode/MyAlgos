/**
 * LeetCode #100 - Same Tree (Easy)
 * ----------------------------
 *
 * Problem:
 * Given the roots of two binary trees p and q, write a function to check if
 * they are the same or not. Two binary trees are considered the same if they
 * are structurally identical and their nodes have the same values.
 *
 * Requirements:
 * - Trees must have identical structure
 * - Corresponding nodes must have the same values
 * - null nodes must match with null nodes
 * - Both empty trees are considered identical
 *
 * Example 1:
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 * Explanation: Trees are identical in both structure and values
 *              Tree p: 1       Tree q: 1
 *                    /  \           /  \
 *                   2    3         2    3
 *
 * Example 2:
 * Input: p = [1,2], q = [1,null,2]
 * Output: false
 * Explanation: Different structure despite same values
 *              Tree p: 1       Tree q: 1
 *                    /             \
 *                   2               2
 *
 * Example 3:
 * Input: p = [1,2,1], q = [1,1,2]
 * Output: false
 * Explanation: Same values but in different positions
 *              Tree p: 1       Tree q: 1
 *                    /  \           /  \
 *                   2    1         1    2
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;

  if (!p && q) return false;

  if (!q && p) return false;

  if (p.val === q.val) {
    const left = isSameTree(p.left, q.left);
    const right = isSameTree(p.right, q.right);
    return left && right;
  } else {
    return false;
  }
};
