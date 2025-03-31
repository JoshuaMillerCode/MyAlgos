/**
 * LeetCode #383 - Ransom Note (Easy)
 * -------------------------------
 *
 * Problem:
 * Given two strings ransomNote and magazine, determine if ransomNote can be
 * constructed using letters from magazine. Each letter in magazine can only
 * be used once in ransomNote.
 *
 * Rules:
 * - Letters from magazine can only be used once
 * - Case sensitive comparison
 * - Only letters can be used (no numbers or special characters)
 * - Order of letters doesn't matter
 *
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * Explanation: Magazine doesn't contain the required letter 'a'
 *
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * Explanation: Magazine only has one 'a', but note needs two
 *
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 * Explanation: Magazine has two 'a's and one 'b', sufficient for the note
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ransom = {};
  const mag = {};

  for (let char of ransomNote) {
    ransom[char] = ransom[char] ? ransom[char] + 1 : 1;
  }
  for (let char of magazine) {
    mag[char] = mag[char] ? mag[char] + 1 : 1;
  }

  for (let letter in ransom) {
    if (!(letter in mag)) {
      return false;
    }
    if (ransom[letter] > mag[letter]) {
      return false;
    }
  }
  return true;
};
