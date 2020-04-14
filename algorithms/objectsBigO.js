//when to use objects?
//when we don't need order because objects are unordered
//when we need fast access/insertion and removal
let students = {
  firstName: "Mudassir",
  lastName: "Ijaz",
  instructors: ["Naveed", "Muhammad Ali"],
};
//bigO of objects
/*
    insertion O(1)
    removal   O(1)
    updating  O(1)
    searching O(n)
    access    O(1)
*/
//use of some methods of objects
console.log(Object.keys(students.instructors)); // took O(n) because it's searching
console.log(Object.entries(students.instructors)); // took O(n) because it's also searching
console.log(students.hasOwnProperty("firstName")); // took O(1) because it's also accessing some information
