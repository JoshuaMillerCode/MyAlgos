/**
 * LeetCode #20 - Valid Parentheses (Easy)
 * -------------------------------------
 *
 * Problem:
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * Rules:
 * - Open brackets must be closed by the same type of brackets
 * - Open brackets must be closed in the correct order
 * - Every close bracket has a corresponding open bracket of the same type
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 * Explanation: Single pair of matching parentheses
 *
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 * Explanation: Multiple pairs of brackets, all properly matched
 *
 * Example 3:
 * Input: s = "(]"
 * Output: false
 * Explanation: Mismatched brackets - opening '(' with closing ']'
 *
 * Example 4:
 * Input: s = "([)]"
 * Output: false
 * Explanation: Brackets must be closed in the correct order
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const symbols = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const vals = Object.values(symbols);
  const queue = [];

  for (let i = 0; i < s.length; i++) {
    if (vals.includes(s[i]) && symbols[queue[queue.length - 1]] !== s[i]) {
      return false;
    }

    if (symbols.hasOwnProperty(s[i])) {
      queue.push(s[i]);
    }

    if (symbols[queue[queue.length - 1]] === s[i]) {
      queue.pop();
    }
  }

  return !queue.length;
};
