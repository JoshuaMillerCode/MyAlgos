/**
 * LeetCode #136 - Single Number (Easy)
 * ----------------------------------
 *
 * Problem:
 * Given a non-empty array of integers nums where every element appears twice except
 * for one element, find that single element.
 *
 * Requirements:
 * - Must implement solution with linear runtime complexity O(n)
 * - Must use only constant extra space O(1)
 * - Array is non-empty
 * - All elements except one appear exactly twice
 *
 * Example 1:
 * Input: nums = [2,2,1]
 * Output: 1
 * Explanation: 1 appears only once while 2 appears twice.
 *
 * Example 2:
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 * Explanation: 4 is the only element that appears once.
 *
 * Example 3:
 * Input: nums = [1]
 * Output: 1
 * Explanation: Array contains only one element.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const track = {};
  let result;
  for (let i = 0; i < nums.length; i++) {
    track[nums[i]] = track[nums[i]] ? track[nums[i]] + 1 : 1;
  }
  for (let prop in track) {
    if (track[prop] === 1) {
      result = prop;
    }
  }
  return result;
};
