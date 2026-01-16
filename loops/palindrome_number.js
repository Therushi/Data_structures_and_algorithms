/**
 * Write a function that returns true or false when number is palindrome
 */

const testNumber = 12321;

function palindromeNumber(num) {
  const orignalNum = num;
  let reverse = 0;
  while (num > 0) {
    let remainder = num % 10;
    reverse = 10 * reverse + remainder;
    num = Math.floor(num / 10);
  }
  return orignalNum === reverse;
}

const result = palindromeNumber(testNumber);
console.log(result);

/**
 * Here the main key take away is
 * let temp = 12345;
 * temp % 10 = 5
 * temp / 10 = 1234.5
 *
 * Also the join logic in number
 * if let a = 8;
 * if i have to join 4 to it that is i want answer is 84 not 12
 * we can do it like this in maths 8 * 10 + 4 = 84
 */
