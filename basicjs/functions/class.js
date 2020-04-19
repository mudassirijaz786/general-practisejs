// The class declaration creates a new class with a given name using prototype-based inheritance.

class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log(new Polygon(4, 3).area);
// expected output: 12
