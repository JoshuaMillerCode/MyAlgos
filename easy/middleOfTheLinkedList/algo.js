/**
 * LeetCode #876 - Middle of the Linked List (Easy)
 * --------------------------------------------
 *
 * Problem:
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 *
 * Rules:
 * - For odd length lists, return the exact middle node
 * - For even length lists, return the second of the two middle nodes
 * - The list length will be between 1 and 100 nodes
 *
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: For list of length 5, node with value 3 is the middle node
 *              Return the list starting from this node
 *
 * Example 2:
 * Input: head = [1,2,3,4,5,6]
 * Output: [4,5,6]
 * Explanation: For list of length 6, nodes 3 and 4 are in the middle
 *              Return the list starting from node 4 (second middle node)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  const mem = {};

  let walker = head;
  let idx = 1;
  while (walker) {
    mem[idx] = walker;
    walker = walker.next;
    idx++;
  }
  const memLength = Object.keys(mem).length;

  if (memLength % 2 === 0) {
    return mem[memLength / 2 + 1];
  } else {
    return mem[Math.ceil(memLength / 2)];
  }
};
