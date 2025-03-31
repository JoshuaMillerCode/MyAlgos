/**
 * LeetCode #605 - Can Place Flowers (Easy)
 * -----------------------------------
 *
 * Problem:
 * Given a flowerbed represented as an array of 0's and 1's (where 0 means empty
 * and 1 means planted) and an integer n, determine if n new flowers can be planted
 * without violating the no-adjacent-flowers rule.
 *
 * Rules:
 * - Flowers cannot be planted in adjacent plots
 * - 0 represents an empty plot
 * - 1 represents a plot with a flower
 * - Must plant exactly n new flowers
 *
 * Example 1:
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: true
 * Explanation: Current state: [1,0,0,0,1]
 *              Can plant 1 flower at position 2: [1,0,1,0,1]
 *
 * Example 2:
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: false
 * Explanation: Current state: [1,0,0,0,1]
 *              Can only plant 1 flower at position 2
 *              Cannot plant 2 flowers without violating the rules
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let spotsAvailable = 0;

  //Count spots
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      continue;
    } else {
      if (!Boolean(flowerbed[i + 1]) && !Boolean(flowerbed[i - 1])) {
        spotsAvailable++;
        flowerbed[i] = 1;
      }
    }
  }

  return n <= spotsAvailable ? true : false;
};
