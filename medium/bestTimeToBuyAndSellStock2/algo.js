/**
 * LeetCode #122 - Best Time to Buy and Sell Stock II (Medium)
 * --------------------------------------------------------
 *
 * Problem:
 * Given an integer array prices where prices[i] is the price of a given stock
 * on the ith day, find and return the maximum profit you can achieve.
 *
 * Rules:
 * - You may buy and/or sell the stock on each day
 * - You can only hold at most one share at any time
 * - You can buy and sell on the same day
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 * Explanation:
 * - Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 4
 * - Buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 3
 * - Total profit = 4 + 3 = 7
 *
 * Example 2:
 * Input: prices = [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 4
 *
 * Example 3:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: No profitable trades possible, maximum profit is 0
 */

// 122. Best Time to Buy and Sell Stock II
// Solved
// Medium
// Topics
// Companies
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let hold = -1;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1] && hold === -1) {
      hold = prices[i];
    } else {
      if (hold !== -1 && prices[i + 1] - hold < prices[i] - hold) {
        profit += prices[i] - hold;
        hold = -1;
      } else {
        if (i === prices.length - 1 && hold !== -1) {
          profit += prices[i] - hold;
          hold = -1;
        }
      }
    }
  }
  return profit;
};
