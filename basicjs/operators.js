//  The more commonly-used abstract comparison (e.g. ==) converts the operands to the same type before making the comparison
console.log(1 == 1);
// expected output: true

console.log("1" == 1);
// expected output: true

console.log(1 === 1);
// expected output: true

console.log("1" === 1);
// expected output: false

console.log(1 != 2);
// expected output: true

console.log(2 !== 2);
// expected output: false

//ternary
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(1));
// expected output: "$2.00"
