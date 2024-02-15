"use strict";

function makeWarehouse(goods) {
  let weightArr = [];
  const warehouse = {
    weight: 0,
    averageWeight: 0,
  };
debugger;
  const params = (...args) => {
    weightArr = [...goods, ...args];
    // const { weight, averageWeight } = warehouse;

    if (args.length) {
      warehouse.weight = weightArr.reduce((sumWeight, item) => {
        return sumWeight + item;
      }, 0);

      warehouse.averageWeight = Math.ceil(warehouse.weight / weightArr.length);
    } else {
      return warehouse;
    }
  };

  return params;
}

const firstWarehouse = makeWarehouse([10, 20])
firstWarehouse(); // { totalWeight: 30, averageWeight: 15 }

firstWarehouse(10, 20, 30, 40, 10, 10);
firstWarehouse(56, 44);

firstWarehouse(); // { totalWeight: 250, averageWeight: 25 }

const secondWarehouse = makeWarehouse([10])
secondWarehouse() // { totalWeight: 10, averageWeight: 10 }

firstWarehouse()

