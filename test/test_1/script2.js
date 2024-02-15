// // function colorStones(stones) {
// //   const arr = [];

// //   for (let i = 0; i < stones.length; i++) {
// //     if (stones[i] === stones[i + 1]) {
// //       arr.push(stones[i + 1]);
// //     }
// //   }

// //   return stones.length - arr.length;
// // }

// // console.log(colorStones('rrggbbrgb'));

// // function countNextSmaller(numbers) {
// //   const resultArr = [];

// //   for (let i = 0; i < numbers.length; i++) {
// //     let counter = 0;

// //     for (let j = i + 1; j < numbers.length; j++) {
// //       if (numbers[i] > numbers[j]) {
// //         counter++;
// //       }
// //     }
// //     resultArr.push(counter);
// //   }

// //   return resultArr;
// // }

// // console.log(countNextSmaller([5, 1, 2, 1]));

// // function getRowWeights(people) {
// //   // write code here
// // }

// // console.log(0 % 2);

// // const suspects = {
// //   Tim: ['Bart', 'Laura', 'Helen'],
// //   Bob: ['Edward', 'Mike', 'Helen'],
// //   Margaret: ['Amy', 'Laura'],
// // };

// // const dead = ['Helen', 'Mike'];

// // function getKiller(suspects, dead) {
// //   for (const key in suspects) {
// //     let counter = 0;
// //     for (const human of dead) {
// //       if (suspects[key].includes(human)) {
// //         counter++;
// //       }
// //     }
// //     if (counter === dead.length) {
// //       return key;
// //     }
// //   }
// // }

// // console.log(getKiller(suspects, dead));

// // function whoIsOnline(friends) {
// //   if (!friends.length) {
// //     return {};
// //   }

// //   const online = [];
// //   const offline = [];
// //   const away = [];

// //   debugger;

// //   for (const user of friends) {
// //     if (user.status === 'online' && user.lastActivity > 10) {
// //       online.push(user.username);
// //     }

// //     if (
// //       (user.status === 'online' && user.lastActivity < 10) ||
// //       user.status === 'away'
// //     ) {
// //       away.push(user.username);
// //     }
// //     offline.push(user.username);
// //   }

// //   return { online: online, offline: offline, away: away };
// // }
// // const friends = [
// //   {
// //     username: 'David',
// //     status: 'online',
// //     lastActivity: 10,
// //   },
// //   {
// //     username: 'Lucy',
// //     status: 'offline',
// //     lastActivity: 22,
// //   },
// //   {
// //     username: 'Bob',
// //     status: 'online',
// //     lastActivity: 104,
// //   },
// // ];
// // console.log(whoIsOnline(friends));

// function addNumbers(object) {
//   const objValues = Object.values(object);
//   let sum = 0;

//   for (const num of objValues) {
//     if (num >= 0) {
//       sum += num;
//     }
//   }

//   return sum;
// }

// console.log(
//   addNumbers({
//     one: 1,
//     two: '2',
//     three: 3,
//   })
// );

// function countMatchingSocks(colors) {
//   const socksWithoutPair = {};
//   let numberOfPairs = 0;

//   debugger;

//   for (const color of colors) {
//     // if we already have a sock of current color
//     if (socksWithoutPair[color] === 1) {
//       // we have found another pair
//       numberOfPairs++;
//       socksWithoutPair[color] = 0;
//     } else {
//       socksWithoutPair[color] = 1;
//     }
//   }

//   return numberOfPairs;
// }

// console.log(countMatchingSocks([10, 20, 30, 10, 50, 60]));
