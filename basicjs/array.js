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

//how to copy arrays
var array1 = Array(3).fill(2);
// console.log(array1);

var array2 = Array.from(Array(7), (x, index) => index + 1);
// console.log(array2);

var array3 = [...new Array(4)];
// console.log(array3);

var array4 = Array.of(5); // [5]
// console.log(array4);
var array5 = Array(5); // Array(5) {length: 5}
// console.log(array5);

var array6 = "string";
// console.log([...array6]);

var array7 = [12, 42, 34];
// console.log([...array7.entries()]);

var array8 = [1, 2, 3];
var array9 = [1, 2, 3];
// console.log(array8 == array9); // return false because the reference to each of the arrays points to a different location in memory

// following are shallow copy of the array
// START
var array10 = [1, 2, 3];
var array10copied = array10;
// console.log(array10 == array10copied); // true because both array10 and array10copied point to the same location in memory and are equal
array10copied.pop();
// console.log(array10);
// console.log(array10copied);

var array11 = [1, 2, 3];
var array11cloned = array11.slice();
// console.log(array11 == array11cloned); // return false because the reference to each of the arrays points to a different location in memory
array11cloned.pop();
// console.log(array11);
// console.log(array11cloned);

var array12 = [1, 2, 3];
var array12cloned = array12.concat();
// console.log(array12 == array12cloned); // return false because the reference to each of the arrays points to a different location in memory
array12cloned.pop();
// console.log(array12);
// console.log(array12cloned);

var array13 = [1, 2, 3];
var array13cloned = Array.from(array13);
// console.log(array13 == array13cloned); // return false because the reference to each of the arrays points to a different location in memory
array13cloned.pop();
// console.log(array13);
// console.log(array13cloned);

let array14 = [1, 2, 3];
let [...array14cloned] = array14;
// console.log(array14 == array14cloned); // return false because the reference to each of the arrays points to a different location in memory
array14cloned.pop();
// console.log(array14);
// console.log(array14cloned);
// END

const arrayObject = [1, 2, 3, 4, [3, 2, 3]];
const arrayObjectCloned = JSON.parse(JSON.stringify(arrayObject));
arrayObject.pop();
// console.log(arrayObject);
// console.log(arrayObjectCloned);
