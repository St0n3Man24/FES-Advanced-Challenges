/* COURSE INSTRUCTIONS */

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


/* PERSONAL INSTRUCTIONS */

/* Solution #1 - Instructions */
// Comparing the original string with its reversed version to determine if it's a palindrome by using an IF statement.

/* Solution #1 - Code */
  const palindrome = (str) => {

  };

  module.exports = palindrome;

/* Solution #2 - Instructions */
// Comparing the original string with its reversed version to determine if it's a palindrome by using a helper function (reversedString) to reverse the string. Then, we check if the original string is equal to the reversed strings function.

/* Solution #2 - Code */
  // const palindrome = (str) => {
    // 
  // };

  // module.exports = palindrome;

/* Solution #3 - Instructions */
// Checking if the given string is a palindrome by using the Every method to compare each character with its corresponding character from the end. We are turning the string into an array of characters and then checking if each character matches the character at the mirrored position from the end.
// NOTE: The Every method is inefficient because it performs more checks than necessary. It checks every character, even though we only need to check half of the string to determine if it's a palindrome.

/* Solution #3 - Code */
// const palindrome = (str) => {
  // 
// };

// module.exports = palindrome;

/* Solution #4 - Instructions */
// Iterating through the first half of a string
  // const middle = Math.floor(str.length / 2); and letting i < middle
// Then, comparing each character with its corresponding character from the end or character at the opposite index (i).
  // str[i] represents the character at the current index from the start, and str[str.length - 1 - i] represents the character at the corresponding index from the end.

/* Solution #4 - Code */
// const palindrome = (str) => {
  // 
// };

// module.exports = palindrome;


/* NOTES */

// .split('') - splits the string into an array of characters
// .every(() => { ... }) - this method tests if all elements in an array meet a specific condition/test
// .reverse() - reverses the order of the array
// .join('') - joins the array back into a string
// Math.floor - takes a single number or dynamic numbers as the argument and returns a rounded down whole number/numbers


/* SOLUTIONS */

/* Solution #1 - Code */
// const palindrome = (str) => {
//   const reversedString = str.split('').reverse().join('');
//   if (str === reversedString) {
//     return true;
//   } else {
//     return false;
//   }
// };

  // module.exports = palindrome;

/* Solution #2 - Code */
// const palindrome = (str) => {
//   return str === reversedString(str);
// };

// const reversedString = (str) => {
//   return str.split('').reverse().join('');
// };

// module.exports = palindrome;

/* Solution #3 - Code */
// const palindrome = (str) => {
//   return str.split('').every((char, index) => (
//     char === str[str.length - 1 - index]
//   ))
// };

// module.exports = palindrome;

/* Solution #4 - Code */
// const palindrome = (str) => {
//   const middle = Math.floor(str.length / 2);
//   for (let i = 0; i < middle; i++) {
//     const oppositeIndex = str.length - 1 - i;
//     if (str[i] !== str[oppositeIndex]) {
//       return false;
//     }
//   }
//   return true;
// };

// module.exports = palindrome;