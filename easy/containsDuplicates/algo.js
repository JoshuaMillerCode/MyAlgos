/**
 * Problem 217: Contains Duplicate
 * Difficulty: Easy
 *
 * Description:
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 *
 * Examples:
 * 1. Input: nums = [1,2,3,1]
 *    Output: true
 *    Explanation: The element 1 appears twice (at indices 0 and 3)
 *
 * 2. Input: nums = [1,2,3,4]
 *    Output: false
 *    Explanation: All elements are distinct
 *
 * 3. Input: nums = [1,1,1,3,3,4,3,2,4,2]
 *    Output: true
 *    Explanation: Multiple elements appear more than once
 */

// Solution 1: Using a hash map to track the frequency of each element
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const track = {};
  let result = false;
  for (let idx in nums) {
    track[nums[idx]] = track[nums[idx]] ? track[nums[idx]] + 1 : 1;
    if (track[nums[idx]] > 1) {
      result = true;
      break;
    }
  }
  return result;
};
