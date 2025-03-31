/**
 * LeetCode #1768 - Merge Strings Alternately (Easy)
 * ------------------------------------------
 *
 * Problem:
 * Given two strings word1 and word2, merge them by adding letters in alternating
 * order, starting with word1. If one string is longer than the other, append
 * the remaining letters to the end of the merged string.
 *
 * Rules:
 * - Start with first character from word1
 * - Alternate between word1 and word2 characters
 * - Append remaining characters if strings have different lengths
 * - Maintain original character order within each word
 *
 * Example 1:
 * Input: word1 = "abc", word2 = "pqr"
 * Output: "apbqcr"
 * Explanation: Merging process:
 * word1:  a   b   c
 * word2:    p   q   r
 * merged: a p b q c r
 *
 * Example 2:
 * Input: word1 = "ab", word2 = "pqrs"
 * Output: "apbqrs"
 * Explanation: word2 is longer, append remaining "rs"
 * word1:  a   b
 * word2:    p   q   r   s
 * merged: a p b q r s
 *
 * Example 3:
 * Input: word1 = "abcd", word2 = "pq"
 * Output: "apbqcd"
 * Explanation: word1 is longer, append remaining "cd"
 * word1:  a   b   c   d
 * word2:    p   q
 * merged: a p b q c d
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let outputStr = '';

  for (
    let i = 0;
    i < (word1.length > word2.length ? word1.length : word2.length);
    i++
  ) {
    if (word1[i]) outputStr += word1[i];

    if (word2[i]) outputStr += word2[i];
  }
  return outputStr;
};
