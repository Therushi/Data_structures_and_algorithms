/**
    Input: nums = [0,0,1,1,1,2,2,3,3,4]
    Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
    Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).
 */

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6];

function removeDuplicates(arr) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[k]) {
      k = k + 1;
      arr[k] = arr[i];
    }
  }
  return k + 1;
}

const result = removeDuplicates(nums);
console.log(result);
