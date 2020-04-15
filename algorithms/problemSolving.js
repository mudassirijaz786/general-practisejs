//problem solving steps (recommended book How To Solve it by George Polya)
/*
    1) understand problem 
        can you restate the problem in my own words?
        what are the inputs that go into the problem?
        what are the outputs come from solution to the problem?
        do you have enough information to solve the problem?
        how should you label the important piece of data that are a part of problem? i.e. what terminologies should you use etc
    2) explore concrete examples
        start with simple examples 
        progress to more complex examples
        explore examples with empty inputs
        explore examples with invalid inputs
    3) break it down
        explicitly write down the steps that you need to take 
    4) solve/simplify   
        find the core difficulty in what you are tyring to do
        temporarily ignore that difficulty
        write a simplified solution then incorporate that difficulty back in
    5) look back and refactor
        can you check the results?
        can you check the results differently?
        can you understand it at a glance
        can you use the results/methods for some other problem?
        can you improve the performance of your solution?
        can you think of other ways to refactor?
        how other people solve this problem?
 */

//below are problem solving patterns
/*
    1)frequency counters
        it uses objects or sets to collect values/frequencies of values
        it avoids the need for nested looping(O(n2)) operations with arrays/strings
 */

//functions as an example of frequency counters
//naive solution
sameNaive = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
};

sameNaive([1, 2, 3, 2], [9, 1, 4, 4]);

//refactored version of the function
sameRefactored = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

sameRefactored([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);

//anagrams function
validAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram("anagrams", "nagaramm");

/*
    2)multiple pointers pattern
        creating pointers or values that corresponds to an index or position and move towards the beginning, end or middle based on a certain condition
*/

//example as sumZeroPair
sumZeroPair = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

sumZeroPair([-4, -3, -2, -1, 0, 1, 2, 5]);

//example as countUniqueValues
countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};
countUniqueValues([1, 2, 2, 5, 7, 7, 99]);

/*
    3)sliding window
        creating window which can either be an array or number from one position to another 
        depending on a certain condition the windows either increases or closes (and a new window is created)
        very usefull for keeping track of a subset of data in an array/string etc
*/
//example maxSubarraySumNaive
maxSubarraySumNaive = (arr, num) => {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

maxSubarraySumNaive([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

//refactored version
maxSubarraySumRefactored = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

maxSubarraySumRefactored([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

/*
    4)divide and conquer
        dividing a data set into smaller chunks and repeating a process with a subset of data
        it tremendously decreases time complexity 
*/
//example binarySearch
binarySearch = (array, value) => {
  var guess,
    min = 0,
    max = array.length - 1;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (array[guess] === value) return guess;
    else if (array[guess] < value) min = guess + 1;
    else max = guess - 1;
  }

  return -1;
};

binarySearch([1, 2, 3, 4], 3);
