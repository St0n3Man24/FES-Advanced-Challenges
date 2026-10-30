/* COURSE INSTRUCTIONS */

/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

// Use a Character Map to answer the following questions:
// Which character appears the most amount of times?
// Does string A contain the same characters as string B (anagram)?
// Are there any duplicate characters?


/* PERSONAL INSTRUCTIONS */

/* Solution #1 - Instructions */
// Use Map object to create a character map:
  // 1. Create a variable that will store the character Map object and have it initially set to an empty object. This will be used to store the count of each character in the string.
    // const charMap = {};
  // 2. Create a variable that will change and keep track of the highest character count found durring the iteration that is initially set to 0.
    // let max = 0;
  // 3. Create a variable that will change and store the character that has the highest count that is initially set to an empty string ('').
    // let maxChar = '';
  // 4. Counting Characters: create a for...of loop that iterates over each character in the string (str) and have the variable (char) take on the value of each character in the string.
    // for (let char of str) { ... }
  // 5. Within the for...of loop, we want to update the count of each character (char) in the charMap object. Using the OR operator, if charMap[char] already exists (meaning the character has been encountered before), it increments by 1 (charMap[char] + 1). If charMap[char] does not exist (meaning the character is being encountered for the first time) it sets the count to 1.
    // charMap[char] = charMap[char] + 1 || 1;
  // 6. Finding the Max Character: Create a for...in loop that iterates over each key (character) in the character Map object (charMap) and have the variable (char) take on the property name of each key in the charMap object
    // for (let char in charMap) { ... }
  // 7. Within the for...in loop, create an if statement that checks if the count of the current character (charMap[char]) is greater than the current (max).
    // if (charMap[char] > max) { ... }
  // 8. If the current character is greater than the (max), then the max is updated to the new count (charMap[char]) and the maxChar is set to the current character (char).
    // max = charMap[char];
    // maxChar = char;
  // 9. Finally, we will return the character with the highest count in the string (maxChar)
    // return maxChar;


/* Solution #1a - Code */
const maxCharacter = (str) => {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
};

module.exports = maxCharacter;

/* Solution #1b - Code */
// const maxCharacter = (str) => {
  // 
// };

// module.exports = maxCharacter;


/* NOTES */

// .get() - looks for a key within a Map and returns the keys associated value

// .set() - is used to add a key-value pair to a Map object or update the value associated with an already exisitng key

// for...in - this loop is primarly used to iterate over the enumerable properties (keys) of an object
  // the for...in loop goes through all the keys of an object or array and is not best when used with arrays or Map objects because it can iterate over inherited properites
  // object { a: 1, b: 2, c: 3}
  // keys: a, b, c

// for...of - this loop is designed to interate over iterable objects, such as arrays, strings, and Map objects. It gives you the values directly, not the keys.
  // the for...of loop iterates over the values of the iterable, making it particularly useful for arrays and Maps
  // array [10, 20, 30]
  // value: 10, 20, 30


/* SOLUTIONS */

/* Solution #1a - Code */
// const maxCharacter = (str) => {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// };

// module.exports = maxCharacter;

/* Solution #1b - Code */
// const maxCharacter = (str) => {
//   const charMap = new Map();
//   let max = 0;
//   let maxChar = '';

//   for (const char of str) {
//     charMap.set(char, charMap.get(char) + 1 || 1);
//   }

//   for (const [char, count] of charMap) {
//     if (count > max) {
//       max = count;
//       maxChar = char;
//     }
//   }
//   return maxChar;
// };

// module.exports = maxCharacter;