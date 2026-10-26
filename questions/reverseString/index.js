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

// const reverseString = (str) => {
  // const reversed = "";

  // for (let char of str) {
    // reversed = str[i] + reversed;
  // }

  // return reversed;
// };

//char is the same as using str[i] to loop over a string (let char of str)
//to loop over an array you would use (let elem of arr)

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

// How is the following code working:
// 1. str.split('') turns the string into an array of characters.
  // 'David' => ['D', 'a', 'v', 'i', 'd']
// 2. .reduce((accumulator, current) => { return current + accumulator }, '') takes the array of characters, reducing them to a single string and setting the accumulator to an empty string initially.
  // 1st interation a = '', c = 'D' => a/result = 'D' + '' = 'D'
  // 2nd interation a = 'D', c = 'a' => a/result = 'a' + 'D' = 'aD'
  // 3rd interation a = 'aD', c = 'v' => a/result = 'v' + 'aD' = 'vaD'
  // 4th interation a = 'vaD', c = 'i' => a/result = 'i' + 'vaD' = 'ivaD'
  // 5th interation a = 'ivaD', c = 'd' => a/result = 'd' + 'ivaD' = 'divaD'

const reverseString = (str) => {
  return str
    .split('')
    .reduce((accumulator, current) => (current + accumulator), '');
};

module.exports = reverseString;
