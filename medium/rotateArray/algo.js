/**
 * LeetCode #189 - Rotate Array (Medium)
 * -----------------------------------
 *
 * Problem:
 * Given an integer array nums, rotate the array to the right by k steps,
 * where k is non-negative.
 *
 * Requirements:
 * - Rotate array elements to the right by k positions
 * - k is non-negative
 * - Must modify the array in-place
 * - Handle cases where k > array length
 *
 * Example 1:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation: Rotation steps:
 * - After 1 step:  [7,1,2,3,4,5,6]
 * - After 2 steps: [6,7,1,2,3,4,5]
 * - After 3 steps: [5,6,7,1,2,3,4]
 *
 * Example 2:
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 * Explanation: Rotation steps:
 * - After 1 step:  [99,-1,-100,3]
 * - After 2 steps: [3,99,-1,-100]
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k === 0 || nums.length === 1 || nums.length === 0) {
    return;
  }

  if (k > nums.length) {
    k = k % nums.length;
  }

  nums.splice(0, 0, ...nums.splice(nums.length - k));
};
