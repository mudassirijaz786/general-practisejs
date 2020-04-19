// Animal properties and method encapsulation
var Animal = {
  type: "Invertebrates", // Default value of properties
  displayType: function () {
    // Method which will display type of Animal
    console.log(this.type);
  },
};

// Create new animal type called animal1
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Output:Fishes

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
var mycar = new Car("Eagle", "Talon TSi", 1993);
console.log(mycar);

// The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
