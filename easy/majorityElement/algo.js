/**
 * LeetCode #169 - Majority Element (Easy)
 * ---------------------------------
 *
 * Problem:
 * Given an array nums of size n, return the majority element. The majority
 * element is the element that appears more than ⌊n/2⌋ times in the array.
 *
 * Assumptions:
 * - The majority element always exists in the array
 * - Array is non-empty
 * - An element appearing > n/2 times is guaranteed
 *
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * Explanation: Array length is 3, so majority needs > 1 occurrence
 *              Element 3 appears twice (> 3/2), making it the majority
 *
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 * Explanation: Array length is 7, so majority needs > 3 occurrences
 *              Element 2 appears 4 times (> 7/2), making it the majority
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let freqCount = {};

  nums.forEach((num) => {
    freqCount[num] = freqCount[num] ? freqCount[num] + 1 : 1;
  });
  let ret;
  let max = 0;
  for (let num in freqCount) {
    if (freqCount[num] > max) {
      ret = num;
      max = freqCount[num];
    }
  }
  return ret;
};
