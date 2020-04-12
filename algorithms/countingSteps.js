// program to sum n number

//solution 1
addUpToF1 = (n) => {
  let total = 0; // 1 assignment
  // i = 1 has 1 assignment, i <= n has n comparisons, i++ has n additions and assignments
  for (let i = 1; i <= n; i++) {
    total = total + i; // n additions and n assignments
  }
  return total; // 1 assignment
};
//so total of 5n+2
//regardless of exact numbers, the number of operations grows roughly with n

//solution 2
addUpToF2 = (n) => {
  return (n * (n + 1)) / 2; // 3 operations
};
//3 operations regardless of size of n
