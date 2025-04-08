/**
 * LeetCode #88 - Merge Sorted Array (Easy)
 * ------------------------------------
 *
 * Problem:
 * Given two integer arrays nums1 and nums2 sorted in non-decreasing order, and two
 * integers m and n representing their lengths, merge nums2 into nums1 as one sorted array.
 *
 * Requirements:
 * - Arrays nums1 and nums2 are sorted in non-decreasing order
 * - nums1 has a length of m + n with last n elements set to 0
 * - nums2 has a length of n
 * - Merge must be done in-place (modify nums1 directly)
 * - Final array must be sorted in non-decreasing order
 *
 * Example 1:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation:
 * - Initial arrays: nums1 = [1,2,3,_,_,_], nums2 = [2,5,6]
 * - Merge nums2 into nums1 while maintaining sort order
 * - Final array: [1,2,2,3,5,6]
 *
 * Example 2:
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 * Explanation:
 * - nums2 is empty, nums1 remains unchanged
 *
 * Example 3:
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 * Explanation:
 * - nums1 is empty (m = 0), copy nums2 into nums1
 * - Final array: [1]
 *
 * Note:
 * The 0's at the end of nums1 are placeholders to accommodate the merged result.
 * When m = 0, nums1 is effectively empty despite having placeholder 0's.
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);

  nums1.sort((a, b) => a - b);
};
