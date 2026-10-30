/* COURSE INSTRUCTIONS */

/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */


/* PERSONAL INSTRUCTIONS */

/* Solution #1 - Instructions */
// How to use the Map object to create a character map for anagrams and compare two strings while ignoring spaces and case sensitivity and using reusable code:
  // 1. Create a character map for each string using the Map object.
  // 2. Compare the sizes of the two character maps. If they are not equal, return false. If they are equal, proceed to step 3.
  // 3. Iterate over the entries of one character map and check if the corresponding character exists in the other map with the same count. If not, return false.
  // 4. If all characters match, return true.

/* Solution #1 - Code */
const anagrams = (strA, strB) => {
  
};

module.exports = anagrams;

/* Solution #2 - Instructions */
// How to do the same as above but reduce the amount of code:
  // 1. In one line of code:
    // set both strings to lower case
    // remove all the spaces
    // split the string into an array of characters
    // sort the strings so each character is in alphabetical order
    // join the sorted array of characters back into a string
  // 2. Since this code is used for both strings, create a reusable function that takes a string (str) as an argument and returns the cleaned string code
  // 3. return a comparison of the cleaned strings function passing in both strings as arguments (strA and strB) to check if they are equal

/* Solution #2 - Code */
// const anagrams = (strA, strB) => {
  // 
// };

// module.exports = anagrams;


/* NOTES */

// .toLowerCase() - converts the string to lower case
// .replaceAll(" ", "") - removes all spaces from the string
// .replace() - replaces a specified value with another value in a string
// .split("") - splits the string into an array of characters
// .sort() - sorts the array of characters in alphabetical order
// .join("") - joins the sorted array of characters back into a string


/* SOLUTIONS */

/* Solution #1 - Code */
// const anagrams = (strA, strB) => {
//   const charMapA = buildCharMap(strA);
//   const charMapB = buildCharMap(strB);

//   if (charMapA.size !== charMapB.size) {
//     return false;
//   }

//   for (const [charA, countA] of charMapA) {
//     if (charMapB.get(charA) !== countA) {
//       return false;
//     }
//   }

//   return true;
// };

// const buildCharMap = (str) => {
//   const charMap = new Map();

//   for (const char of removeSpacesAndLowerCase(str)) {
//     charMap.set(char, charMap.get(char) + 1 || 1);
//   }

//   return charMap;
// }

// const removeSpacesAndLowerCase = (str) => {
//   return str.toLowerCase().replaceAll(' ', '');
// }

// module.exports = anagrams;

/* Solution #2 - Code */
// const anagrams = (strA, strB) => {
//   return cleanString(strA) === cleanString(strB);
// };

// const cleanString = (str) => {
//   return str.toLowerCase().replaceAll(" ", "").split("").sort().join("");
// }

// module.exports = anagrams;