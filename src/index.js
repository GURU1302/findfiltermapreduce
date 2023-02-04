// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x){
//   return x*2;
// }

// const newNumber = numbers.map(double);
// console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.

// function double(x){
//   return x >10;
// }

// const newNumber = numbers.filter(double);
// console.log(newNumber);

// we can also write it as

// const newNumber = numbers.filter(function(x){
//   return x > 10;

// }
// );

// console.log(newNumber);
//Reduce - Accumulate a value by doing something to each item in an array.

// const newNumber = numbers.reduce(function(accumulator,currentKey){
//   console.log("accumulator:"+ accumulator);
//   console.log("currentkey:"+ currentKey);
//   return accumulator+currentKey;

// });

// console.log(newNumber);
//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function(x){
//     return x > 10;

//   }
//   );

//   console.log(newNumber);
//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (x) {
//   return x > 10;
// });

// console.log(newNumber);

import emojipedia from "./emojipedia";

console.log(emojipedia);

function subTheMean(item) {
  return item.meaning.substring(0, 100);
}

console.log(emojipedia.map(subTheMean));
