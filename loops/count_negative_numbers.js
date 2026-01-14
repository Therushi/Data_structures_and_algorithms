// write a function that returns the number of
// negative numbers in an array

const tempArray = [2, -9, 18, 0, -1, -10, -4, 8];

function countNegativeNumbers(arr) {
  if (!arr) {
    return `Invalid input`;
  }
  let negativeNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeNumbers += 1;
    }
  }
  return negativeNumbers;
}

const result = countNegativeNumbers(tempArray);
console.log(result);
