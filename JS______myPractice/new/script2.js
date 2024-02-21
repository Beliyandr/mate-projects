//*! JavaScript Advanced / Array Methods / Library chaos
// console.log(sortBooks([
//   ['Going Over', 'Brazen'],
//   ['The Enemy'],
//   ['Followers', 'Belle Epoque']
// ]));

// function sortBooks(shelves) {
//   const newArr = [];
//   for (const books of shelves) {
//     newArr.push(...books)
//   }
//   return newArr.sort();
// }

//*! JavaScript Advanced / Array Methods / Reverse Message
// function reverseMessage(message) {
//   const newArr = message.split(' ');
//   const result = [];

//   for (const word of newArr) {
//     result.push([...word].reverse().join(''));
//   }

//   return result.join(' ');
// }

// console.log(reverseMessage('tpircsavaJ si eht egaugnal fo erutuf'));


//*! JavaScript Advanced / Array Methods / lastIndexOf


// let numbers = [5, 6, 1, 4, 2, 5, 1, 4, 8, 9, 10, 2, 5];

// numbers.lastIndexOf2 = function (searchElement, formIndex = this.length) {
//   let index = -1;
//   let formIndexNumber = formIndex;
//   debugger
//   if (formIndexNumber > this.length || formIndexNumber === this.length) {
//     formIndexNumber = this.length;
//   }

//   if (formIndexNumber < 0) {
//     formIndexNumber = Math.abs(formIndex);
//   }

//   for (let i = this.length - formIndexNumber - 1; i > 0; i--) {
//     if (this[i] === searchElement) {
//       index = i;

//       return index;
//     }
//   };

//   return index;
// };

// const source = [5, 6, 1, 4, 2, 5, 1, 4, 8, 9, 10, 2, 5];
// const findIndex = numbers.lastIndexOf2(2, 4);

// console.log(findIndex);
