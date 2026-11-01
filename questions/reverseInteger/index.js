/* COURSE INSTRUCTIONS */

/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */


/* PERSONAL INSTRUCTIONS */

/* Solution #1 - Instructions */
// How to reverse an integer/number:
  // 1. Convert the integer to a string
    // int.toString();
  // 2. Reverse the string
    // add .split('').reverse().join('') to int.toString();
  // 3. Convert the reversed string back to an integer
    // parseInt(reversed);
  // 4. Return the reversed integer and multiply it by the sign (-) of the original integer (int)
    // parseInt(reversed) * Math.sign(int);

/* Solution #1 - Code */
// const reverseInteger = (int) => {
//   const reversedStr = int.toString().split('').reverse().join('');
//   const reversedInt = parseInt(reversedStr);
//   return reversedInt * Math.sign(int);
// };

// module.exports = reverseInteger;


/* NOTES */

// .toString() - converts the integer to a string

// .split('') - splits the string into an array of characters

// .reverse() - reverses the order of the array

// .join('') - joins the array back into a string

// parseInt() - converts the string back to an integer

// Math.sign() - returns the sign of a number, indicating whether the number is positive or negative


/* SOLUTIONS */

/* Solution #1 - Code */
// const reverseInteger = (int) => {
//   const reversedStr = int.toString().split('').reverse().join('');
//   const reversedInt = parseInt(reversedStr);
//   return reversedInt * Math.sign(int);
// };

// module.exports = reverseInteger;