/**
 * LeetCode #55 - Jump Game (Medium)
 * --------------------------------
 *
 * Problem:
 * Given an integer array nums where each element represents your maximum jump length
 * at that position, determine if you can reach the last index starting from index 0.
 *
 * Rules:
 * - You are initially positioned at the first index
 * - At each position, you can jump up to the number indicated at that index
 * - Return true if you can reach the last index, false otherwise
 *
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Example 2:
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its maximum
 * jump length is 0, which makes it impossible to reach the last index.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) {
    return true;
  }

  if (nums[0] === 0) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      continue;
    } else {
      let doesJump = false;
      for (let j = i - 1; j >= 0; j--) {
        const landed = j + nums[j];
        if (landed > i || (landed >= i && i === nums.length - 1)) {
          doesJump = true;
          break;
        }
      }
      if (!doesJump) {
        return false;
      }
      continue;
    }
  }
  return true;
};
