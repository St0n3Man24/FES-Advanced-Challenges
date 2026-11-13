/* COURSE INSTRUCTIONS */

/** Given a sentence, capitalize the first letter of each word and 
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */


/* PERSONAL INSTRUCTIONS */

/* Solution #1 - Instructions */
// How to target and capitalize the first letter of each word in a string:
// 1. Create an empty array to hold the capitalized words.
  // const result = [];
// 2. Create a for...of loop to iterate through each word in the string that has been split into an array. NOTE: make sure to put a space in between the quotation marks of the split because we want to split the string by spaces, not by individual characters.
  // for (let word of str.split(" ")) { ... }
// 3. Inside the for loop, create a variable to hold the capitalized word (capitalizedWord) by targeting the first letter of the word, making it uppercase using the toUpperCase method, and adding the rest of the word to it using the slice method
  // const capitalizedWord = word[0].toUpperCase() + word.slice(1);
// 4. Push the capitalized word variable (capitalizedWord) into the results array variable (result)
  // result.push(capitalizedWord);
// 5. Return the updated results array variable (result) and since it's still in array format, use the join method to conver it back to an string. NOTE: make sure to put a space in between the quotation marks of the join because we want to join the words with spaces.
  // return result.join(" ");

/* Solution #1 - Code */
const capitalize = (str) => {
  const capitalizedWordsArray = [];
  for (let word of str.split(' ')) {
    const capitalizedWords = word[0].toUpperCase() + word.slice(1);
    // First we are taking a string (str) and splitting it into an array of words based on spaces. For example, if we have a string (str) that is set to ("hello world") and state str.split(' '), we will get an array that would be set to ["hello", "world"]. In the for...of loop we are iterating over each element (word) in the array that was produced with the split. The variable word will represent each individual word during each iteration of the loop. Within the loop, we are capitalizing the first letter of each (word). word[0].toUpperCase() retrieves the first character of the word and converts it to uppercase. word.slice(1) gets the rest of the word starting from the second character (index 1) to the end. Then we add the rest of the word (word.slice(1)) to the end of the capitalized initial letter of the word (word[0].toUpperCase()).
    capitalizedWordsArray.push(capitalizedWords);
  }
  return capitalizedWordsArray.join(' ');
};

module.exports = capitalize;

/* Solution #2 - Instructions */
// How to solve this problem using the brute force method:
// 1. Create an string variable (result) that can change later that targets the first letter of the string (str) and makes it uppercase using the toUpperCase method
  // let result = str[0].toUpperCase();
// 2. Create a for loop to iterate through each index of the string (str) length starting at index 1 (i = 1) since the first letter has already been capitalized
  // for (let i = 1; i < str.length; i++) { ... }
// 3. Inside the for loop, if the previous index of the string (str[i - 1]) is a space, add the current index of the string (str[i]) to the result variable (result) and make it uppercase using the toUpperCase method
  // if (str[i - 1] === " ") { result += str[i].toUpperCase(); }
// 4. Otherwise (else), add the current index of the string (str[i]) to the result variable (result) without making it uppercase
  // else { result += str[i]; }
// 5. Return the updated string (result)

/* Solution #2 - Code */
// const capitalize = (str) => {
  // 
// };

// module.exports = capitalize;


/* NOTES */

// .toUpperCase() - converts the string to upper case
// .split("") - splits the string into an array of characters
// .join("") - joins the sorted array of characters back into a string
// .push() - adds one or more elements to the end of an array and returns the new length of the array
// .slice() - returns a copy of a portion of an array or string into a new array or string, targeting the specified start and end indices


/* SOLUTIONS */

/* Solution #1 - Code */
// const capitalize = (str) => {
//   const result = [];
//   for (let word of str.split(" ")) {
//     const capitalizedWord = word[0].toUpperCase() + word.slice(1);
//     result.push(capitalizedWord);
//   }
//   return result.join(" ");
// };

// module.exports = capitalize;

/* Solution #2 - Code */
// const capitalize = (str) => {
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === " ") {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// };

// module.exports = capitalize;