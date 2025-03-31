/**
 * LeetCode #21 - Merge Two Sorted Lists (Easy)
 * -----------------------------------------
 *
 * Problem:
 * Given the heads of two sorted linked lists list1 and list2, merge them into
 * one sorted list by splicing together the nodes of the first two lists.
 *
 * Requirements:
 * - Both input lists are sorted in non-decreasing order
 * - Must reuse the existing nodes (splice together)
 * - Return the head of the merged linked list
 *
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * Explanation: Merges both lists while maintaining sorted order
 *
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 * Explanation: Both input lists are empty, resulting in empty output
 *
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 * Explanation: First list empty, return second list unchanged
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let head = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      dummy.next = list1;
      list1 = list1.next;
    } else {
      dummy.next = list2;
      list2 = list2.next;
    }
    dummy = dummy.next;
  }

  if (!list1) {
    dummy.next = list2;
  } else {
    dummy.next = list1;
  }
  return head.next;
};
