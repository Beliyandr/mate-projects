'use strict';

// const bob = {
//   firstName: 'Bob',
//   lastName: 'Smyth',
//   age: 39,

//   print: printInfo,
//   print2(age) {

//   }
// }

// bob.print();


// function printInfo() {
//   const { firstName, lastName, age } = this;

//   const message = `!!!${firstName} ${lastName} is ${age}!!!`

//   console.log(message);
// }


const admin = {
  fullName: 'Bob Smith',
  // ---
}

congratulate(admin);
admin.fullName = 'Alice Black';
congratulate(admin);


function congratulate(user) {
  console.log(`Hi, ${user.fullName}`);
}

