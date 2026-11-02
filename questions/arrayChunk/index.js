/* COURSE INSTRUCTIONS */

/** Given an array along with a chunk size, return a new array that contains 
 * many subarrays where the length of each subarray is length `size`. 
 *
 * @example
 * arrayChunk([0, 1, 2, 3], 2) === [[0, 1], [2, 3]]
 * arrayChunk([0, 1, 2, 3, 4], 2) === [[0, 1], [2, 3], [4]]
 * arrayChunk([0, 1, 2, 3, 4], 3) === [[0, 1, 2], [3, 4]]
 */


/* PERSONAL INSTRUCTIONS */

/* Solution #1 - Instructions */
// How to chunk an array:
// 1. Create an empty 'chunkedArray' to hold the subarrays
  // const chunkedArray = [];
  // this is creating an empty array to hold the subarrays
// 2. Create a for loop where the index (i) is initialized to 0, continues as long as i is less than the length of the array, and after each iteration of the loop, i will increase by the value of the chunk size (size).
  // for (let i = 0; i < array.length; i =+ size) { ... }
  // this is incrementing the index by the size of the chunk
  // Example (size = 2) (array = [0, 1, 2, 3, 4]):
    // loop iteration = 1; Value of i = 0; i + size = 2; array slice = [0, 1]
    // loop iteration = 2; Value of i = 2; i + size = 4; array slice = [2, 3]
    // loop iteration = 3; Value of i = 4; i + size = 6; array slice = [4]
// 3. Inside the for loop, create a variable for the subarrays in which we'll want to target a specific number of elements within the array, you can use the slice method to create a subarray of that length.
  // const subarray = array.slice(i, i + size)
  // this is slicing the elements from the current index (0) to the current index plus the size of the chunk (0 + 2 = 2), which will give you a subarray of length 2
// 4. then you can push/add the subarray onto the empty chunked array (chunckedArray)
  // chunkedArray.push(subarray)
  // this is pushing the subarray into the chunked array
// 5. Finally, return the updated chunked array which will contain all the subarrays of the specified size
  // return chunkedArray;

/* Solution #1 - Code */
const arrayChunk = (array, size) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    const subarray = array.slice(i, i + size);
    chunkedArray.push(subarray);
  }
  return chunkedArray;
};

module.exports = arrayChunk;


/* NOTES */

// .slice() - returns a copy of a portion of an array or string into a new array or string, targeting the specified start and end indices
// .join("") - joins the sorted array of characters back into a string
// .push() - adds one or more elements to the end of an array and returns the new length of the array


/* SOLUTIONS */

/* Solution #1 - Code */
// const arrayChunk = (array, size) => {
//   const chunkedArray = [];

//   for (let i = 0; i < array.length; i += size) {
//     const subarray = array.slice(i, i + size);
//     chunkedArray.push(subarray);
//   }
//   return chunkedArray;
// };

// module.exports = arrayChunk;