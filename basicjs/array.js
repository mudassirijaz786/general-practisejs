// concat
let myArray = new Array("1", "2", "3");
myArray = myArray.concat("a", "b", "c");
console.log(myArray);
// myArray is now ["1", "2", "3", "a", "b", "c"]

// join
myArray = new Array("Wind", "Rain", "Fire");
let list = myArray.join(" - "); // list is "Wind - Rain - Fire"
console.log(list);

// push
myArray = new Array("1", "2");
myArray.push("3"); // myArray is now ["1", "2", "3"]
console.log(myArray);

// pop
myArray = new Array("1", "2", "3");
let last = myArray.pop();
// myArray is now ["1", "2"], last = "3"
console.log(myArray);

// shift
myArray = new Array("1", "2", "3");
let first = myArray.shift();
// myArray is now ["2", "3"], first is "1"
console.log(myArray);

// unshift
myArray = new Array("1", "2", "3");
myArray.unshift("4", "5");
// myArray becomes ["4", "5", "1", "2", "3"]
console.log(myArray);

// slice
myArray = new Array("a", "b", "c", "d", "e");
myArray = myArray.slice(1, 4);
// starts at index 1 and extracts all elements
// until index 3, returning [ "b", "c", "d"]
console.log(myArray);

// splice
myArray = new Array("1", "2", "3", "4", "5");
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
console.log(myArray);

// reverse
myArray = new Array("1", "2", "3");
myArray.reverse();
// transposes the array so that myArray = ["3", "2", "1"]
console.log(myArray);

// sort
myArray = new Array("Wind", "Rain", "Fire");
myArray.sort();
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]
console.log(myArray);

// forEach
let a = ["a", "b", "c"];
a.forEach(function (element) {
  console.log(element);
});
// logs each item in turn

// map
let a1 = ["a", "b", "c"];
let a2 = a1.map((item) => {
  return item.toUpperCase();
});
console.log(a2); // logs ['A', 'B', 'C']

// filter
a1 = ["a", 10, "b", 20, "c", "string"];
a2 = a1.filter((item) => {
  return typeof item === "number";
});
console.log(a2); // logs [10, 20]
