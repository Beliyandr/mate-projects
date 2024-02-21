'use strict';

// const grandFather = {
//   name: 'grandFather',
//   surname: 'Surname',
// }
// const father = {
//   name: 'Father',
//   __proto__: grandFather,

//   sayHi() {
//     console.log(`Hi, I am ${this.name} ${this.surname}`);
//   }
// }

// const child = {
//   name: 'Child',
//   __proto__: father,
// }

// console.log(child.surname);

// father.sayHi()
// child.sayHi()


const mainCore = {
  getMainInfo() {
    return `Robot ${this.name} cpu version ${this.cpuVersion}`;
  },
  getAdditionalInfo() {
    return `Update version: ${this.softwareVersion}`;
  },
  updateRobot(updateVersion) {
    this.softwareVersion = updateVersion;

    return `${this.name} updated to ${this.softwareVersion}`;
  },
};

const navigationCore = {
  getCoords() {
    return `x=${this.coords.x} y=${this.coords.y}`;
  },

  setTargetCoords(x, y) {
    this.target.coords.x = x;
    this.target.coords.y = y;
  },
};

const movementCore = {
  moveForward(step = 1) {
    this.coords.y += step;
  },
  moveBack(step = 1) {
    this.coords.y -= step;
  },
  moveLeft(step = 1) {
    this.coords.x -= step;
  },
  moveRight(step = 1) {
    this.coords.x += step;
  },
};

const kerbin = {
  name: 'Kerbin',
  cpuVersion: 145.4,
  softwareVersion: 23.45,
  coords: {
    x: 0,
    y: 0,
  },
  target: {
    coords: {
      x: 0,
      y: 0,
    },
  },
};

Object.setPrototypeOf(kerbin, mainCore);
Object.setPrototypeOf(kerbin, navigationCore);
Object.setPrototypeOf(kerbin, movementCore);





kerbin.setTargetCoords(5, 5);
console.log(kerbin);

// Use Object.setPrototypeOf
