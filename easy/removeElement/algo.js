/**
 * LeetCode #27 - Remove Element (Easy)
 * ------------------------------
 *
 * Problem:
 * Given an integer array nums and an integer val, remove all occurrences of val
 * in nums in-place and return the number of elements remaining. The relative
 * order of elements may be changed.
 *
 * Requirements:
 * - Modify the array in-place
 * - First k elements should contain numbers not equal to val
 * - Return k (count of elements not equal to val)
 * - Elements beyond index k-1 can be any value
 * - Solution will be tested with custom judge code
 *
 * Judge's Test Process:
 * 1. Call removeElement(nums, val) to get k
 * 2. Verify k matches expected length
 * 3. Sort first k elements
 * 4. Compare with expected result
 *
 * Example 1:
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 * Explanation:
 * - Remove all 3's from array
 * - k = 2 (two elements remain)
 * - First k elements are 2,2
 * - Elements after index 1 don't matter (_)
 *
 * Example 2:
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2
 * Output: 5, nums = [0,1,4,0,3,_,_,_]
 * Explanation:
 * - Remove all 2's from array
 * - k = 5 (five elements remain)
 * - First k elements contain [0,1,4,0,3] (order doesn't matter)
 * - Elements after index 4 don't matter (_)
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  const track = {};
  for (let i = 0; i < nums.length; i++) {
    if (val === nums[i]) {
      track[i] = nums[i];
      k++;
    }
  }

  for (const [key, _] of Object.entries(track)) {
    nums[key] = '_';
  }

  nums = nums.sort();
  return nums.length - k;
};
