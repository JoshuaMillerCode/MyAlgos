/**
 * LeetCode #1 - Two Sum (Easy)
 * ---------------------------
 *
 * Problem:
 * Given an array of integers nums and an integer target, find two numbers in the array
 * that add up to the target and return their indices.
 *
 * Rules:
 * - Each input has exactly one solution
 * - You may not use the same element twice
 * - You can return the answer in any order
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const track = {};
  const idxs = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (track.hasOwnProperty(diff)) {
      result.push(i, idxs[diff]);
    } else {
      track[nums[i]] = diff;
      idxs[nums[i]] = i;
    }
  }
  return result;
};
