/**
 * Write a function that returns the largest
 * number in an array
 */

const testArray = [-5, -10, -8, -17, -1];

function findLargestNumber(arr) {
  let largest = arr[0]; // or we can use the smallest number to compare that is -Infinity
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
const result = findLargestNumber(testArray);
console.log(result);
