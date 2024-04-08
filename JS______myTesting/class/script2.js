// class BaseRobot {
//   constructor(name, weight, coords, chipVersion) {
//     this.name = name;
//     this.weight = weight;
//     this.coords = coords.length ? coords : { 'x': 0, 'y': 0 };
//     this.chipVersion = chipVersion;
//   }

//   goForward(step = 1) {
//     this.coords.y += step
//   };

//   goBack(step = 1) {
//     this.coords.y -= step
//   };

//   goRight(step = 1) {
//     this.coords.x += step
//   };

//   goLeft(step = 1) {
//     this.coords.x -= step
//   }

//   getInfo() {
//     return `Robot: ${this.name}, Chip version: ${this.chipVersion}, Weight: ${this.weight}`
//   }

// }

// class FlyingRobot extends BaseRobot {
//   constructor() {
//     super();
//   }

//   goUp(step = 1) {
//     this.coords.z += 1;
//   }

//   goDown(step = 1) {
//     this.coords.z -= 1;
//   }
// }

// class DeliveryDrone extends FlyingRobot {
//   constructor(maxLoadWeight = 0, currentLoad = 0) {
//     super();

//     this.maxLoadWeight = maxLoadWeight;
//     this.currentLoad = currentLoad;

//   }

//   hookLoad(cargo) {
//     if (this.currentLoad === 0 && cargo.weigth < this.maxLoadWeight) {
//       this.currentLoad = { ...cargo };
//     }
//   }

//   unhookLoad() {
//     this.currentLoad = null
//   }
// }


// const robot = new BaseRobot('elen', 30, {}, 5)

// console.log(robot.coords);
// //

// class Calendar {
//   time = [];

//   book(start, end) {
//     debugger
//     if (this.time.length === 0) {
//       this.time.push(start, end);
//       return true
//     }
//     for (let i = 0; i < this.time.length; i++) {

//       if (start >= this.time[i] && (end <= this.time[i + 1] || this.time.length === i + 1)) {
//         this.time.push(start, end);
//         this.time.sort();
//         return true;
//       }
//     }
//     return false
//   }
// }

class Calendar {
  time = [];
  booksTime = [];

  book(start, end) {

    if (this.time.length === 0) {
      this.time.push([start, end]);
      this.booksTime.push(start, end);
      return true
    }
    for (let i = 0; i < this.booksTime.length; i++) {

      if (start >= this.booksTime[i] && (end < this.booksTime[i + 1] || this.booksTime.length === i + 1)) {
        this.time.push(start, end);
        this.booksTime.push(start, end);
        this.booksTime.sort();
        return true;
      }
    }
    return false
  }
}



const calendar = new Calendar();


console.log('10,20', calendar.book(10, 20));
// console.log('34,65', calendar.book(10, 20));
console.log('34,65', calendar.book(34, 65));
console.log('20,34', calendar.book(20, 34));
console.log('0,45', calendar.book(0, 45));
console.log('45,50', calendar.book(45, 50));

// console.log(calendar.book(5, 10));
// console.log(calendar.book(7, 25));
// console.log(calendar.book(1, 30));
// console.log(calendar.book(10, 25));

// true
// false
// false
// true




