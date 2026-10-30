/* COURSE INSTRUCTIONS */

/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'


/* PERSONAL INSTRUCTIONS */

/* Solution #1 - Instructions */
// How to turn a string into an array, reverse it, and join it back into a string:
// str.split('') turns the string into an array making 'david' => ['d', 'a', 'v', 'i', 'd']
// arr.reverse() reverses the array making ['d', 'a', 'v', 'i', 'd'] => ['d', 'i', 'v', 'a', 'd'] which we then set this to the variable reverseArr
// reverseArr.join('') joins the array back into a string making ['d', 'i', 'v', 'a', 'd'] => 'divad'
// We can also join everything in one line and return it:
// const reverseString = (str) => {
  // return str.split('').reverse().join('');
// }; 
// This is cleaner than using multiple variables and steps like the following:
// const reverseString = (str) => {
  // const arr = str.split('');
  // const reversedArr =arr.reverse();
  // return reversedArr.join('');
// };

/* Solution #1a - Code */
// const reverseString = (str) => {
  // 
// }
// module.exports = reverseString;

/* Solution #1b - Code */
// const reverseString = (str) => {
  // 
// }

// module.exports = reverseString;


/* Solution #2 - Instructions */
// How is the following code working:
// 1. Turn the string (str) into an array by using .split('')
  // str.split('')
  // Ex: 'David' => ['D', 'a', 'v', 'i', 'd']
// 2. Reduce the array using the .reduce(() => ()) method
  // First, we want to pass accumulator in the parameter of the reduce callback which is the accumulated value that is returned after each iteration. It starts as the first element/character of the array.
  // Second, we want to pass currentValue into the parameter of the reduce callback which is the current element/character being processed in the array
  // Third, within the return value of the callback we put the currentValue before adding the accumulator to effectively build the reversed string.
// 3. Make sure a return was added before the string (str)

/* Solution #2 - Code */
// const reverseString = (str) => {
  // 
// }

// module.exports = reverseString;


/* NOTES */

// .split('') - splits the string into an array of individual characters

// .reduce() - reduces the array into a single value

//char is the same as using str[i] to loop over a string (let char of str)

//to loop over an array you would use (let elem of arr)

// How to reverse a String using (i = 0; i < str.length; i++):
// 0th interation - str[i] = d, reversed = 'd' + '' = 'd'
// 1st interation - str[i] = a, reversed = 'a' + 'd' = 'ad'
// 2nd interation - str[i] = v, reversed = 'v' + 'ad' = 'vad'
// 3rd interation - str[i] = i, reversed = 'i' + 'vad' = 'ivad'
// 4th interation - str[i] = d, reversed = 'd' + 'ivad' = 'divad'

// How to reverse a String using (for (let char of str):
// 0th interation - char = d, reversed = 'd' + '' = 'd'
// 1st interation - char = a, reversed = 'a' + 'd' = 'ad'
// 2nd interation - char = v, reversed = 'v' + 'ad' = 'vad'
// 3rd interation - char = i, reversed = 'i' + 'vad' = 'ivad'
// 4th interation - char = d, reversed = 'd' + 'ivad' = 'divad'


/* SOLUTIONS */

/* Solution #1a - Code */
// const reverseString = (str) => {
//   const arr = str.split('');
//   const reverse = arr.reverse();
//   const toString = reverse.join('');
  
//   return toString;
// }
// module.exports = reverseString;

/* Solution #1b - Code */
// const reverseString = (str) => {
//   return str.split('').reverse().join('');
// }

// module.exports = reverseString;


/* Solution #2 - Code */
// const reverseString = (str) => {
//   return str
//     .split('')
//     .reduce((accumulator, current) => (current + accumulator), '');
// };

// module.exports = reverseString;