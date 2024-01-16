'use strict';
//!1
// const world = ['one', 'two', 'three'];
// const numbers = [1, 3, 1, 5, 2, 1, 4]

// const name = 'Andrew'

// console.log(world, numbers);
// console.log([]);

// console.log(
//   'split:', name.split(''),
//   'spread:', [...name],
//   'Array.from:', Array.from(name)
// );


//!2

// const numbers = [0, 1, 2, 3, 4, 5, 6]


// console.log(numbers);

// function add(...info) {
//   console.log(info)
//   let a = info
//   console.log(...a);
// }

// add()

const numbers = [];

numbers.push2 = function (...arr) {
  debugger;
  if (arr.length === 0) {
    return this.length;
  }

  if (this.length === 0) {
    for (let i = 0; i < arr.length; i++) {
      this[i] = arr[i];
      return this.length
    }
  }

  if (this.length !== 0) {
    const length = this.length;
    for (let i = 0; i < arr.length; i++) {
      this[i + length] = arr[i];
    }
  }

  return this.length;
};

numbers.push2(72);

console.log(numbers);
