// write a function that searches for an element in an array
// and return the index, if element is not present then
// just return -1

const testArr = [1, 2, 0, 10, 8, 30];

function searchIndex(arr, num) {
  if (!arr || !num) {
    return `Invalid inputs`;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}

const result = searchIndex(testArr, 10);
console.log(result);
