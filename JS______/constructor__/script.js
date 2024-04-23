'use strict';


// const bob = {
//   name: 'Bob',
//   role: 'User',
//   friends: [],

//   getInfo() {
//     return `${this.role} ${this.name} has ${this.friends.length} friends.`
//   }
// }

function User(name, role = 'User') {
  // const user = Object.create(baseUser); //  const user = {}; Object.setPrototypeOf(user, baseUser);


  this.name = name;
  this.role = role;
  this.friends = [];


  // return this;
}

User.prototype = {
  getInfo() {
    return `${this.role} ${this.name} has ${this.friends.length} friends.`
  }

}

const bob = createUser('Bob');
const alice = createUser('Alice', 'Admin');


console.log(bob.getInfo());
console.log(alice.getInfo());



