/**
 * LeetCode #283 - Move Zeroes (Easy)
 * ---------------------------------
 *
 * Problem:
 * Given an integer array nums, move all zeros to the end of it while maintaining
 * the relative order of the non-zero elements.
 *
 * Requirements:
 * - Must modify the array in-place
 * - Cannot make a copy of the array
 * - Maintain relative order of non-zero elements
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Explanation: All non-zero elements maintain their order while zeros are moved to the end
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 * Explanation: Array with single zero remains unchanged
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
    i++;
  }
  console.log(nums);
};
