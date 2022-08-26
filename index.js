function isPalindrome(word) {
  // Write your algorithm here

let palindrome = word.split("").reverse().join("");
let resultPalindrome = palindrome === word ? true : false;
return resultPalindrome;



}
/* 
  Add your pseudocode here
  data input === palindrome text
  if word takes same both backwards and same === true
  return input
*/

/*
  Add written explanation of your solution here
  this code takes in a word as an input
  word example === madam
  the word should be spelt the same both forward and backward to achieve the result.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
