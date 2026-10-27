/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

/* Use a Character Map to answer the following questions:
   Which character appears the most amount of times?
   Does string A contain the same characters as string B (anagram)?
   Are there any duplicate characters?
*/

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

// Use Map object to create a character map:
  // 1. const charMap = new Map();
    // A new Map object is created and assigned to charMap. the Map will be used to store characters as keys and their counts as values.
  // 2. let max = 0; & let maxChar = '';
    // The variable max will store the maximum count of a character starting at 0 and maxChar will store the character that has the highest count, starting as an empty string.
  // 3. for (const char of str) { charMap.set(char, charMap.get(char) + 1 || 1); }
    // The FOR loop iterates over each character in the input string (str). The charMap.get(char) retrieves the current count of the character (char) from the map (charMap). The charMap.set(char, charMap.get(char) + 1 || 1) updates the count in the map, if the character already exists in the map, it increments the count by 1, if it does not exist yet, it initializes the count to 1.
  // 4. for (const [char, count] of charMap) { if (count > max) { max = count; maxChar = char; } }
    // The FOR loop iterates over each entry (character and its count) in the map (charMap). If the count is greater than the current maximum (max), it updates the max and maxChar accordingly.
  // 5. return maxChar;
    // The function returns the character that has the highest count (maxChar).
const maxCharacter = (str) => {
  const charMap = new Map();
  let max = 0;
  let maxChar = '';

  for (const char of str) {
    charMap.set(char, charMap.get(char) + 1 || 1);
  }

  for (const [char, count] of charMap) {
    if (count > max) {
      max = count;
      maxChar = char;
    }
  }
  return maxChar;
};

module.exports = maxCharacter;
