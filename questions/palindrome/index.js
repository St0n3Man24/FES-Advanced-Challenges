/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

// Comparing the original string with its reversed version to determine if it's a palindrome by using an IF statement.
  // const palindrome = (str) => {
  //   const reversedString = str.split('').reverse().join('');
  //   if (str === reversedString) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

// Comparing the original string with its reversed version to determine if it's a palindrome by using a helper function (reversedString) to reverse the string. Then, we check if the original string is equal to the reversed strings function.
  // const palindrome = (str) => {
  //   return str === reversedString(str);
  // };

  // const reversedString = (str) => {
  //   return str.split('').reverse().join('');
  // };

// Checking if the given string is a palindrome by using the Every method to compare each character with its corresponding character from the end. We are turning the string into an array of characters and then checking if each character matches the character at the mirrored position from the end.
// NOTE: The Every method is inefficient because it performs more checks than necessary. It checks every character, even though we only need to check half of the string to determine if it's a palindrome.
  // const palindrome = (str) => {
  //   return str.split('').every((char, index) => (
  //     char === str[str.length - 1 - index]
  //   ))
  // };

// Iterating through the first half of a string
  // const middle = Math.floor(str.length / 2); and letting i < middle
// Then, comparing each character with its corresponding character from the end or character at the opposite index (i).
  // str[i] represents the character at the current index from the start, and str[str.length - 1 - i] represents the character at the corresponding index from the end.
const palindrome = (str) => {
  const middle = Math.floor(str.length / 2);
  for (let i = 0; i < middle; i++) {
    const oppositeIndex = str.length - 1 - i;
    if (str[i] !== str[oppositeIndex]) {
      return false;
    }
  }
  return true;
};

module.exports = palindrome;
