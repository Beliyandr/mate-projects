'use strict';

// printValues([1, 2, 3]);
// printValues(
//   [10, 20, 30, 40, 50],
//   (value, index) => `${index}: ${value}`
// );


// function printValues(
//   values,
//   format = (value) => `Value is ${value}`
// ) {
//   console.log('--------------');

//   for (let i = 0; i < values.length; i++) {
//     const message = format(values[i], i);

//     console.log(message);
//   }

// }


// document.addEventListener('click', () => {
//   document.body.textContent = '123'
// })

//! FILTER  ---------------------------------------------------------------------


// const candies1 = ['KitKat', 'Nuts', 'Lion', 'Snickers', 'Bounty', 'Nuts'];
// const candies2 = ['Nuts', 'Nuts', 'Nuts', 'Snickers', 'Snickers', 'Mars']

// const contains0 = candy => candy.includes('o');
// const isLessThan5 = candy => candy.length < 5;


// function filter(candies, isGoodEnough) {
//   const result = [];

//   for (const candy of candies) {
//     if (isGoodEnough(candy)) {
//       result.push(candy)
//     }
//   }


//   return result;
// }


// function filter(array, callback) {
//   let newArr = [];
//   for (let item of array) {
//     if (callback(item)) {
//       newArr.push(item)
//     }
//   }
//   return newArr
// }

// console.log(
//   filter(candies1, contains0)  // ['Lion', 'Bounty']
// );

// console.log(
//   filter(candies2, isLessThan5)  // ['Nuts', 'Nuts', 'Nuts','Mars']
// );


//! ---------------------------------------------------------------------------------

const candies1 = ['KitKat', 'Nuts', 'Lion', 'Snickers', 'Bounty', 'Nuts'];

function filter(candies, isGoodEnough) {
  const result = [];
  debugger

  for (const candy of candies) {
    if (isGoodEnough(candy)) {
      result.push(candy)
    }
  }

  return result;
}

function createSizeFilter(size) {
  return (item) => item.length <= size;
}

const isUpTo4 = createSizeFilter(4);
const isUpTo6 = createSizeFilter(6);


console.log(
  filter(candies1, isUpTo4),
  filter(candies1, isUpTo6),
);


const x = 100;

console.log(
  ('200' + x)
);
