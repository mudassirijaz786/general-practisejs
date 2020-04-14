//when to use arrays?
//when we need order because arrays are ordered
//when we need fast access or insertion and removal (they depends... )
let students = ["Mudassir", "Ijaz", ["Naveed", "Muhammad Ali"]];
let students2 = ["another", "name"];
//bigO of arrays
/*
    insertion   it depends... inserting at end take O(1) and at start requires O(n) because indexes are reindexed
    removal     it depends... same as insertion
    searching   O(n)
    access      O(1)
    swapping    O(1)
    prepending  O(n) via unshift, since it requires reassigning all the indexes
*/

//use of some methods of objects but you don't need to know all of em
students.push("new name"); //O(1)
students.pop(); //O(1)
students.shift(); //O(n)
students.unshift("another new name"); //O(n)
students.concat(students2); //O(n)
students.slice(1, 3); //O(n)
students.splice(1, 3, "lemon", "banana"); //O(n)
students.sort(); //O(nlog(n))
// also forEach, map, filter, reduce etc take O(n)
