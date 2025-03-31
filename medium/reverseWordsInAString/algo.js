/**
 * LeetCode #151 - Reverse Words in a String (Medium)
 * --------------------------------------------
 *
 * Problem:
 * Given an input string s, reverse the order of the words. A word is defined as
 * a sequence of non-space characters. Return the words in reverse order
 * concatenated by a single space.
 *
 * Rules:
 * - Words are separated by at least one space
 * - Remove leading and trailing spaces
 * - Reduce multiple spaces between words to a single space
 * - A word is a sequence of non-space characters
 * - Return words in reverse order with single spaces between them
 *
 * Example 1:
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 * Explanation: Simple reversal with single spaces between words
 *
 * Example 2:
 * Input: s = "  hello world  "
 * Output: "world hello"
 * Explanation: Remove leading/trailing spaces and reverse words
 *              Original: "  hello world  " (with spaces)
 *              Cleaned:  "hello world"
 *              Reversed: "world hello"
 *
 * Example 3:
 * Input: s = "a good   example"
 * Output: "example good a"
 * Explanation: Multiple spaces between words are reduced to single spaces
 *              Original: "a good   example" (3 spaces)
 *              Cleaned:  "a good example"
 *              Reversed: "example good a"
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.split(/\s+/).reverse().join(' ').trim();
};
