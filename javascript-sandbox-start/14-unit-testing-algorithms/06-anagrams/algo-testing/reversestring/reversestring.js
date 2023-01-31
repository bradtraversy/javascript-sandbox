// Solution 1
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// Solution 2
// function reverseString(str) {
//   let reversed = '';

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

// Solution 3
function reverseString(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverseString;
