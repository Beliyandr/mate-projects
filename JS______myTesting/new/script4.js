'use strict';

const map = new Map([
  // ['Hi', 'Привет'],
  // ['Hi1', 'Привет'],
  // ['42', 'Jndtn'],
  // [true, false],
  // [{}, 'обїеукт'],
  // [() => { }, 'обїеукт'],
])


console.log(map);

map.set('42', 'Hello')
map.set(42, 'string')




console.log(map);

let a = map.get(42)


console.log(a);
