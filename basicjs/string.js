//about numbers
let integer = "2";
let floating = "2.23";
console.log(parseInt(integer));
// expected output: 2
console.log(parseFloat(floating));
// expected output: 2.23

var dateObjectName = new Date();
console.log(dateObjectName);
// expected output: exact date and time

//about string
let string = "iamaboy";
let string2 = "iliveinusa";
let string3 = " whitespaces ";
let string4 = "i am a boy";
console.log(string.charAt(2));
// expected output: m

console.log(string.length);
// expected output: 7

console.log(string.concat(string2));
// expected output: iamaboyiliveinusa

console.log(string3.trim());
// expected output: whitespaces

console.log(string4.split(" "));
// expected output: whitespaces

//string litteral
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`); // "Fifteen is 15 and not 20."
