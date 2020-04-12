//how fast, less memory-intensive below functions are

// program to add sum n number
const { performance } = require("perf_hooks");

//solution 1
addUpToF1 = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
};

let t1F1 = performance.now();
const resultF1 = addUpToF1(10000000);
console.log(`Sum is ${resultF1}`);
let t2F1 = performance.now();
console.log(`Time eslaped: ${(t2F1 - t1F1) / 1000} seconds`);

//solution 2
addUpToF2 = (n) => {
  return (n * (n + 1)) / 2;
};
let t1F2 = performance.now();
const resultF2 = addUpToF2(10000000);
console.log(`Sum is ${resultF2}`);
let t2F2 = performance.now();
console.log(`Time eslaped: ${(t2F2 - t1F2) / 1000} seconds`);

//these two functions have different times but we cannot rely on time complexity because differenct machines have different speed, time
