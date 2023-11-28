// 'use strict';

// // // function calculateGuests(guestsInput) {
// // //   debugger;
// // //   if (!guestsInput || !guestsInput.length) {
// // //     return "not a number";
// // //   }

// // //   let result = "";

// // //   for (let i = 0; i < guestsInput.length; i++) {
// // //     if (guestsInput[i] / 1) {
// // //       result = parseInt(guestsInput.substring(i));
// // //       break;
// // //     }
// // //   }

// // //   if (!result || result === 0) {
// // //     return "not a number";
// // //   }

// // //   return result;
// // // }

// // // let a = calculateGuests("x 0 a");
// // // console.log(a);

// // function isAlphabet(letters) {
// //   debugger;
// //   if (!letters.length || letters === '') {
// //     return false;
// //   }

// //   if (letters.toLowerCase() === 'a') {
// //     return true;
// //   }

// //   for (let i = 0; i < letters.length - 1; i++) {
// //     console.log(letters[i].charCodeAt(0));
// //     console.log(letters[i + 1].charCodeAt());
// //     console.log(letters[i].charCodeAt() - letters[i + 1].charCodeAt());

// //     if (letters[i].toLowerCase() >= letters[i + 1].toLowerCase()) {
// //       return false;
// //     }
// //   }

// //   return true;
// // }

// // console.log(isAlphabet('mnpq'));

// // const count = 10;

// // switch (true) {
// //   case count < 2:
// //     console.log('мало');
// //     break;

// //   case count <= 4:
// //     console.log('middle');
// //     break;

// //   default:
// //     console.log('many');
// // }

// // const getGuestsCount = (guestsInput) => {
// //   const numb = parseInt(guestsInput);

// //   if (!Object.is(NaN, numb)) {
// //     return '' + numb;
// //   }
// // };

// // console.log(getGuestsCount('5'));

// // function canTheyBook(adultsCount = 0, childrenCount = 0) {
// //   if (
// //     adultsCount > 0 &&
// //     adultsCount + childrenCount <= 8 &&
// //     (!childrenCount || childrenCount / adultsCount <= 2)
// //   ) {
// //     console.log(adultsCount > 0);
// //     console.log(adultsCount + childrenCount <= 8);
// //     console.log(!childrenCount || childrenCount / adultsCount <= 2);

// //     return true;
// //   }

// //   return false;
// // }

// // canTheyBook(1, 2);

// // function canTheyBook(adultsCount, childrenCount, babiesCount) {
// //   debugger;
// //   if (adultsCount === 0 || !adultsCount) {
// //     return false;
// //   }
// //   console.log(adultsCount > 0);
// //   console.log(adultsCount + childrenCount <= 8);
// //   console.log(childrenCount / adultsCount <= 2);
// //   console.log(childrenCount + adultsCount + babiesCount <= 9);
// //   console.log(adultsCount <= 8);

// //   if (
// //     adultsCount > 0 &&
// //     adultsCount + childrenCount <= 8 &&
// //     childrenCount / adultsCount <= 2 &&
// //     childrenCount + adultsCount + babiesCount <= 9 &&
// //     adultsCount <= 8
// //   ) {
// //     return true;
// //   }

// //   return false;
// // }

// // console.log(canTheyBook(2, 2, 1));

// // function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
// //   const totalCount = adultsCount + childrenCount + babiesCount;

// //   debugger;

// //   console.log(adultsCount === 0);
// //   console.log(adultsCount / childrenCount > 0.5);
// //   console.log(adultsCount / childrenCount + babiesCount > 0.5);
// //   console.log(totalCount > 8 && babiesCount === 0);
// //   console.log(adultsCount > 8);

// //   if (
// //     adultsCount === 0 ||
// //     adultsCount / childrenCount > 0.5 ||
// //     adultsCount / childrenCount + babiesCount > 0.5 ||
// //     (totalCount > 8 && babiesCount === 0) ||
// //     adultsCount > 8
// //   ) {
// //     return false;
// //   }

// //   if (totalCount <= 8) {
// //     return true;
// //   }

// //   // return false;
// // }

// // console.log(canTheyBook(0, 2, 2));

// // function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
// //   const totalCount = adultsCount + childrenCount + babiesCount;

// //   debugger;

// //   console.log(
// //     adultsCount > 0 &&
// //       adultsCount + childrenCount <= 8 &&
// //       (!childrenCount || childrenCount / adultsCount <= 2) &&
// //       (!childrenCount ||
// //         !babiesCount ||
// //         childrenCount + babiesCount / adultsCount <= 2)
// //   );

// //   console.log(adultsCount > 0);
// //   console.log(adultsCount + childrenCount <= 8);
// //   console.log(!childrenCount || childrenCount / adultsCount <= 2);
// //   console.log(
// //     !childrenCount ||
// //       !babiesCount ||
// //       childrenCount + babiesCount / adultsCount <= 2
// //   );

// //   if (
// //     adultsCount > 0 &&
// //     adultsCount + childrenCount <= 8 &&
// //     (!childrenCount || childrenCount / adultsCount <= 2) &&
// //     (!childrenCount ||
// //       !babiesCount ||
// //       (childrenCount + babiesCount) / adultsCount <= 2)
// //   ) {
// //     return true;
// //   }

