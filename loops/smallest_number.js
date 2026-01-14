/**
 * Write a function that finds the smallest number in an array
 */

const tempArray = [-9, -19, -3];

function findSmallestNumber(arr) {
  if (!arr.length) {
    return `Invalid input`;
  }
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

const result = findSmallestNumber(tempArray);
console.log(result);
