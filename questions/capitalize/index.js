/** Given a sentence, capitalize the first letter of each word and 
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */


// How to target and capitalize the first letter of each word in a string:
// 1. Create an empty array to hold the capitalized words.
  // const result = [];
// 2. Create a for loop to iterate through each word in the string that has been split into an array
  // for (let word of str.split(" ")) { ... }
// 3. Inside the for loop, create a variable to hold the capitalized word (capitalizedWord) by targeting the first letter of the word, making it uppercase using the toUpperCase method, and adding the rest of the word to it using the slice method
  // const capitalizedWord = word[0].toUpperCase() + word.slice(1);
// 4. Push the capitalized word variable (capitalizedWord) into the results array variable (result)
  // result.push(capitalizedWord);
// 5. Return the updated results array variable (result) and since it's still in array format, use the join method to conver it back to an string
  // return result.join(" ");

const capitalize = (str) => {
  const result = [];
  for (let word of str.split(" ")) {
    const capitalizedWord = word[0].toUpperCase() + word.slice(1);
    result.push(capitalizedWord);
  }
  return result.join(" ");
};

module.exports = capitalize;

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


// .toUpperCase() - converts the string to upper case
// .split("") - splits the string into an array of characters
// .join("") - joins the sorted array of characters back into a string
// .push() - adds one or more elements to the end of an array and returns the new length of the array
// .slice() - returns a copy of a portion of an array or string into a new array or string, targeting the specified start and end indices
