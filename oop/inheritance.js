//we have two types of inheritance i.e. prototypical and classical Inheritance
//protoype is like a parent to another object
/*
    suppose a circle and shape are two classes
    circle is child of shape, so shape is prototype of circle
*/

// Every object (except the root object) has a prototype (parent).
// To get the prototype of an object:
Object.getPrototypeOf(obj);

// In Chrome, you can inspect "__proto__" property. But you should
// not use that in the code.

// To get the attributes of a property:
Object.getOwnPropertyDescriptor(obj, "propertyName");

// To set the attributes for a property:
Object.defineProperty(obj, "propertyName", {
  configurable: false, // cannot be deleted
  writable: false,
  enumerable: false,
});

// Constructors have a "prototype" property. It returns the object
// that will be used as the prototype for objects created by the constructor.
Object.prototype === Object.getPrototypeOf({});
Array.prototype === Object.getPrototypeOf([]);

// All objects created with the same constructor will have the same prototype.
// A single instance of this prototype will be stored in the memory.
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true

// Any changes to the prototype will be immediately visible to all objects
// referencing this prototype.

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory.
Circle.prototype.draw = function () {};

// To get the own/instance properties:
Object.keys(obj);

// To get all the properties (own + prototype):
for (let key in obj) {
}

//Prototypical inheritance
function Shape() {}
function Circle() {}

// Prototypical inheritance
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Rectangle(color) {
  // To call the super constructor
  Shape.call(this, color);
}

// Method overriding
Shape.prototype.draw = function () {};
Circle.prototype.draw = function () {
  // Call the base implementation
  Shape.prototype.draw.call(this);

  // Do additional stuff here
};

// Don't create large inheritance hierarchies.
// One level of inheritance is fine.

// Use mixins to combine multiple objects
// and implement composition in JavaScript.
const canEat = {
  eat: function () {},
};

const canWalk = {
  walk: function () {},
};

function mixin(target, ...sources) {
  // Copies all the properties from all the source objects
  // to the target object.
  Object.assign(target, ...sources);
}

function Person() {}

mixin(Person.prototype, canEat, canWalk);
