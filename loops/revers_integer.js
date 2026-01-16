/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * Example 1:
 * Input: x = 123
 * Output: 321
 */

const int = 1234567899;

function reverseInteger(num) {
  const nCopy = num;
  let rev = 0;
  num = Math.abs(num); // Keeps number positve

  while (num > 0) {
    let rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10); // handles values after . that is 232.4
  }
  // NOTE: there is a case that number should be within limit of 2^31
  const limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit - 1) return 0;

  return nCopy < 0 ? -rev : rev;
}

const result = reverseInteger(int);
console.log(result);
