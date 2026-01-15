/**
 * Write a function that returns the count
 * of digits in a number
 */

/**
 * We can check by dividing by 10
 * how many times it will be divided we can say that is the count
 */

const testNumber = 998;

function countDigits(num) {
  if (typeof num != "number") return `Invalid type`;

  if (num == 0)
    // Handle only 0 condition
    return 1;

  // To handle negative numbers we are using Math.abs
  num = Math.abs(num);
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
const result = countDigits(testNumber);
console.log(result);

/**
 * NOTE:
 * we are using here Math.floor() this will ignore the decimal points
 * Math.ceil() is use want greater number example 10.1 = 11
 * Math.round() is used to round the value example 10.1 = 10; 10.5 = 11;
 * Math.abs() is use to get only positive numbers (it removes negative sign we can say)
 */
