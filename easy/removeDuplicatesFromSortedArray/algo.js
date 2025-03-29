/**
 * LeetCode #26 - Remove Duplicates from Sorted Array (Easy)
 * ------------------------------------------------------
 *
 * Problem:
 * Given an integer array nums sorted in non-decreasing order, remove duplicates in-place
 * such that each unique element appears only once. Maintain the relative order of elements
 * and return the number of unique elements.
 *
 * Requirements:
 * - Modify the input array nums in-place
 * - First k elements should contain unique elements in their original order
 * - Return k (the number of unique elements)
 * - Elements beyond index k-1 can be any value
 *
 * Judge's Test Process:
 * 1. The judge creates: int[] nums = [...] // Input array
 * 2. Your function is called: k = removeDuplicates(nums)
 * 3. Judge verifies:
 *    - k matches the expected length
 *    - First k elements match the expected unique elements
 *
 * Example 1:
 * Input: nums = [1,1,2]
 * Output: 2
 * Final array: nums = [1,2,_]
 * Explanation: The first two elements are unique values 1 and 2.
 *
 * Example 2:
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5
 * Final array: nums = [0,1,2,3,4,_,_,_,_,_]
 * Explanation: The first five elements are the unique values 0,1,2,3,4.
 */
