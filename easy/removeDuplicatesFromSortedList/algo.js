/**
 * LeetCode #83 - Remove Duplicates from Sorted List (Easy)
 * --------------------------------------------------
 *
 * Problem:
 * Given the head of a sorted linked list, delete all duplicates such that each
 * element appears only once. Return the linked list sorted as well.
 *
 * Requirements:
 * - Input list is already sorted in ascending order
 * - Remove all duplicate nodes
 * - Maintain the sorted order
 * - Return the head of the modified list
 *
 * Example 1:
 * Input: head = [1,1,2]
 * Output: [1,2]
 * Explanation: The list contains two 1's
 *              After removing duplicates: 1->2
 *
 * Example 2:
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 * Explanation: List contains duplicate 1's and 3's
 *              After removing duplicates: 1->2->3
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
var deleteDuplicates = function (head) {
  if (!head) return head;

  let prev = head;
  let walker = head.next;

  while (walker) {
    if (prev.val === walker.val) {
      prev.next = walker.next;
      walker = walker.next;
    } else {
      prev = walker;
      walker = walker.next;
    }
  }

  return head;
};
