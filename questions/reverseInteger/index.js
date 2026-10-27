/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

/* How to reverse an integer/number:
   * 1. Convert the integer to a string
     * int.toString();
   * 2. Reverse the string
     * add .split('').reverse().join('') to int.toString();
   * 3. Convert the reversed string back to an integer
     * parseInt(reversed);
   * 4. Multiply the reversed integer by the sign (-) of the original integer
     * parseInt(reversed) * Math.sign(int);
*/
const reverseInteger = (int) => {
  const reversed = int.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(int);
};

module.exports = reverseInteger;
