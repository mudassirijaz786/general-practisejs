//this section demonstrates searching

// 1)linear search

//javascript has many searching methods for arrays like indexOf, includes, find and findIndex etc
//linear search is just a simple searching
/*
    pseudocode
        function accepts an array and a value
        loop through the array and checks if the current array element is equal to value we passed in
        if it is, return the index at which the element is found
        if the value is never found, return -1
*/
// code of linearSearch
linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};
console.log(linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 1));
//bigO of linearSearch is following
/*
    1)best case O(1)
    2)worst and average case O(n)
*/

// 2)binary search

//it is much faster from linear search
//rather than eliminating one element at a time, it eliminates half of remaining elements at a time
//it only works on sorted arrays
//under the hood, it uses divide and conquer rule
/*
    pseudocode
        function accepts a sorted array and a value
        create a left pointer at the start of array, and right pointer at the end of array
        while the left pointer comes before the right pointer
          create pointer in the middle
          if you found your wanted value, return its index
          if the value is too small, move the left pointer up
          if the value is too large, move the right pointer down
        if you never find the value, return -1
*/
//code for binary search
// Original Solution
binarySearchOriginal = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
};
console.log(binarySearchOriginal([2, 5, 6, 9, 13, 15, 28, 30], 103));

// Refactored Version
binarySearchRefactored = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
};
console.log(binarySearchRefactored([2, 5, 6, 9, 13, 15, 28, 30], 103));
//bigO of binarySearch is following
/*
    1)best case O(1)
    2)worst and average case O(log(n))
*/

// 3)naive string search

// naïve pattern searching is the simplest method among other pattern searching algorithms
// this algorithm is helpful for smaller texts
// it does not need any pre-processing phases
/*
    pseudocode
       loop over the longer string
       loop over the shorter string
       if the character don't match, break out of the inner loop
       if the character match, keep going
       if you complete the inner loop and find a match, increment the count of matches
       return the count
*/
//code of naiveSearch
naiveSearch = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
};
console.log(naiveSearch("lorielol loled", "lol"));
//bigO of naiveSearch is following
/*
   O(m*n)
*/

// 4)KMP string search

//the Knutt-Morris-Pratt algorithm offers an improvement over the naive approach, published in 1977
//this algorithm more intelligently traverses the longer string to reduce the amount of redundant searching
//In order to determine how far we can shift the shorter string, we can pre-compute the length of the longest (proper) suffix that matches a (proper) prefix
//This tabulation should happen before you start looking for the short string in the long string

//code matchTable
matchTable = (word) => {
  let arr = Array.from({ length: word.length }).fill(0);
  let suffixEnd = 1;
  let prefixEnd = 0;
  while (suffixEnd < word.length) {
    if (word[suffixEnd] === word[prefixEnd]) {
      // we can build a longer prefix based on this suffix
      // store the length of this longest prefix
      // move prefixEnd and suffixEnd
      prefixEnd += 1;
      arr[suffixEnd] = prefixEnd;
      suffixEnd += 1;
    } else if (word[suffixEnd] !== word[prefixEnd] && prefixEnd !== 0) {
      // there's a mismatch, so we can't build a larger prefix
      // move the prefixEnd to the position of the next largest prefix
      prefixEnd = arr[prefixEnd - 1];
    } else {
      // we can't build a proper prefix with any of the proper suffixes
      // let's move on
      arr[suffixEnd] = 0;
      suffixEnd += 1;
    }
  }
  return arr;
};

//code kmpSearch
kmpSearch = (long, short) => {
  let table = matchTable(short);
  let shortIdx = 0;
  let longIdx = 0;
  let count = 0;
  while (longIdx < long.length - short.length + shortIdx + 1) {
    if (short[shortIdx] !== long[longIdx]) {
      // we found a mismatch :(
      // if we just started searching the short, move the long pointer
      // otherwise, move the short pointer to the end of the next potential prefix
      // that will lead to a match
      if (shortIdx === 0) longIdx += 1;
      else shortIdx = table[shortIdx - 1];
    } else {
      // we found a match! shift both pointers
      shortIdx += 1;
      longIdx += 1;
      // then check to see if we've found the substring in the large string
      if (shortIdx === short.length) {
        // we found a substring! increment the count
        // then move the short pointer to the end of the next potential prefix
        count++;
        shortIdx = table[shortIdx - 1];
      }
    }
  }
  return count;
};
//bigO of kmpSearch is following
/*
  O(n + m)
*/

//tips about searching
/*
  1)Searching is a very common task that we often take for granted
  2)When searching through an unsorted collection, linear search is the best we can do
  3)When searching through a sorted collection, we can find things very quickly with binary search
  4)KMP provides a linear time algorithm for searches in strings
 */
