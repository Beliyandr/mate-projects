'use strict';

// const numbers = []

// numbers.push = function (num) {
//   let a = [...this, num];
//   return a

// };

// numbers.push(10)

// console.log(numbers);


// const numbers = [undefined, 143, 7, 43, 11, 50, 7];
// const numbers = [143, 7, NaN, undefined, 11, 50, 7];

// numbers.indexOf2 = function (searchElement, fromIndex = 0) {

//   debugger;

//   if (fromIndex === 0) {
//     for (let i = 0; i < this.length; i++) {
//       if (this[i] === searchElement) {
//         return i;
//       }
//     }

//     return -1;
//   };

//   if (fromIndex > 0) {
//     for (let i = fromIndex; i < this.length; i++) {
//       if (this[i] === searchElement) {
//         return i;
//       }
//     }

//     return -1;
//   }

//   if (fromIndex < 0) {
//     let counter = fromIndex + this.length;
//     if (counter < 0) {
//       counter = 0;
//     }
//     for (let i = counter; i < this.length; i++) {
//       if (this[i] === searchElement) {
//         return i;
//       }
//     }

//     return -1;
//   }
// };

// console.log(numbers.indexOf2(7));


// const numbers = [1, 2, 3, 4, 5, 6]

// numbers.slice2 = function (start = 0, end = this.length) {
//   let endArr = end;
//   let startArr = start;
//   const result = [];

//   debugger
//   if (startArr > this.length) {
//     return [];
//   }

//   if (startArr < 0) {
//     startArr = this.length + startArr;

//     if (startArr < 0) {
//       startArr = 0;
//     }
//   }

//   if (endArr > this.length) {
//     endArr = this.length;
//   }

//   if (endArr < 0) {
//     endArr = this.length + endArr
//     if (endArr < 0) {
//       endArr = 0;
//     }
//   }

//   for (let i = startArr; i < endArr; i++) {
//     result[i - startArr] = this[i];
//   };

//   return result;
// };


// console.log(numbers.slice2(0, -2));
