// const arr = [1, -1, 2, 3];

// let sum = 0;

// for (let elem of arr) {
//   sum += elem;
// }

// console.log(sum);


// How to add all elements of an array using reduce (reducing the array into a single value) method
// accumulator: the running total
// currentValue: the current element in the array
// initialValue: the starting value for the accumulator (in this case, 0)

// How the following code works:
  // 1st interation - a = 0, c = 1, a/result = 0 + 1 = 1
  // 2nd interation - a = 1, c = -1, a/result = 1 + (-1) = 0
  // 3rd interation - a = 0, c = 2, a/result = 0 + 2 = 2
  // 4th interation - a = 2, c = 3, a/result = 2 + 3 = 5

// const arr = [1, -1, 2, 3];

// const sum = arr.reduce((accumulator, currentValue) => {
  // return accumulator + currentValue;
// }, 0)

// console.log(sum);


// How the following code works:
  // 1st interation - a = 1, c = -1, a/result = 1 + (-1) = 0
  // 2nd interation - a = 0, c = 2, a/result = 0 + 2 = 2
  // 3rd interation - a = 2, c = 3, a/result = 2 + 3 = 5

// const arr = [1, -1, 2, 3];

// const sum = arr.reduce((accumulator, current) => (accumulator + current));

// console.log(sum);



// Create a Character Map that counts the occurrences of each character in a string:
  // 1. Define the input string.
    // const str = 'Simplified !';
  // 2. Initialize an empty object to store the character counts.
    // const charMap = {};
  // 3. Iterate over each character in the string.
    // for (let char of str) {
  // 4. If the character is not in the map/has not been counted, initialize it with 1.
    //   if (!charMap[char]) { charMap[char] = 1; }
  // 5. Otherwise, increment the count for the current character by 1.
    //   else { charMap[char] = charMap[char] + 1; }
  // 6. Output the character map.
    // console.log(charMap);

// const str = 'Simplified !';
// const charMap = {};

// for (let char of str) {
//   if (!charMap[char]) {
//     charMap[char] = 1;
//   } else {
//     charMap[char] = charMap[char] + 1;
//   }
// }

// console.log(charMap);

// How to optimize/clean the Character Map by using the OR operator:
  // 1. Define the input string.
    // const str = 'Simplified !';
  // 2. Initialize an empty object to store the character counts.
    // const charMap = {};
  // 3. Iterate over each character in the string.
    // for (let char of str) {
  // 4. Set the current character's count in the map to the existing count plus 1, or 1 if it doesn't exist.
    //   charMap[char] = charMap[char] + 1 || 1;
  // 5. Output the character map.
    // console.log(charMap);

// const str = 'Simplified !';
// const charMap = {};

// for (let char of str) {
//   charMap[char] = charMap[char] + 1 || 1;
// }

// console.log(charMap);

// Create a Character Map that counts the occurrences of each character in a string using the Map object:

const str = 'Simplified !';
const charMap = new Map();

for (const char of str) {
  const count = charMap.get(char);
  charMap.set(char, count + 1 || 1);
}

for (const [char, count] of charMap) {
  console.log(char, count);
}

// console.log(charMap);