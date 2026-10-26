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

const arr = [1, -1, 2, 3];

const sum = arr.reduce((accumulator, current) => (accumulator + current));

console.log(sum);