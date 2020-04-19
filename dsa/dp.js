//1) dynamic programming
/*
    "A method for solving a complex problem by breaking it down into 
    a collection of simpler subproblems, 
    solving each of those subproblems just once, and storing their solutions."
*/

//where it works?
//it only works with optimal substructures & overlapping subproblems
/*
    optimal substructures
        A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems
        e.g. SHORTEST PATH
    overlapping problems is?
        A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times 
        e.g. FIBONACCI SEQUENCE
*/

//Problem
//fibonacci sequence Big O in bad case? O(2^n), check https://i.stack.imgur.com/kgXDS.png
//as fibonacci sequence uses recursion and when number is too large it become more like repeating things

// Solution - dynamic programming - "Using past knowledge to make solving a future problem easier"

//Memorization - Storing the results of expensive function calls and returning the cached result when the same inputs occur again

//after applying memorization in fibonacci sequence our solution becomes
fibMemorized = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
};
//fibonacci sequence Big O now? O(n)

//Interesting information, we were working on top-down approach to solve problems, but we can also use bottom-up approach

/*
    TABULATION
        Storing the result of a previous result in a "table" (usually an array)
        Usually done using iteration
        Better space complexity can be achieved using tabulation
*/

//Tabulized version of fibonacci sequence
fibTabulized = (n) => {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};

//Please don't be scared of dynamic programming, it helps us alot

//top-down vs bottom-up approach

//Examples
/*
    Write a function called stairs which accepts n number of stairs. 
    Imagine that a person is standing at the bottom of the stairs
    and wants to reach the top and the person can climb either 1 stair or 2 stairs at a time. 
    Your function should return the number of ways the person can reach the top
    by only climbing 1 or 2 stairs at a time.

    substructures of this problem
        stairs(n) = stairs(n - 1) + stairs(n - 2); 
    This is usually the hardest part of dynamic programming and takes a lot of practice!
*/

stairs = (n) => {
  if (n <= 0) return 0;
  if (n <= 2) return n;
  return stairs(n - 1) + stairs(n - 2);
};
// Brute force - Time Complexity O(2^n)

// again it is a problem to get O(2^n), using MEMOIZATION - Storing the result of an expensive function - Usually done using recursion

stairsMemorized = (n, memo = []) => {
  if (n <= 0) return 0;
  if (n <= 2) return n;
  if (memo[n] > 0) return memo[n];
  memo[n] = stairs(n - 1, memo) + stairs(n - 2, memo);
  return memo[n];
};
// Time Complexity - O(N)

//we have one problem, space complexity it can be solved using tabulization
/*
    Storing the result of a previous result in a "table" (usually an array)
    Usually done using iteration
    Better space complexity can be achieved using tabulation
*/

stairsTabulized = (n) => {
  if (n < 3) return n;
  let store = [1, 1];
  for (let i = 2; i <= n; i++) {
    let total = store[1] + store[0];
    store[0] = store[1];
    store[1] = total;
  }
  return store[1];
};
// Time Complexity - O(N) and Space Complexity - O(1)

// USING LISTS AND MATRICES TO BREAK DOWN PROBLEMS

// Example -The coin change problem
//pseudocode
/*
    Start with the largest denomination
    Once the total can not use the largest
    Move to the 2nd largest
    Work your way down until there is no more change
*/

//uses
/*
    Artificial Intelligence
    Speech Recognition
    Caching
    Image Processing
    Shortest Path Algorithms
    Much, much more!
*/

//1.a) greedy algorithms
/*
    A greedy algorithm is an algorithmic paradigm that follows
    the problem solving heuristic of making the locally 
    optimal choice at each stage with the hope of finding a global optimum.

    An algorithm that makes the best guess about what the right answer is and tries to solve it that way as quickly as possible!
    Example -The coin change problem 
*/

//1.b) backtracking

/*
    "Backtracking is a general algorithm for finding all (or some) 
    solutions to notably constraint satisfaction problems  

    It incrementally builds candidates to the solutions, and abandons a candidate ("backtracks") 
    as soon as it determines that the candidate cannot possibly be completed to a valid solution"
*/

// HOW DOES IT WORK? https://haseebq.com/n-queens-visualizer/
/*
    Puzzle Solving - Sudoku
    N Queens / Rooks
*/

//more about dynamic programming
/*
    Dynamic Programming is the idea of breaking down a problem into smaller subproblems - it's hard
    Optimal substructure is required to use dynamic program and involves figuring out the correct expression to consistently solve subproblems
    Overlapping subproblems is the second essential part of dynamic programming 
    Greedy Algorithms are a more aggressive and not always efficient way of solving algorithms
    Backtracking is quite useful when solving for restrictive conditions with unknown possibilities
*/
