//OOP
//programming paradigm centered around objects rather than functions
/*
    it has dour pillars 
    1) encapsulation - reduce complexity + increase usability 
    2) abstraction   - reduce complexity + isolated impact of changes
    3) inheritance   - eliminate redundant code
    4) polymorphism  - (it means many forms) refactor ugly switch case statements
*/

//creating objects

// The simplest way to create an object is using an object literal
const circle = {
  radius: 1,
  draw: function () {},
};

// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor.

// Factory function
createCircle = (radius) => {
  return {
    radius,
    draw: function () {},
  };
};

// Constructor function
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.draw = function () {};
  }
}

// Every object has a "constructor" property which returns the function that was used to construct or create that object.
const x = {};
x.constructor; // returns Object()

// In JavaScript, functions are objects. They have properties and methods.
Circle.name;
Circle.length;
Circle.constructor; // returns Function()

// Value types are copied by their value, reference types are copied by their reference.
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array

// JavaScript objects are dynamic. You can add/remove properties:
circle.location = {};
circle["location"] = {};

delete circle.location;

// To enumerate the members in an object:
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle);

// To see if an object has a given property
if ("location" in circle)
  // Abstraction means hiding the complexity/details and showing only the essentials.
  // We can hide the details by using private members. Replace "this" with "let".

  function Circle(radius) {
    // Public member
    this.radius = radius;

    // Private member
    let defaultLocation = {};
  }

// To define a getter/setter, use Object.defineProperty():

Object.defineProperty(this, "defaultLocation", {
  get: function () {
    return defaultLocation;
  },
  set: function (value) {
    defaultLocation = value;
  },
});

// 1 object literal

let circleLiteral = {
  //properties
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  //methods
  draw: function () {
    console.log("draw");
  },
};

circleLiteral.draw();

// 2 factory functions

createCircle = (radius) => {
  return {
    radius,
    draw: () => {
      console.log("draw");
    },
  };
};

const circleFactory = createCircle(2);
circleFactory.draw();

// 3 constructor functions

function CircleClass(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("draw");
  };
}

const circleConstructor = new CircleClass(2);
circleConstructor.draw();
