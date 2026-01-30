function removeDuplicates(arr) {
  const newTempArray = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!newTempArray.has(arr[i])) {
      newTempArray.add(arr[i]);
    }
  }
  return Array.from(newTempArray);
}
const result = removeDuplicates([1, 2, 2, 3, 4, 4]);
console.log(result);
