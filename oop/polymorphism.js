/*
    Polymorphism is one of the tenets of Object-Oriented Programming (OOP). 
    It is the practice of designing objects to share behaviors and to be able to override shared behaviors with specific ones. 
    Polymorphism takes advantage of inheritance in order to make this happen.

    Due to polymorphism, we can set up our more 
    specific constructors, dubbed child constructors or subclasses, to have the same properties as their parents, or superclass, 
    for them to then override or remove as seen fit.



*/

// Autos require a make, model, and year, and a drive() method
class Auto {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  drive() {
    console.log("Vroom Vroom!");
  }
}

// Cars are specifically Autos that are generally smaller and more efficient.
class Car extends Auto {
  constructor(make, model, year) {
    super(make, model, year);
    this.efficient = true;
    this.size = "smaller";
  }
}

// Trucks are larger and less efficient but have a bed to put things in.
class Truck extends Auto {
  constructor(make, model, year) {
    super(make, model, year);
    this.efficient = false;
    this.size = "larger";
    this.bed = {};
  }

  bed(inOut, item) {
    if (inOut === "in") {
      this.bed[item] = item;
    } else if (inOut === "out") {
      const removed = this.bed[item];
      delete this.bed[item];
      return removed;
    }
  }
}
