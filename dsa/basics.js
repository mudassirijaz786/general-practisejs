//before going to learn dsa in js learn some new syntax of js as es6 or above

//some information about class in js
/*
    Classes are blueprints that when created make objects known as instances
    Classes are created with the new keyword
    The constructor function is a special function that gets run when the class is instantiated
    Instance methods can be added to classes similar to methods in objects
    Class methods can be added using the static keyword
    There is no class concept in js, under the hood class is also an object
*/

//class
class Student {
  //constructor
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  //instance methods
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
}
//objects of class
let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  //method of class is defined using static keyword
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}
//object creation
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
//calling methods using Class.method()
console.log(Point.distance(p1, p2)); // 7.0710678118654755
