/**
 * Write a function that returns second largest number in an array
 */

const tempArray = [4, 9, 0, 2, 8, 7, 1, 9];

function secondLargestNumber(arr) {
  if (!arr.length || arr.length < 2) {
    return `Invalid input`;
  }
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    }
  }
  return second;
}

const result = secondLargestNumber(tempArray);
console.log(result);
