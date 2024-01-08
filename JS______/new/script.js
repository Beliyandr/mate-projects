'use strict';


// const shops = {
//   elec: {
//     wheels: 50,
//     rebock: 30
//   },

//   room: {
//     door: 'red',
//     make: 'green',
//   },
//   eclipse: {
//     green: 'day'
//   }
// }

// const entries = Object.entries(shops)
// const values = Object.values(shops)
// const valuesNew = Object.assign({}, ...values);
// const keys = Object.keys(shops)

// console.log('values', values);
// console.log('keys', keys);
// console.log('valuesNew', valuesNew);

// for (let key in valuesNew) {
//   console.log('key', key)
//   console.log('val', valuesNew[key])
// }


//!  My solution  !)))))

/**
 * @typedef {Object} Vehicle
 * @property {number} maxTankCapacity
 * @property {number} fuelRemains
 *
 * @typedef {Object} Customer
 * @property {number} money
 * @property {Vehicle} vehicle
 *
 * @param {Customer} customer
 * @param {number} fuelPrice
 * @param {number} amount
 */
// function fillTank(customer, fuelPrice, amount) {
//   const lacksFullTank = Math.floor((customer.vehicle.maxTankCapacity
//     - customer.vehicle.fuelRemains) * 10) / 10;
//   const costFullTank = Math.round(lacksFullTank * fuelPrice * 100) / 100;

//   debugger;

//   if (lacksFullTank < 2 || amount < 2 || customer.money <= 0) {
//     return;
//   }

//   if (!amount || amount > lacksFullTank) {
//     if (costFullTank <= customer.money) {
//       customer.vehicle.fuelRemains = customer.vehicle.maxTankCapacity;
//       customer.money = Math.round((customer.money - costFullTank) * 100) / 100;
//     }

//     return;
//   }

//   if (amount) {
//     const costAmount = (Math.floor(amount * 10) / 10) * fuelPrice;

//     if (
//       (costAmount <= customer.money)
//       && customer.vehicle.maxTankCapacity
//       >= customer.vehicle.fuelRemains + amount
//     ) {
//       customer.vehicle.fuelRemains
//         = Math.floor((customer.vehicle.fuelRemains + amount) * 10) / 10;
//       customer.money = Math.round((customer.money - costAmount) * 100) / 100;

//       return;
//     }

//     if (costAmount >= customer.money) {
//       const differentFuel = customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains;
//       const differentFuelCost = differentFuel * fuelPrice;

//       if (differentFuelCost <= customer.money) {
//         customer.vehicle.fuelRemains
//           = customer.vehicle.fuelRemains + differentFuelCost;

//         customer.money
//           = customer.money - differentFuelCost;
//       }
//       if (differentFuelCost > customer.money) {
//         const countQuantityFuelMoney = Math.floor((customer.money / fuelPrice) * 10) / 10;

//         customer.vehicle.fuelRemains
//           = customer.vehicle.fuelRemains + countQuantityFuelMoney;
//         customer.money = 0;
//       }
//     }



//   }
// }


// const customer = {
//   money: 360,
//   vehicle: {
//     maxTankCapacity: 45,
//     fuelRemains: 2,
//   },
// };

// fillTank(customer, 10, 43);

// console.log(customer);


// it(`pour not more fuel than client can buy`, () => {
//   const customer = {
//     money: 360,
//     vehicle: {
//       maxTankCapacity: 45,
//       fuelRemains: 2,
//     },
//   };

//   fillTank(customer, 10, 43);

//   expect(customer)
//     .toEqual({
//       money: 0,
//       vehicle: {
//         maxTankCapacity: 45,
//         fuelRemains: 38,
//       },
//     });
// });



// // it(`round fuel amount down to tenth`, () => {
// //   const customer = {
// //     money: 140,
// //     vehicle: {
// //       maxTankCapacity: 40,
// //       fuelRemains: 14,
// //     },
// //   };

// //   fillTank(customer, 10, 9.47);

// //   expect(customer)
// //     .toEqual({
// //       money: 46,
// //       vehicle: {
// //         maxTankCapacity: 40,
// //         fuelRemains: 23.4,
// //       },
// //     });
// // });


function fillTank(
  customer,
  fuelPrice,
  amount = Infinity, // to pour as much as possible
) {
  // We need to know how much fuel we can actually pour
  const freeSpace = customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains;
  const canBuy = customer.money / fuelPrice;

  // not to pour more full than the client wants, can buy or the tank can accommodate
  const requiredAmount = Math.min(amount, freeSpace, canBuy);
  const roundedAmount = roundFuel(requiredAmount);

  // We can't pour less than 2 liters
  if (roundedAmount < 2) {
    return;
  }

  // We pour the tank and take money
  customer.vehicle.fuelRemains += roundedAmount;
  customer.money -= roundPrice(roundedAmount * fuelPrice);
}

// We created separate rounding function not to complicate the code
function roundFuel(fuel) {
  return Math.floor(fuel * 10) / 10;
}

function roundPrice(price) {
  return Math.round(price * 100) / 100;
}







const customer = {
  money: 360,
  vehicle: {
    maxTankCapacity: 45,
    fuelRemains: 2,
  },
};

fillTank(customer, 10, 43);

console.log(customer);
