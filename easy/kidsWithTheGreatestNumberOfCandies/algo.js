/**
 * LeetCode #1431 - Kids With the Greatest Number of Candies (Easy)
 * -------------------------------------------------------
 *
 * Problem:
 * Given an array candies where candies[i] represents the number of candies the
 * ith kid has, and an integer extraCandies, return a boolean array indicating
 * whether giving all extraCandies to each kid would make them have the greatest
 * number of candies among all kids.
 *
 * Notes:
 * - Multiple kids can have the greatest number of candies
 * - Each kid gets all extraCandies when checking their potential maximum
 * - Return array should be same length as input array
 *
 * Example 1:
 * Input: candies = [2,3,5,1,3], extraCandies = 3
 * Output: [true,true,true,false,true]
 * Explanation: Adding extraCandies to each kid:
 * - Kid 1: 2 + 3 = 5 candies (equals maximum)
 * - Kid 2: 3 + 3 = 6 candies (new maximum)
 * - Kid 3: 5 + 3 = 8 candies (new maximum)
 * - Kid 4: 1 + 3 = 4 candies (less than maximum)
 * - Kid 5: 3 + 3 = 6 candies (equals current maximum)
 *
 * Example 2:
 * Input: candies = [4,2,1,1,2], extraCandies = 1
 * Output: [true,false,false,false,false]
 * Explanation: Only first kid can reach maximum:
 * - Kid 1 has 4 + 1 = 5 candies (maximum)
 * - No other kid can exceed 5 with just 1 extra candy
 *
 * Example 3:
 * Input: candies = [12,1,12], extraCandies = 10
 * Output: [true,false,true]
 * Explanation:
 * - Kids with 12 candies get to 22 (maximum)
 * - Middle kid gets to 11 (can't reach maximum)
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const outputArr = [];

  for (let i = 0; i < candies.length; i++) {
    const newAmount = candies[i] + extraCandies;
    let isGreatest = true;
    for (let j = 0; j < candies.length; j++) {
      if (newAmount < candies[j]) {
        isGreatest = false;
      }
    }

    outputArr.push(isGreatest);
  }

  return outputArr;
};
