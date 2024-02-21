"use strict";

// const myName = "Misha";
// let myAge = 39;

// let me = {
//   name: "Misha",
//   age: "39",
// };

// const myFriend = {
//   name: "John",
//   age: 25,
// };

// let quest = myFriend;

// quest.age++;
// quest = null;

// console.log(myFriend);

//! Клонирование объекта

// const bob = {
//   name: "Bob",
//   surname: "Smith",
//   partner: null,
// };

// const bobCopy = clone(bob);

// function clone(sourse) {
//   return {
//     ...sourse,
//   };
// }

// function clone2(sourse) {
//   return Object.assign({}, sourse, { age: 39 });
// }

// const bobClone = clone2(bob);

// console.log(bobCopy);
// console.log(bobClone);

//! Клонирование вариант2

// const bob = {
//   name: "Bob",
//   surname: "Smith",
//   partner: null,
// };

// const bobCopy = clone(bob);

// function clone(sourse) {
//   const { name: firstName, surname, age = 10 } = sourse;
//   return {
//     name: firstName,
//     age,
//     x: 123,
//     ...{ a: 1, b: 2 },
//   };
// }

// console.log(bobCopy);

// const kobi = {
//   chipVer: 9,
//   serialNo: 413,
//   wheels: 2,
// };

// const parts = [{ wheels: 6 }, { chipVer: 16 }, { displays: 2 }];

// upgradeRobot(kobi, parts);

// // kobi.serialNo === 413;
// // kobi.wheels === 6;
// // kobi.chipVer === 16;
// // kobi.displays === 2;

// function upgradeRobot(robot, parts) {
//   return Object.assign(robot, ...parts);
// }

// console.log(kobi);
// console.log(upgradeRobot(kobi, parts));

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
function fillTank(customer, fuelPrice, amount) {
  const lacksFullTank =
    Math.floor(
      (customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains) * 10
    ) / 10;
  const costFullTank = Math.round(lacksFullTank * fuelPrice * 100) / 100;

  debugger;

  if (lacksFullTank < 2 || amount < 2 || customer.money <= 0) {
    return;
  }

  if (!amount || amount > lacksFullTank) {
    if (costFullTank <= customer.money) {
      customer.vehicle.fuelRemains = customer.vehicle.maxTankCapacity;
      customer.money = Math.round((customer.money - costFullTank) * 100) / 100;
    }
  }

  if (amount) {
    const costAmount = amount * fuelPrice;

    if (
      costAmount <= customer.money &&
      customer.vehicle.maxTankCapacity >= customer.vehicle.fuelRemains + amount
    ) {
      customer.vehicle.fuelRemains =
        Math.floor((customer.vehicle.fuelRemains + amount) * 10) / 10;
      customer.money = Math.round((customer.money - costAmount) * 100) / 100;
    }
    if (costAmount >= customer.money) {
      let mustFuel = Math.floor((customer.money / amount) * 10) / 10;
      let costMoney = Math.round(mustFuel * amount * 100) / 100;
      customer.vehicle.fuelRemains = customer.vehicle.fuelRemains + mustFuel;
      customer.money = customer.money - costMoney;
    }
  }
}

const customer = {
  money: 140,
  vehicle: {
    maxTankCapacity: 40,
    fuelRemains: 14,
  },
};

fillTank(customer, 10, 9.47);

console.log(customer);
