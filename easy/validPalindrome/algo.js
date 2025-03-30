/**
 * LeetCode #125 - Valid Palindrome (Easy)
 * ------------------------------------
 *
 * Problem:
 * Determine if a string is a palindrome after converting all uppercase letters to
 * lowercase and removing all non-alphanumeric characters. A palindrome reads the
 * same forward and backward.
 *
 * Rules:
 * - Convert all uppercase letters to lowercase
 * - Remove all non-alphanumeric characters (keep only letters and numbers)
 * - Empty strings are considered palindromes
 * - Comparison should ignore spaces and punctuation
 *
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: After cleaning, "amanaplanacanalpanama" is a palindrome
 *
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 * Explanation: After cleaning, "raceacar" is not a palindrome
 *
 * Example 3:
 * Input: s = " "
 * Output: true
 * Explanation: After removing non-alphanumeric chars, becomes empty string ""
 *              Empty strings are considered palindromes
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Remove special characters and spaces
  const formatted = s.replace(/[\W_]+/g, '').toLowerCase();
  // Compare
  return formatted === formatted.split('').reverse().join('');
};
