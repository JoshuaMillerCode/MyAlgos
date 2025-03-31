/**
 * LeetCode #345 - Reverse Vowels of a String (Easy)
 * --------------------------------------------
 *
 * Problem:
 * Given a string s, reverse only the vowels in the string while keeping all other
 * characters in their original positions.
 *
 * Rules:
 * - Vowels are 'a', 'e', 'i', 'o', and 'u'
 * - Both lowercase and uppercase vowels should be considered
 * - Non-vowel characters maintain their positions
 * - A vowel can appear multiple times
 *
 * Example 1:
 * Input: s = "IceCreAm"
 * Output: "AceCreIm"
 * Explanation: Vowels in string: ['I', 'e', 'e', 'A']
 *              After reversing: ['A', 'e', 'e', 'I']
 *              Final string with reversed vowels: "AceCreIm"
 *
 * Example 2:
 * Input: s = "leetcode"
 * Output: "leotcede"
 * Explanation: Vowels in string: ['e', 'e', 'o', 'e']
 *              After reversing: ['e', 'o', 'e', 'e']
 *              Final string with reversed vowels: "leotcede"
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = 'aeiouAEIOU';
  const vwls = [];
  const idxs = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vwls.push(s[i]);
      idxs.push(i);
    }
  }

  const reversed = idxs.reverse();
  let strArr = s.split('');
  for (let i = 0; i < vwls.length; i++) {
    strArr[reversed[i]] = vwls[i];
  }

  return strArr.join('');
};
