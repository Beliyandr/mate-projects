'use strict';


const shops = {
  elec: {
    wheels: 50,
    rebock: 30
  },

  room: {
    door: 'red',
    make: 'green',
  },
  eclipse: {
    green: 'day'
  }
}

const entries = Object.entries(shops)
const values = Object.values(shops)
const valuesNew = Object.assign({}, ...values);
const keys = Object.keys(shops)

console.log('values', values);
console.log('keys', keys);
console.log('valuesNew', valuesNew);

for (let key in valuesNew) {
  console.log('key', key)
  console.log('val', valuesNew[key])
}
