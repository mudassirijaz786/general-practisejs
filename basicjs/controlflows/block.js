// A block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of curly brackets and may optionally be labelled:

var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);
// expected output: 2

console.log(y);
// expected output: 1
