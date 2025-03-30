/**
 * LeetCode #121 - Best Time to Buy and Sell Stock (Easy)
 * ---------------------------------------------------
 *
 * Problem:
 * Given an array prices where prices[i] is the price of a given stock on the ith day,
 * find the maximum profit you can achieve by buying and selling one stock.
 *
 * Rules:
 * - Must buy before selling (can't sell before buying)
 * - Can only perform one transaction (buy once, sell once)
 * - Return 0 if no profit is possible
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation:
 * - Buy on day 2 (price = 1)
 * - Sell on day 5 (price = 6)
 * - Maximum profit = 6 - 1 = 5
 *
 * Example 2:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: Prices are decreasing each day, no profit possible
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let cheapest = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < cheapest) {
      cheapest = prices[i];
    }

    const profit = prices[i] - cheapest;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};
