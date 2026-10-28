/** Given an array along with a chunk size, return a new array that contains 
 * many subarrays where the length of each subarray is length `size`. 
 *
 * @example
 * arrayChunk([0, 1, 2, 3], 2) === [[0, 1], [2, 3]]
 * arrayChunk([0, 1, 2, 3, 4], 2) === [[0, 1], [2, 3], [4]]
 * arrayChunk([0, 1, 2, 3, 4], 3) === [[0, 1, 2], [3, 4]]
 */

// How to chunk an array:
// 1. Create an empty 'chunkedArray' to hold the subarrays
  // (const chunkedArray = [];) this is creating an empty array to hold the subarrays
// 2. Create a loop through a dynamic number of elements in the array based on the size of the chunk:
  // (i += size) this is incrementing the index by the size of the chunk
// when you want to target a specific number of elements within an array or string, you can use the slice method to create a subarray or substring of that length
  // (.slice(i, i + size)) this is slicing the elements from the current index (0) to the current index plus the size of the chunk (0 + 2 = 2), which will give you a subarray of length 2
// then you can push that subarray (subarray) into the empty chunked array (chunckedArray)
  // (chunkedArray.push(subarray)) this is pushing the subarray into the chunked array
// finally, return the chunked array which will contain all the subarrays of the specified size

const arrayChunk = (array, size) => {
  const chunkedArray = [];

  for (let i = 0; i < array.length; i += size) {
    const subarray = array.slice(i, i + size);
    chunkedArray.push(subarray);
  }
  return chunkedArray;
};

module.exports = arrayChunk;
