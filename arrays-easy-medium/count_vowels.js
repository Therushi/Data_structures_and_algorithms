/**
 * Write a function countVowles that takes a string as a input and returns the number of vowles in that string
 */

function countVowels(str) {
  const arrayOfString = str.toLowerCase().split("");
  const setOfVowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let item of arrayOfString) {
    if (setOfVowels.has(item)) {
      count++;
    }
  }
  return count;
}

const result = countVowels("Rushikesh");
console.log(result);