// //   return false;
// // }

// // canTheyBook(3, 3, 3);
// // canTheyBook(1, 2, 0);

// // const user = {
// //   fistName: 'Misha',
// //   lastName: 'Grinko',
// //   'fistName $$Name': 'Misha',
// // };

// // console.log(user.fistName);
// // console.log(user.lastName);
// // console.log(user['fistName $$Name']);

// // const robots = [
// //   { coreVersion: 9 },
// //   { coreVersion: 13 },
// //   { coreVersion: 16 },
// //   { coreVersion: 9 },
// //   { coreVersion: 14 },
// // ];

// // function getOutdated(robots, newVersion) {
// //   let makeUpdate = [];
// //   debugger;
// //   for (let i = 0; i < robots.length; i++) {
// //     if (robots[i].coreVersion < newVersion) {
// //       makeUpdate.push(i);
// //     }
// //   }

// //   return makeUpdate;
// // }

// // console.log(getOutdated(robots, 18)); // === [0, 3]
// // getOutdated(robots, 14) === [0, 1, 3]
// // getOutdated(robots, 8) === []
// // getOutdated(robots, 18) === [0, 1, 2, 3, 4]

// // function countBoxes(boxes) {
// //   const boxesArr = [...boxes];
// //   const obj = {};

// //   debugger;

// //   for (let i = 0; i < boxesArr.length; ) {
// //     let counter = 1;

// //     for (let j = 1; j < boxesArr.length; j++) {
// //       if (boxesArr[i] === boxesArr[j]) {
// //         counter++;
// //         boxesArr.splice(j, 1);
// //         j -= 1;
// //       }
// //     }
// //     obj[boxesArr[i]] = counter;
// //     boxesArr.splice(i, 1);
// //   }

// //   return obj;
// // }

// // function countBoxes(boxes) {
// //   const boxesCount = {};

// //   debugger;

// //   for (const box of boxes) {
// //     if (!boxesCount[box]) {
// //       boxesCount[box] = 0;
// //     }

// //     boxesCount[box]++;
// //   }

// //   return boxesCount;
// // }

// // function countBoxes(boxes) {
// //   const countBoxes = {};

// //   for (let box of boxes) {
// //     if (!countBoxes[box]) {
// //       countBoxes[box] = 0;
// //     }
// //     countBoxes[box]++;
// //   }
// //   return countBoxes;
// // }

// // console.log(countBoxes('caacaaca313'));

// // const compareRobots = (robot1, robot2) => {
// //   debugger;

// //   const allKeys = { ...robot1 };
// //   const flag = true;

// //   for (const key in robot2) {
// //     if (!allKeys[key]) {
// //       allKeys[key] = '';
// //     }
// //   }

// //   for (const key in allKeys) {
// //     if (key === 'serialNo') {
// //       continue;
// //     }
// //     console.log((!robot1[key] || !robot2[key]) && robot1[key] !== robot2[key]);
// //     console.log(!robot1[key] || !robot2[key]);
// //     console.log(robot1[key] !== robot2[key]);

// //     if (!robot1[key] || !robot2[key] || robot1[key] !== robot2[key]) {
// //       return false;
// //     }
// //   }

// //   return true;
// // };

// // const compareRobots = (robot1, robot2) => {
// //   debugger;

// //   const robot1Arr = Object.entries(robot1);
// //   const robot2Arr = Object.entries(robot2);

// //   if (robot1Arr.length !== robot2Arr.length) {
// //     return false;
// //   }

// //   for (let i = 1; i < robot1Arr.length; i++) {
// //     console.log('robot1Arr[i] ', robot1Arr[i][0]);

// //     if (
// //       robot1Arr[i][0] !== robot2Arr[i][0] ||
// //       robot1Arr[i][1] !== robot2Arr[i][1]
// //     ) {
// //       return false;
// //     }
// //   }

// //   return true;
// //   // for (const [key, value] of Object.entries(robot1)) {
// //   //   if (key === 'serialNo') {
// //   //     continue;
// //   //   }

// //   //   console.log(!Object.hasOwn(robot2, key));
// //   //   console.log(robot1[key] !== robot2[key]);

// //   //   if (!Object.hasOwn(robot2, key) || robot1[key] !== robot2[key]) {
// //   //     return false;
// //   //   }

// //   //   return true;
// //   // }
// // };

// const compareRobots = (robot1, robot2) => {
//   // robots can't be the same if one have more fields than the other one
//   if (Object.keys(robot1).length !== Object.keys(robot2).length) {
//     return false;
//   }

//   console.log('Object.keys(robot1)', Object.keys(robot1));
//   console.log('Object.keys(robot1).length', Object.keys(robot1).length);

//   debugger;

//   for (const key in robot1) {
//     // we don't compare serialNo
//     if (key === 'serialNo') {
//       continue;
//     }

//     console.log(robot1[key]);

//     // if at least one value is different
//     if (robot1[key] !== robot2[key]) {
//       return false;
//     }
//   }

//   // we did not find different values
//   return true;
// };

// console.log(
//   compareRobots({ serialNo: 1, chipVer: 12 }, { serialNo: 5, engineVer: 12 })
// );
