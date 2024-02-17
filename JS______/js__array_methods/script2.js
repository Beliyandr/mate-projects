'use strict';
//!1 forEach

const words = ['one', 'two', 'three', 'four', 'five', 'six']

// words.runForEach = function (callback) {
//   console.log(this);

//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this)
//   }

// }

// words.runForEach((item, index, items) => {
//   console.log(item);
//   console.log(index);
//   console.log(items);

// })


// const res = words
// .map((word, index) => ({ name: word, index }))
// .reduce((prev, item, index, items) => {
//   console.log('prev:', prev);
//   console.log('item:', item);
//   console.log('index:', index);


//   return prev + item
// }, '')
//   .reduce((prev, item, index) => {
//     return { ...prev, [item]: index }
//   },{})


// console.log(res);

const numbers = [1, 2, 3, 4, 5];

numbers.reduce2 = function (callback, initialValue) {
  if (this.length === 1 && !initialValue) {
    return this[0];
  }
  debugger
  if (!this.length && initialValue) {
    return initialValue;
  }

  let result;
  let previousValue;

  for (let i = 0; i < this.length; i++) {
    if (!initialValue) {
      result += callback(result = this[i], this[i + 1], i, this);
    }
    debugger
    if (initialValue) {
      result = callback(previousValue = initialValue, this[i], i, this);
    }
  }

  return result;

  console.log(result);


  return result;
  // previousValue, currentValue, index, array
};

console.log(numbers.reduce2((sum, x) => sum + x, 1000));


