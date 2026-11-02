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
  // 1. Since we will be creating a character map for each string, we can utilize a reusable function to build the character map for both strings. Create a function with a name related to building a character map, pass the string (str) variable as an argument.
    // const buildCharMap = (str) => { ... }
  // 2. Inside the buildCharMap function, create a new Map object to store the character counts.
    // const charMap = new Map();
  // 3. Inside the buildCharMap function, we also want to iterate over each character in both strings, covert the characters to lower case, remove any spaces, and update the character map accordingly.
    // 3a. First, create a function that has a name related to removing spaces and converting all characters to lower case and that targets the string which will be passed in the argument.
      // const convertedString = (str) => { ... }
    // 3b. Inside this function, we want to remove all spaces from the string using the replace method (.replaceAll(' ', '')) and convert all characters to lower case using the toLowerCase method.
      // return str.toLowerCase().replaceAll(' ', '');
    // 3c. Now that we have the convertedString function, we can use it inside the buildCharMap function to process the string before building the character map and create a for...of loop to iterate over each character in the convertedString function.
      // for (const char of convertedString(str)) { ... }
    // 3d. Inside the for...of loop, we want to update the character count in the character map (charMap) by setting the current count of the character (char) using the get method (charMap.get(char)), adding 1 to it (charMap.get(char) + 1), and if the character isn't already in the map, set it to 1.
      // charMap.set(char, charMap.get(char) + 1 || 1);
    // 3e. Return the character map (charMap) at the end of the buildCharMap function.
      // return charMap;
  // 4. Now that we have the character map function created, we can connect them in the main anagrams function by calling the buildCharMap function for both strings in their own character map variables.
    // const charMapA = buildCharMap(strA);
    // const charMapB = buildCharMap(strB);
  // 5. Create an IF statment to check if the sizes of the two character maps are different, if they are not (meaning they are not anagrams of each other), return false.
    // if (charMapA.size !== charMapB.size) { return false; }
  // 6. Create a for...of loop to iterate over each entry of the first string (charMapA) and each entry is a key-value pair (character (charA) and the number of times that character appears in strA (countA)).
    // for (const [charA, countA] of charMapA) { ... }
  // 7. Inside the for...of loop, using an IF statement, check if the character from string A exists in the string B character map (charMapB.get(charA)) and if the count of the character in charMapB is not equal to the count in charMapA (countA). If the character does not exist or the counts do not match, return false. Otherwise, return true after the loop completes.
    //   if (charMapB.get(charA) !== countA) {
    //     return false;
    //   }
    // }
    // return true;

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

//   for (const char of convertedString(str)) {
//     charMap.set(char, charMap.get(char) + 1 || 1);
//   }
//   return charMap;
// }

// const convertedString = (str) => {
//   return str.toLowerCase().replaceAll(' ', '');
// }

// module.exports = anagrams;

/* Solution #2 - Instructions */
// How to do the same as above but reduce the amount of code:
  // 1. In one line of code:
    // set both strings to lower case
      // strA.toLowerCase()
      // strB.toLowerCase()
    // remove all the spaces
      // strA.toLowerCase().replaceAll(' ', '')
      // strB.toLowerCase().replaceAll(' ', '')
    // split the string into an array of characters
      // strA.toLowerCase().replaceAll(' ', '').split('')
      // strB.toLowerCase().replaceAll(' ', '').split('')
    // sort the strings so each character is in alphabetical order
      // strA.toLowerCase().replaceAll(' ', '').split('').sort()
      // strB.toLowerCase().replaceAll(' ', '').split('').sort()
    // join the sorted array of characters back into a string
      // strA.toLowerCase().replaceAll(' ', '').split('').sort().join('')
      // strB.toLowerCase().replaceAll(' ', '').split('').sort().join('')
  // 2. Since this code is used for both strings, create a reusable function that takes a string (str) as an argument and returns the cleaned string code
    // const convertedString = (str) => {
      // return str.toLowerCase().replaceAll(' ', '').split('').sort().join('');
    // }
  // 3. return a comparison of the convertedString function passing in both strings as arguments (strA and strB) to check if they are equal.
    // return convertedString(strA) === convertedString(strB);

/* Solution #2 - Code */
const anagrams = (strA, strB) => {
  return convertedString(strA) === convertedString(strB);
};

const convertedString = (str) => {
  return str.toLowerCase().replaceAll(' ', '').split('').sort().join('');
}
 
module.exports = anagrams;


/* NOTES */

// .toLowerCase() - converts the string to lower case
// .replaceAll(" ", "") - removes all spaces from the string
// .replace() - replaces a specified value with another value in a string
// .split("") - splits the string into an array of characters
// .sort() - sorts the array of characters in alphabetical order
// .join("") - joins the sorted array of characters back into a string
// .size - returns the number of elements in a Map object
// .get() - returns the value associated with the specified key in a Map object


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