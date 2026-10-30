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
  // 1. Create a variable that holds the reversed string
    // const reverseString = str.split('').reverse().join('');
  // 2. Create an if statement that when the string (str) is equal to the reversed string (reverseString) to return true otherwise return false
    // if (str === reverseString) { return true } else { return false }

/* Solution #1 - Code */
  // const palindrome = (str) => {
  //   const reverseString = str.split('').reverse().join('');
  //   if (str === reverseString) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  // module.exports = palindrome;

/* Solution #2 - Instructions */
// Comparing the original string with its reversed version to determine if it's a palindrome by using a helper function (reversedString) to reverse the string. Then, we check if the original string is equal to the reversed strings function.
  // 1. Create a function for the reversed string that targets the string (str)
    // const reversedString = (str) => { ... }
  // 2. Within the reversedString function, return the reversed string
    // return str. split('').reverse().join('');
  // 3. Within the palindrome function, return the string (str) if it's equal to the reversedString function. NOTE: since the reversedString function is targeting the string (str), make sure to pass that into the reversedString paramter
    // return str === reversedString(str);

/* Solution #2 - Code */
  // const palindrome = (str) => {
  //   return str === reversedString(str);
  // };

  // const reversedString = (str) => {
  //   return str.split('').reverse().join('');
  // };

  // module.exports = palindrome;

/* Solution #3 - Instructions */
// Checking if the given string is a palindrome by using the Every method to compare each character with its corresponding character from the end. We are turning the string into an array of characters and then checking if each character matches the character at the mirrored position from the end.
// NOTE: The Every method is inefficient because it performs more checks than necessary. It checks every character, even though we only need to check half of the string to determine if it's a palindrome.

/* Solution #3 - Code */
// const palindrome = (str) => {
  
// };

// module.exports = palindrome;

/* Solution #4 - Instructions */
// 1. Create a variable that targets the first half of the strings length. NOTE: we check half the string length because for a string to be a palindrome the first half of the string must match the second half. 
  // const firstHalf = Math.floor(str.length / 2);
// 2. Create a FOR loop that terating through the first half of a string
  // for (i = 0; i < firstHalf; i++) { ... }
// 3. Create a variable inside the loop that calculates the opposite character/index from the current one you're on.
  // const oppositeIndex = str.length - 1 - i;
  // Ex: if i = 0, str.length = 5, str = 'Hello'; then the oppositeIndex would be 5 - 1 - 0 = 4 which indicates that 'H' (i = 0) is opposite of 'o' (i = 4).
// 4. Next, create an IF statement so that if the current string index (str[i]) is not equal to the corresponding string opposite index (str[oppositeIndex]), then return false, otherwise return true.
  // if (str[i] !== str[oppositeIndex] { return false })
// 5. The loop continues until it has checked all the pairs of characters. If a pair does not match, the loop hits the false statment (return false) and ends the function. If all pairs match, the loop completes without hitting the false statment (return false). Once this happens, then the function can hit the true statment (return true) at the end which indicates that the string is a palindrome.
  // const palindrome = (str) => { const firstHalf; for (...) {...} return true; }

/* Solution #4 - Code */
// const palindrome = (str) => {
//   const firstHalf = Math.floor(str.length / 2);
//   for (let i = 0; i < firstHalf; i++) {
//     const oppositeIndex = str.length - 1 - i;
//     if (str[i] !== str[oppositeIndex]) { 
//       return false;
//     }
//   }
//   return true;
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