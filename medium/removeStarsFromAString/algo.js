/**
 * LeetCode #2390 - Removing Stars From a String (Medium)
 * ----------------------------------------------
 *
 * Problem:
 * Given a string s containing stars (*), remove each star and the closest
 * non-star character to its left. Return the resulting string after all stars
 * have been removed.
 *
 * Rules:
 * - For each star (*), remove:
 *   1. The star itself
 *   2. The closest non-star character to its left
 * - Process stars from left to right
 * - The operation is always possible (guaranteed by input)
 * - The resulting string will be unique
 *
 * Example 1:
 * Input: s = "leet**cod*e"
 * Output: "lecoe"
 * Explanation: Processing left to right:
 * 1. "leet**cod*e" -> "lee*cod*e"  (remove 't' and first *)
 * 2. "lee*cod*e"   -> "lecod*e"    (remove 'e' and second *)
 * 3. "lecod*e"     -> "lecoe"      (remove 'd' and last *)
 * Final result: "lecoe"
 *
 * Example 2:
 * Input: s = "erase*****"
 * Output: ""
 * Explanation: Processing left to right:
 * 1. "erase*****" -> "eras****"  (remove 'e' and first *)
 * 2. "eras****"   -> "era***"    (remove 's' and second *)
 * 3. "era***"     -> "er**"      (remove 'a' and third *)
 * 4. "er**"       -> "e*"        (remove 'r' and fourth *)
 * 5. "e*"         -> ""          (remove 'e' and last *)
 * All characters are removed, resulting in empty string
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }

  return result.join('');
};
