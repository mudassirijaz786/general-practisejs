//a process that calls itself and have at least one end point(base case)
//examples JSON.parse/JSON.stringify, document.getElementById and DOM traversal algorithms or object traversal
//it's sometime cleaner alternative to iteration
//recursive process stack manner under the hood

//example of call stack (not recursion)
takeShower = () => {
  console.log("Showering");
};
eatBreakfast = () => {
  let meal = cookFood();
  console.log(`Eating ${meal}`);
};
cookFood = () => {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
};
wakeUp = () => {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
};
wakeUp();

/*
    there are two essential parts of a recursive function
        1)base case
        2)different inputs
*/

//below we have function as an example of iterative and recursive approach

// Recursive Version
countDownRecursive = (num) => {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDownRecursive(num);
};
countDownRecursive(3);

// Iterative Version
countDownIterative = (num) => {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
};
countDownIterative(3);

//below we have function as an example of iterative and recursive approach
sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};
console.log(sumRange(4));

//below we have function as an example of iterative and recursive approach
factorialIterative = (num) => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
};
console.log(factorialIterative(5));

factorialRecursive = (num) => {
  if (num === 1) return 1;
  return num * factorialRecursive(num - 1);
};
console.log(factorialRecursive(4));

//where things go wrong in recursion
/*
    1)no base case
    2)forget to return the wrong things
    3)stack overflows
*/

//following is design pattern for recursion
//helper method function, we commonly use it with arrays etc
//with it we have two functions, outer function and inside it we have recursive function
//example
collectOddValues = (arr) => {
  let result = [];

  helper = (helperInput) => {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  };

  helper(arr);

  return result;
};

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//pure recursive version of above function
collectOddValuesPureRecursive = (arr) => {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValuesPureRecursive(arr.slice(1)));
  return newArr;
};

console.log(collectOddValuesPureRecursive([1, 2, 3, 4, 5]));
//pure recursion tips
/*
    1)for array use methods like slice, spread operator, concatination so you don't mutate them
    2)remember! strings are immutable, so you will need to use methods like slice substr, or substring to make copies of string
*/

//challenge question's solutions

// power
power = (base, exponent) => {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
};

// factorial
factorial = (x) => {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
};

// product of array
productOfArray = (arr) => {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
};

// range
recursiveRange = (x) => {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
};

// fibonacci
fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// reverse
reverse = (str) => {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
};

// isPalindrome
isPalindrome = (str) => {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
};

// someRecursive
someRecursive = (array, callback) => {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
};

// flatten
flatten = (oldArr) => {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
};
