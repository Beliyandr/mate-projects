'use strict';

// const team = [];
// let firstaNumber = 0;

// while (team.length < 3) {
//   let currentNumber = firstaNumber;

//   const player = function () {
//     console.log(currentNumber);

//   }

//   firstaNumber++;

//   team.push(player)
// }


// team[0]();
// team[1]();
// team[2]();




// function createRecorder(name) {
//   let words = [];

//   const reconder = (...args) => {
//     if (args.length === 0) {
//       console.log(name, words.join(' '));
//     } else {
//       words.push(args[0])
//     }
//   }

//   reconder.clear = () => {
//     words = [];
//   }

//   return reconder;
// }

// const myRecorder = createRecorder('Misha');
// const yourRecorder = createRecorder('Student');

// myRecorder('Live');
// myRecorder('Long');
// myRecorder('and');
// myRecorder('prosper!');

// myRecorder.clear();


// yourRecorder('Hi,');
// yourRecorder('I');
// yourRecorder('am');
// yourRecorder('a');
// yourRecorder('student');


// myRecorder();
// yourRecorder();


// function sum() {

// }

// const result = sum(3)(5);

// console.log(result);



// function makeWarehouse(goods) {
//   let weightArr = [...goods];
//   const warehouse = {
//     totalWeight: 0,
//     averageWeight: 0,
//   };

//   debugger;
//   if (weightArr.length !== 0) {
//     calculate();
//   }

//   function calculate() {
//     debugger;
//     warehouse.totalWeight = weightArr.reduce((accum, item) => {
//       return accum + item;
//     }, 0);

//     warehouse.averageWeight
//       = Math.round(warehouse.totalWeight / weightArr.length);
//   };

//   const params = (...args) => {
//     if (args.length) {
//       weightArr = [...weightArr, ...args];
//       calculate();
//     } else {
//       return warehouse;
//     }
//   };

//   return params;
// }


// const warehouse = makeWarehouse([10, 20, 30]);

// console.log(warehouse());

// console.log(warehouse(40));




// const numbersIndex = [1, 2, 3, 4, 5];

// for (let i = 0; i < 50; i++) {

//   const numberIndex = Math.round(numbersIndex.length
//     - (Math.random() * numbersIndex.length));
//   console.log(numberIndex);
// }


/**
 * @param {string} secret
 * @param {string} password
 *
 * @returns {function}
 */
function makeSecret(secret, password) {
  let counter = 0;
  const secretInfo = { [password]: secret };

  const storage = () => {

    storage.getSecret = (pass) => {
      const result = () => {
        for (const item in storage) {
          if (item === pass) {
            return storage[item];
          }
        }
      };

      console.log(result);

      if (!result || counter < 3) {
        counter++;

        return 'Wrong password!';
      }

      return result;
    };

    storage.setSecret = (newSecret, newPassword) => {
      return 1;
    };

    return 'Absolutely not a secret thing';
  };

  return storage;
}


let a = makeSecret('a', 'b');
console.log('a',);
console.log(a.getSecret());
// console.log(a.getSecret('a'));




