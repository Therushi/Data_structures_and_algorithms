/**
 * Write a function groupby that takes an array of objects and a property name as string and returns an object where the keys are the unique values of the specific property and values are arrays of objects
 */

function groupBy(arr, key) {
  const result = {};
  for (let item of arr) {
    const keyValue = item[key];
    if (!result.hasOwnProperty(keyValue)) {
      result[keyValue] = [];
    }
    result[keyValue].push(item);
  }
  return result;
}

const result = groupBy(
  [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
  ],
  "age",
);
console.log(result);
