'use strict';

// function User(name, role = 'User') {
//   this.name = name;
//   this.role = role;
//   this.friends = [];
// }

// User.prototype.getInfo = function () {
//   const { name, role, friends } = this;

//   return `${role} ${name} has ${friends.length} friends.`
// }


// const bob = new User('Bob');

// console.log(bob.getInfo());


// class Human {
//   friends = [];
//   age = 0;

//   constructor(name, role = 'User') {
//     this.name = name;
//     this.role = role;
//   }

//   get fullName() {
//     return 'asff'
//   }

//   getInfo() {
//     const { name, role, friends } = this;

//     return `${role} ${name} has ${friends.length} friends.`
//   }


// }

// const bob2 = new Human('Bob');

// console.log(bob2.getInfo());



// class User {
//   static ROLE_USER = 'User';
//   static ROLE_ADMIN = 'Admin';

//   static getAverageAge(users) {
//     const sum = users.reduce((total, user) => total + user.age, 0,)

//     return sum / users.length;
//   }

//   friends = [];
//   age = 0;

//   constructor(name, role = 'User') {
//     this.name = name;
//     this.role = role;
//   }

//   getInfo() {
//     const { name, role, friends } = this;

//     return `${role} ${name} has ${friends.length} friends.`
//   }


// }

// const bob = new User('Bob', User.ROLE_ADMIN);

// console.log(bob.ROLE_ADMIN);
// console.log(User.getAverageAge([bob]));


class Human {
  age = 0;

  constructor(name) {
    this.name = name;
  }

  celebrateBirthday() {
    this.age++;

    console.log(`${this.name} is now ${this.age}`);

  }
}



class User extends Human {

  friends = [];

  constructor(name, role = 'User') {
    super(name);

    this.role = role;
  }

  get fullName() {
    return `${this.role} ${this.name}`;
  }

  printInfo() {
    const { friends, fullName } = this;

    console.log(`${fullName} has ${friends.length} friends.`)
  }
}

const bob = new User('Bob');

bob.printInfo()
