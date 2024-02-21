'use strict';


function User(name, age = 0) {
  this.name = name;
  this.age = age;
}

User.prototype.celebrateBirthday = function () {
  this.age++;

  console.log(`${this.name} is now ${this.age}`);
};

const misha = new User('Misha', 30);
misha.celebrateBirthday();

