// The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.

testNum = a => {
  if (a > 0) {
    return "positive";
  } else {
    return "NOT positive";
  }
};

console.log(testNum(-5));
// expected output: "NOT positive"
