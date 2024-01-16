'use strict';

console.log(

  // calculate('add', 6, 3), //
  // calculate('subtract', 6, 3), //
  // calculate('multiply', 6, 3), //

  calculate(add, 6, 3), //
  calculate(subtract, 42, 17), //
  calculate(multiply, 6, 3), //
  calculate((a, b) => a / b, 6, 3), //

);

function calculate(operation, x, y) {
  // operation = #f_add
  // a = 6,
  // b = 3

  return operation(x, y)

  // #f_add(6,3)
  // 9

  // switch (operation) {
  //   case 'add':
  //     return add(a, b);

  //   case 'subtract':
  //     return subtract(a, b);

  //   case 'multiply':
  //     return multiply(a, b);
  // }
}


function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}
