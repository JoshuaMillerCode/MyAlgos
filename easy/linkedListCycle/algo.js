/**
 * LeetCode #141 - Linked List Cycle (Easy)
 * ------------------------------------
 *
 * Problem:
 * Given the head of a linked list, determine if the linked list has a cycle.
 * A cycle exists if any node can be reached again by continuously following
 * the next pointer.
 *
 * Notes:
 * - pos indicates where tail's next pointer connects to (0-indexed)
 * - pos is used internally and is not passed as a parameter
 * - Return true if there is a cycle, false otherwise
 *
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: Cycle exists as tail connects to node at index 1
 *              Path: 3 -> 2 -> 0 -> -4 -> 2 (cycles back)
 *
 * Example 2:
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: Cycle exists as tail connects to node at index 0
 *              Path: 1 -> 2 -> 1 (cycles back)
 *
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: Single node with no cycle (pos = -1 means no connection)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const mem = [];

  let walker = head;
  while (walker) {
    if (mem.includes(walker)) {
      return true;
    }
    mem.push(walker);
    walker = walker.next;
  }

  return false;
};
