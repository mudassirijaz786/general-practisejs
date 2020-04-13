//below code is to find BigO
//bigO is basically upperbound

addUpToF1 = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
};
// as we have one for loop and it is simply O(n)

addUpToF2 = (n) => {
  return (n * (n + 1)) / 2;
};
//simply constant operations O(1)

countUpAndDownF3 = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  for (let j = n - 1; j >= 0; j--) {
    console.log(i);
  }
};
//as above function have two for loops it would have O(2n) we can take it as O(n)

printAllPairsF4 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};
//when we have nesting of loops we have O(n(nesting)) i mean O(n*n) or O(n2) n2 = n square in this case

//to solve these bigO expressions following are rule of thumb
//O(2n) => O(n), O(300) => O(1), O(10n2) => O(n2),
//also smaller terms don't really matter
//O(n+10) => O(n), O(1000n+20) => O(n), O(n2+5n+8) => O(n2)
//order is O(1) < O(log(n)) < O(n) < O(nlog(n)) < O(n2)

//tips and tricks for bigO

/* 
    1)arthmetic operations, variable assignment, assessing element in an array(by index) or object(by key),  are constant
    2)in loop, the complexity is the length of loop times the complexity of whatever happens indside of loop
*/
