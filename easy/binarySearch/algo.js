/**
 * LeetCode #704 - Binary Search (Easy)
 * --------------------------------
 *
 * Problem:
 * Given a sorted array of integers nums and a target value, write a function
 * to search for target in nums. Return the index if found, otherwise return -1.
 *
 * Requirements:
 * - Array is sorted in ascending order
 * - Must implement O(log n) runtime complexity
 * - Return target's index if found, -1 if not found
 *
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: Target value 9 is found at index 4
 *
 * Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: Target value 2 is not present in the array
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target > nums[mid]) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return -1;
};
